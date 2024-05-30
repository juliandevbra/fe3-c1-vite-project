import Counter from "./Counter";
import CardStyles from "../Styles/Card.module.css";
import { useState } from "react";

// console.log(CardStyles);

const Card = ({ item, setCart }) => {
  const { image, title, pricePerServing } = item;

  return (
    <div className={CardStyles.cardContainer}>
      <img src={image} alt="" className={CardStyles.cardImg} />
      <h4>{title}</h4>
      <h4>${pricePerServing}</h4>
      <Counter />
      <button onClick={() => setCart((prevState) => [...prevState, item])}>
        🛒
      </button>
    </div>
  );
};

export default Card;
