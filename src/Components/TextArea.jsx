import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function TArea(props) {
  const handleKeyDown = (e) => {
    const validKeys = /^[0-9+\-*/.\n\r]+$/;
    if (!validKeys.test(e.key) && e.key !== "Backspace") {
      e.preventDefault();
    }
  };
  const { exp, result } = props;
  return (
    <textarea
      value={exp + (result ? `\n\n= ${result}` : "")}
      onChange={props.onChange}
      onKeyDown={handleKeyDown}
      className="form-control bg-dark text-bg-primary"
      style={{ height: "150px" }}
      aria-label="With textarea"
    ></textarea>
  );
}
