import Button from "../Elements/Button";

const CardProduct = ({ children }) => {
  //   const { children } = props;
  return (
    <div className="w-full max-w-xs bg-gray-800 border border-gray-600 rounded-lg shadow flex flex-col justify-between mx-2 my-2">
      {children}
    </div>
  );
};

const Image = ({ sumber }) => {
  return (
    <a href="#">
      <img
        src={sumber}
        alt="product"
        className="p-8 rounded-t-lg h-60 w-full object-cover"
      />
    </a>
  );
};

const Body = ({ name, children }) => {
  return (
    <div className="p-5 h-full">
      <a href="#">
        <h5 className="text-xl font-bold tracking-tight text-white">{name}</h5>
        <p className="text-m text-white">{children.substring(0, 100)}...</p>
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
