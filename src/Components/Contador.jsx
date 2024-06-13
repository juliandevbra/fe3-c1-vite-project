import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "incrementar":
      return { count: state.count + 1 };
    case "decrementar":
      return { count: state.count - 1 };
    case "reset":
      return { count: action.payload };
    case "random":
      return { count: action.payload };
    default:
      throw new Error();
  }
};

const initialState = { count: 0 };

const Contador = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const randomNum = Math.floor(Math.random() * 100) + 1;
  console.log(randomNum);
  return (
    <div>
      <h1>Contador: {state.count}</h1>
      <button onClick={() => dispatch({ type: "decrementar" })}>-</button>
      <button onClick={() => dispatch({ type: "incrementar" })}>+</button>
      <button onClick={() => dispatch({ type: "reset", payload: 5 })}>
        Reset
      </button>
      <button onClick={() => dispatch({ type: "random", payload: randomNum })}>
        Random
      </button>
    </div>
  );
};

export default Contador;
