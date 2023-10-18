import { useEffect, useRef, useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import { getProduct } from "../services/product.service";
import { getUsername } from "../services/auth.service";

// const products = [
//   {
//     id: 1,
//     name: "shoes Merah",
//     price: 20,
//     image: "/img/shoes-1.jpeg",
//     description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
//           unde porro libero sint, sapiente nisi a. Pariatur, quam, fuga
//           temporibus ducimus dolore in, quia eaque possimus exercitationem
//           repudiandae aliquid? Repellendus?`,
//   },
//   {
//     id: 2,
//     name: "shoes Baru",
//     price: 14,
//     image: "/img/shoes-1.jpeg",
//     description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati`,
//   },
// ];
// const email = localStorage.getItem("email");

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [username, setUsername] = useState("");

  //ambil data dari local storage
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  // decode username dari API untuk ditampilkan di navbar
  useEffect(() => {
    const dataFromToken = localStorage.getItem('token')
    setUsername(getUsername(dataFromToken))
  }, []);

  //ambil data products dari API
  useEffect(() => {
    getProduct((data) => {
      setProducts(data);
    });
  }, []);

  //penghitungan total price
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    // localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const totalPriceRef = useRef(null);
  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <>
      <div className="w-full h-20 bg-blue-500 flex justify-end items-center pr-10 gap-5 text-white">
        <p>{username}</p>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
      <div className="flex justify-around py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Image sumber={product.image} />
                <CardProduct.Body name={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  id={product.id}
                  handleAddToCart={handleAddToCart}
                />
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <tr key={item.id}>
                      <td className="p-3">
                        {product.title.substring(0, 10)}...
                      </td>
                      <td className="p-3">$ {product.price}</td>
                      <td className="p-3">{item.qty}</td>
                      <td className="p-3">$ {item.qty * product.price}</td>
                    </tr>
                  );
                })}
              <tr ref={totalPriceRef}>
                <td colSpan={3} className="font-bold">
                  Total Price
                </td>
                <td className="px-3 font-bold">$ {totalPrice}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
