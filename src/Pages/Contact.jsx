import React, { useState } from "react";

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
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
};

export default Contact;
