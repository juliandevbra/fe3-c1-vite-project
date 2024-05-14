import { useState } from "react";

const Counter = () => {
  //   let contador = 0;

  const [counter, setCounter] = useState(0);
  //   console.log("Se vuelve a renderizar el componente con el valor de ", counter);
  const restar = () => {
    // console.log(contador);
    // contador--;
    setCounter(counter - 1);
  };
  const sumar = () => {
    // console.log(contador);
    // contador++;
    // setCounter(counter + 1);
    //Otra forma de actualizar el estado:
    setCounter((prevState) => {
      console.log(prevState);
      return prevState + 1;
    });
  };
  //   console.log(contador);
  return (
    <div className="counter">
      <button onClick={restar}>-</button>
      <h3>{counter}</h3>
      <button onClick={sumar}>+</button>
    </div>
  );
};
export default Counter;
