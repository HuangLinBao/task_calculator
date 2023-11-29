import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Calculator() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4 offset-4">
          <div className="calculator">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="0"
              readOnly
            />
            <div className="row">
              <button className="btn btn-secondary col">7</button>
              <button className="btn btn-secondary col">8</button>
              <button className="btn btn-secondary col">9</button>
              <button className="btn btn-warning col">/</button>
            </div>
            <div className="row">
              <button className="btn btn-secondary col">4</button>
              <button className="btn btn-secondary col">5</button>
              <button className="btn btn-secondary col">6</button>
              <button className="btn btn-warning col">*</button>
            </div>
            <div className="row">
              <button className="btn btn-secondary col">1</button>
              <button className="btn btn-secondary col">2</button>
              <button className="btn btn-secondary col">3</button>
              <button className="btn btn-warning col">-</button>
            </div>
            <div className="row">
              <button className="btn btn-secondary col">0</button>
              <button className="btn btn-secondary col">.</button>
              <button className="btn btn-success col">=</button>
              <button className="btn btn-warning col">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
