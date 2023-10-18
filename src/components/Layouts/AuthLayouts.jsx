import { Link } from "react-router-dom";
const AuthLayouts = (props) => {
  const { title, children, type } = props;
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-xs">
        <h1 className="text-blue-600 text-3xl font-bold mb-2">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, please enter your details!
        </p>
        {children}
        {/* {type === "login" ? (
          <p className="mt-4 text-center">
            Dont have an account?{" "}
            <Link to="/register" className="font-bold text-blue-700">
              Sign Up
            </Link>
          </p>
        ) : (
          <p className="mt-4 text-center">
            Have an account?{" "}
            <Link to="/login" className="font-bold text-blue-700">
              Sign In
            </Link>
          </p>
        )} */}
        <Type type={type} />
      </div>
    </div>
  );
};

const Type = ({ type }) => {
  if (type === "login") {
    return (
      <p className="mt-4 text-center">
        Dont have an account?{" "}
        <Link to="/register" className="font-bold text-blue-700">
          Sign Up
        </Link>
      </p>
    );
  } else {
    return (
      <p className="mt-4 text-center">
        Have an account?{" "}
        <Link to="/login" className="font-bold text-blue-700">
          Sign In
        </Link>
      </p>
    );
  }
};

export default AuthLayouts;
