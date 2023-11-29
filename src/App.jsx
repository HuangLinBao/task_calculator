import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import TArea from "./Components/TextArea";
import Btn from "./Components/Button";

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setExpression((expression) => expression + value);
  };

  const handleCalculate = () => {
    try {
      const calculatedResult = eval(expression);

      // Check if the result is undefined or NaN
      if (
        calculatedResult === undefined ||
        isNaN(calculatedResult) ||
        calculatedResult === Infinity
      ) {
        setResult("💀");
      } else {
        setResult(calculatedResult);
      }
    } catch (error) {
      setResult("💀");
    }
  };

  const handleClear = () => {
    setExpression("");
    setResult("");
  };
  return (
    <div className="d-flex justify-content-center align-items-center shadow p-5 rounded bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <TArea
              exp={expression}
              result={result}
              onChange={(e) => setExpression(e.target.value)}
            ></TArea>
          </div>
          <div className="col-8 mt-2">
            <div className="row">
              <Btn handle={handleButtonClick} value="7"></Btn>
              <Btn handle={handleButtonClick} value="8"></Btn>
              <Btn handle={handleButtonClick} value="9"></Btn>
            </div>
            <div className="row">
              <Btn handle={handleButtonClick} value="4"></Btn>
              <Btn handle={handleButtonClick} value="5"></Btn>
              <Btn handle={handleButtonClick} value="6"></Btn>
            </div>
            <div className="row">
              <Btn handle={handleButtonClick} value="1"></Btn>
              <Btn handle={handleButtonClick} value="2"></Btn>
              <Btn handle={handleButtonClick} value="3"></Btn>
            </div>
            <div className="row">
              <Btn handle={handleButtonClick} value="0"></Btn>
              <Btn handle={handleButtonClick} value="."></Btn>
              <Btn handle={handleCalculate} value="="></Btn>
            </div>
          </div>
          <div className="col-4 mt-2">
            <Btn handle={handleButtonClick} value="/"></Btn>
            <Btn handle={handleButtonClick} value="*"></Btn>
            <Btn handle={handleButtonClick} value="-"></Btn>
            <Btn handle={handleButtonClick} value="+"></Btn>
          </div>
          <div className="col-12 mt-2">
            <Btn handle={handleClear} value="C"></Btn>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
