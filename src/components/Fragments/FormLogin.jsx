import InputForm from "../Elements/InputForm";
import Button from "../Elements/Button";
import { useEffect, useRef, useState } from "react";
import { loginUser } from "../../services/auth.service";

const FormLogin = () => {
  const [loginError, setLoginError] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    // localStorage.setItem("email", e.target.email.value);
    // localStorage.setItem("password", e.target.password.value);
    if (e.target.username.value && e.target.password.value) {
      const data = {
        username: e.target.username.value,
        password: e.target.password.value,
      };
      loginUser(data, (status, res) => {
        if (status) {
          localStorage.setItem("token", res);
          window.location.href = "/products";
        } else {
          setLoginError(res.response.data);
        }
      });
    } else {
      window.location.href = "/login";
    }
  };
  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      {loginError && (
        <p className="bg-red-700 text-center text-white mb-3 py-2">
          {loginError}
        </p>
      )}
      <InputForm
        type="text"
        placeholder="john Doe"
        name="username"
        label="Username"
        ref={usernameRef}
      />
      <InputForm
        label="Password"
        placeholder="*****"
        name="password"
        type="password"
      />

      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
