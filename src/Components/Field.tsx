import { useState } from "react";

export const anotherTest = "Hello from Field.tsx";
export let justTesting = "";

interface Props {
  id: string;
  carer: string;
  dataPoint: string;
  label: string;
  placeholder: string;
}

const Field = ({ id, carer, dataPoint, label, placeholder }: Props) => {
  const [fieldValue, setFieldValue] = useState("");
  // Restrict input to numbers
  const handleChange = (
    inputValue: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const inputRegex = /^[0-9]*$/; // Regular expression to match only numbers

    if (inputRegex.test(inputValue) || inputValue === "") {
      setValue(inputValue);
      justTesting = inputValue;
      console.log(justTesting);
    }
  };

  return (
    <div>
      <label className="text-gray-700 text-base font-bold mb-1">{label}</label>
      <input
        className="w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        type="text"
        required
        value={fieldValue}
        onChange={(e) => handleChange(e.target.value, setFieldValue)}
        placeholder={placeholder}
        name={dataPoint}
      />
    </div>
  );
};

export default Field;
