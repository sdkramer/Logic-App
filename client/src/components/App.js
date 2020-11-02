import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Kinds from "./Kinds";

const App = () => {
  return (
    <div>
      <h2>Logic App</h2>
      <Kinds />
    </div>
  );
};

export default App;
