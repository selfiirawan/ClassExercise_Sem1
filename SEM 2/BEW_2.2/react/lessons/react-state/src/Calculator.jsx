import { useState } from "react";

export default function Calculator() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const addButtonClick = (e) => {
    e.preventDefault();
    setCount(count + Number(inputValue));
  };

  const subtractButtonClick = (e) => {
    e.preventDefault();
    setCount(count - Number(inputValue));
  };

  const multiplyButtonClick = (e) => {
    e.preventDefault();
    setCount(count * Number(inputValue));
  };

  const divideButtonClick = (e) => {
    e.preventDefault();
    setCount(count / Number(inputValue));
  };

  const resetButtonClick = (e) => {
    e.preventDefault();
    setCount(0);
  };

  return (
    <div>
      <h2>Addition Calculator</h2>
      <p>Current value is {count}</p>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br />
      <button onClick={addButtonClick}>Add (+)</button>
      <br />
      <button onClick={subtractButtonClick}>Subtract (-)</button>
      <br />
      <button onClick={multiplyButtonClick}>Multiply (*)</button>
      <br />
      <button onClick={divideButtonClick}>Divide (/)</button>
      <br />
      <button onClick={resetButtonClick}>Reset</button>
    </div>
  );
}
