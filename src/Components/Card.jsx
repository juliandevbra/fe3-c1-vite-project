import Counter from "./Counter";
import CardStyles from "../Styles/Card.module.css";
import { useState } from "react";

// console.log(CardStyles);

const Card = ({ item, setCart }) => {
  const { img, tipo, precio } = item;

  return (
    <div className={CardStyles.cardContainer}>
      <img src={img} alt="" className={CardStyles.cardImg} />
      <h4>{tipo}</h4>
      <h4>{precio}</h4>
      <Counter />
      <button onClick={() => setCart((prevState) => [...prevState, item])}>
        🛒
      </button>
    </div>
  );
};

export default Card;
