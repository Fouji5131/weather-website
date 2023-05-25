import React, { useState } from "react";

const Input = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    props.setCity(inputValue);
  };

  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder="Enter City"
        value={inputValue}
        onChange={handleInputChange}
        className="bg-transparent border-b-2 p-2 sm:w-3/5 xl:w-2/5 outline-none "
      />
    </div>
  );
};

export default Input;
