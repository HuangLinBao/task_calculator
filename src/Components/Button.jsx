import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Btn(props) {
  const { handle, value } = props;
  const handleClick = () => {
    handle(value);
  };
  const handleCalculate = () => {
    handle();
  };

  return (
    <button
      onClick={value === "=" ? handleCalculate : handleClick}
      className="btn btn-outline-light m-1 col w-100"
      type="submit"
    >
      {value}
    </button>
  );
}
