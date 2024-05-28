import React from "react";

const Envio = ({ cliente }) => {
  return (
    <>
      <h3>Gracias por tu compra, {cliente.nombre}!</h3>
      <h3>En 20 minutos va tu pedido a {cliente.direccion}.</h3>
    </>
  );
};

export default Envio;
