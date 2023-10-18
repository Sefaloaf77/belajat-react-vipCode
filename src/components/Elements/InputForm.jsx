import Input from "./Input/Input";
import Label from "./Input/Label";

const InputForm = (props) => {
  const { label, name, placeholder, type } = props;
  //   console.log({label})
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} placeholder={placeholder} name={name} />
    </div>
  );
};

export default InputForm;
