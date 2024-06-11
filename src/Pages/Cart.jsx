import React from "react";
import Form from "../Components/Form";
import { useRecipeStates } from "../Context/Context";
import Card from "../Components/Card";

const Cart = () => {
  const { cart } = useRecipeStates();
  return (
    <div>
      <h2>Lista de pedidos</h2>
      <div className="list-container">
        {cart.map((pedido) => (
          <Card item={pedido} key={pedido.id} />
        ))}
      </div>
      <Form />
    </div>
  );
};

export default Cart;
