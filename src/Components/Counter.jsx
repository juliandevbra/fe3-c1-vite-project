import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const restar = () => {
    setCounter(counter - 1);
  };
  const sumar = () => {
    setCounter((prevState) => {
      console.log(prevState);
      return prevState + 1;
    });
  };
  return (
    <div className="counter">
      <button onClick={restar}>-</button>
      <h3>{counter}</h3>
      <button onClick={sumar}>+</button>
    </div>
  );
};
export default Counter;
