import InputForm from "../Elements/InputForm";
import Button from "../Elements/Button";
const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        type="text"
        placeholder="Input your name here..."
        name="name"
        label="Full Name"
      />
      <InputForm
        type="email"
        placeholder="example@email.com"
        name="email"
        label="Email"
      />
      <InputForm
        label="Password"
        placeholder="*****"
        name="password"
        type="password"
      />
      <InputForm
        label="Confirm Password"
        placeholder="*****"
        name="confirm password"
        type="password"
      />

      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
