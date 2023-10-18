import InputForm from "../Elements/InputForm";
import Button from "../Elements/Button";
import { useEffect, useRef } from "react";

const handleLogin = (e) => {
  e.preventDefault();
  // console.log(e.target.email.value);
  localStorage.setItem("email", e.target.email.value);
  localStorage.setItem("password", e.target.password.value);
  if (e.target.email.value && e.target.password.value) {
    window.location.href = "/products";
  } else {
    window.location.href = "/login";
  }
};

const FormLogin = () => {
  const emailRef = useRef(null);
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        type="email"
        placeholder="example@email.com"
        name="email"
        label="Email"
        ref={emailRef}
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
