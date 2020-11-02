import React, { useState, useEffect } from "react";
import axios from "axios";

const Kinds = () => {
  const [kinds, setKinds] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/kinds")
      .then((res) => {
        setKinds(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(kinds[0]);

  return (
    <div>
      <h2>Kinds of Arguments</h2>
      {kinds.map((kind) => (
        <div>
          <h3>{kind.kind}</h3>
          <p>{kind.definition}</p>
        </div>
      ))}
    </div>
  );
};

export default Kinds;
