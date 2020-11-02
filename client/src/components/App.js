import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Kinds from "./Kinds";
import Login from './Login';
import Simple from './Simple';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <Router>
  <div>
      <h2>Logic App</h2>
     <ul>
       <li>
         <Link to='/login'>Login</Link>
       </li>
       <li>
         <Link to='/protected'>Protected Page</Link>
       </li>
     </ul>
     <Switch>
       <PrivateRoute exact path='/protected' component={Kinds} />
       <Route path='/login' component={Login} />
       <Route path='/protected/simple' component={Simple} />
     </Switch>
    </div>
    </Router>
  
  );
};

export default App;
