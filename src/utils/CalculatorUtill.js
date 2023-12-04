export const calculateResult = (expression, setResult) => {
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
