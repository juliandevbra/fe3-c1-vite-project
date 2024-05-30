import React, { useEffect, useState } from "react";

const AsyncAwait = () => {
  const [gatito, setGatito] = useState({});
  const [loading, setLoading] = useState(true);
  const url = "https://api.thecatapi.com/v1/images/search";
  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(url);
      let data = await response.json();
      //   console.log(response);
      //   console.log(data);
      setGatito(data[0]);
      setLoading(false);
    };
    fetchData();
  }, []);
  console.log(gatito);
  return <div>{loading ? "Cargando..." : <img src={gatito.url} alt="" />}</div>;
};

export default AsyncAwait;
