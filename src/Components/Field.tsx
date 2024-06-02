import React, { useState } from "react";

interface Props {
  label: string;
  placeholder: string;
  value: string;
  description: string;
  dollarOrWeek: string;
  onChange: (newValue: string) => void;
}

const Field = ({
  label,
  placeholder,
  value,
  description,
  dollarOrWeek,
  onChange,
}: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  // Restrict input to numbers
  // const handleChange = (
  //   inputValue: string,
  //   setValue: React.Dispatch<React.SetStateAction<string>>
  // ) => {
  //   const inputRegex = /^[0-9]*$/; // Regular expression to match only numbers

  //   if (inputRegex.test(inputValue) || inputValue === "") {
  //     setValue(inputValue);
  //   }
  // };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    //Filter out non-numeric characters
    if (/^\d*$/.test(newValue)) {
      onChange(newValue);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 100);
  };

  const inputClassName =
    dollarOrWeek == "dollar"
      ? "pl-4 w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      : "w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline";

  const spanDollarOrWeek =
    dollarOrWeek == "dollar" ? (
      <span className="absolute inset-y-0 left-0 flex items-center pr-3 text-gray-700">
        $
      </span>
    ) : (
      <span className="absolute inset-y-0 right-28 flex items-center pr-3 text-gray-700">
        weeks
      </span>
    );

  return (
    <div className="relative w-56">
      <label className="text-gray-700 text-base font-bold mb-1">{label}</label>
      <div className="relative">
        <input
          className={inputClassName}
          type="text"
          required
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {spanDollarOrWeek}
      </div>
      {isFocused && <p className="mt-2 text-gray-600 text-sm">{description}</p>}
    </div>
  );
};

export default Field;
