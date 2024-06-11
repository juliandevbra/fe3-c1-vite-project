import React, { useState } from "react";
import Button from "../Components/Button";

const Contact = ({ handleClick }) => {
  const [mensaje, setMensaje] = useState("");
  return (
    <div>
      <h2>Contactenos:</h2>
      <input type="email" role="email" />
      <input
        type="text"
        data-testid="consulta"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
      />
      <Button onClick={handleClick}>Enviar</Button>
    </div>
  );
};

export default Contact;
