import axios from "axios";
import React, { useEffect, useState } from "react";

const ExampleFetch = () => {
  const [perrito, setPerrito] = useState({});
  const url = "https://dog.ceo/api/breeds/image/random";

  useEffect(() => {
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.status == "success") {
    //       setPerrito(data);
    //     }
    //   })
    //   .catch((err) => console.log(err));

    axios(url)
      .then((res) => setPerrito(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <img src={perrito.message} alt="" />
    </div>
  );
};

export default ExampleFetch;
