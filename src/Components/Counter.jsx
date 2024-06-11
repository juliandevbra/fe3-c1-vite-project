import { useState } from "react";
import Button from "./Button";

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
      {/* <button onClick={restar}>-</button> */}
      <Button onClick={restar}>-</Button>
      <h3>{counter}</h3>
      {/* <button onClick={sumar}>+</button> */}
      <Button onClick={sumar}>+</Button>
    </div>
  );
};
export default Counter;
