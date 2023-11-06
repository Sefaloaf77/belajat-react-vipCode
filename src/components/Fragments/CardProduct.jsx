import { Link } from "react-router-dom";
import Button from "../Elements/Button";

const CardProduct = ({ children }) => {
  //   const { children } = props;
  return (
    <div className="flex flex-col justify-between w-full max-w-xs mx-2 my-2 bg-gray-800 border border-gray-600 rounded-lg shadow">
      {children}
    </div>
  );
};

const Image = ({ id, sumber }) => {
  return (
    <Link to={`/product/${id}`}>
      <img
        src={sumber}
        alt="product"
        className="object-cover w-full p-8 rounded-t-lg h-60"
      />
    </Link>
  );
};

const Body = ({ name, children }) => {
  return (
    <div className="h-full p-5">
      <a href="#">
        <h5 className="text-xl font-bold tracking-tight text-white">{name}</h5>
        <p className="text-white text-m">{children.substring(0, 100)}...</p>
      </a>
    </div>
  );
};

const Footer = ({ price, handleAddToCart, id }) => {
  return (
    <div className="flex items-center justify-between px-5 mb-5">
      <span className="text-2xl font-bold text-yellow-400">$ {price}</span>
      <Button classname="bg-blue-600" onClick={() => handleAddToCart(id)}>
        Add To Cart
      </Button>
    </div>
  );
};

CardProduct.Image = Image;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
