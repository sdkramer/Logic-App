import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import Simple from "./Simple";

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
          <h2>{kind.kind}</h2>
          <p>{kind.definition}</p>
        </div>
      ))}
      {/* <Link to='/protected/simple'>Examples of arguments</Link> */}
    </div>
  );
};

export default Kinds;
