import React from "react";
import Form from "../Components/Form";
import { useRecipeStates } from "../Context/Context";
import Card from "../Components/Card";
import Button from "../Components/Button";

const Cart = () => {
  const { state, dispatch } = useRecipeStates();
  return (
    <div>
      <h2>Lista de pedidos</h2>
      <div className="list-container">
        {state.cart.map((pedido) => (
          <Card item={pedido} key={pedido.id}>
            <Button
              onClick={() => dispatch({ type: "DELETE_CART", payload: pedido })}
            >
              ❌
            </Button>
          </Card>
        ))}
      </div>
      <Form />
    </div>
  );
};

export default Cart;
