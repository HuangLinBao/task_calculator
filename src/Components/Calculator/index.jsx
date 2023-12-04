import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import TArea from "../TextArea/index";
import Btn from "../Button/index";
import "../../App.scss";
import { calculateResult } from "../../utils/CalculatorUtill";
export default function Calculator() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setExpression((expression) => expression + value);
  };

  const handleClear = () => {
    setExpression("");
    setResult("");
  };
  const handleCalculate = () => {
    calculateResult(expression, setResult);
  };
  const ButtonsGrid = [
    {
      value: "7",
      handler: handleButtonClick,
      row: 1,
    },
    {
      value: "8",
      handler: handleButtonClick,
      row: 1,
    },
    {
      value: "9",
      handler: handleButtonClick,
      row: 1,
    },
    {
      value: "4",
      handler: handleButtonClick,
      row: 2,
    },
    {
      value: "5",
      handler: handleButtonClick,
      row: 2,
    },
    {
      value: "6",
      handler: handleButtonClick,
      row: 2,
    },
    {
      value: "1",
      handler: handleButtonClick,
      row: 3,
    },
    {
      value: "2",
      handler: handleButtonClick,
      row: 3,
    },
    {
      value: "3",
      handler: handleButtonClick,
      row: 3,
    },
    {
      value: "0",
      handler: handleButtonClick,
      row: 4,
    },
    {
      value: ".",
      handler: handleButtonClick,
      row: 4,
    },
    {
      value: "=",
      handler: handleCalculate,
      row: 4,
    },
  ];
  const ButtonsCol = [
    {
      value: "/",
      handler: handleButtonClick,
    },
    {
      value: "*",
      handler: handleButtonClick,
    },
    {
      value: "-",
      handler: handleButtonClick,
    },
    {
      value: "+",
      handler: handleButtonClick,
    },
  ];
  const renderButtonsGrid = () => {
    const groupedByRow = ButtonsGrid.reduce((acc, button) => {
      const { row, ...rest } = button;
      if (!acc[row]) {
        acc[row] = [];
      }
      acc[row].push(rest);
      return acc;
    }, {});

    const arraysPerRow = Object.values(groupedByRow);
    return arraysPerRow.map((row, rowIndex) => (
      <div key={rowIndex} className="row">
        {row.map((button, buttonIndex) => (
          <Btn key={buttonIndex} handle={button.handler} value={button.value} />
        ))}
      </div>
    ));
  };
  const renderButtonsCol = () => {
    return ButtonsCol.map((button, buttonIndex) => (
      <Btn key={buttonIndex} handle={button.handler} value={button.value} />
    ));
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
            />
          </div>
          <div className="col-8 mt-2">{renderButtonsGrid()}</div>
          <div className="col-4 mt-2">{renderButtonsCol()}</div>
          <div className="col-12 mt-2">
            <Btn handle={handleClear} value="C" />
          </div>
        </div>
      </div>
    </div>
  );
}
