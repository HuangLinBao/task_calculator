import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function TArea(props) {
  const { exp, result } = props;
  return (
    <textarea
      value={exp + (result ? `\n\n= ${result}` : "")}
      onChange={props.onChange}
      className="form-control bg-dark text-bg-primary"
      style={{ height: "150px" }}
      aria-label="With textarea"
    ></textarea>
  );
}
