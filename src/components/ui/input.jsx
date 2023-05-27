import React, { useState, useRef } from "react";
import Search from "../../assets/images/search.png";

const Input = (props) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const inValue = inputRef.current.value;
    props.setCity(inValue);
    setInputValue("");
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center space-x-2 xl:w-2/5"
      >
        <input
          type="text"
          placeholder="Enter City"
          ref={inputRef}
          value={inputValue}
          onChange={handleInputChange}
          className="bg-transparent border-b-2 w-4/5 p-2 outline-none"
        />
        <button type="submit">
          <img src={Search} alt="" className="w-6 h-6 hover:scale-125" />
        </button>
      </form>
    </div>
  );
};

export default Input;
