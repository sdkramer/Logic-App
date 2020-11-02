import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Kinds from "./Kinds";
import Login from './Login';
import Logout from './Logout';
import Simple from './Simple';
import PrivateRoute from './PrivateRoute';



const App = (props) => {

  // const history = useHistory();
  // console.log('history:', history);

  // const logout = (e) => {
  //   e.preventDefault();
  //   localStorage.setItem('token', '');
  //   console.log('history:', history);
  // }

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
       <li>
       <Link to='/logout'>Log out</Link>
       </li>
     </ul>
     <Switch>
       <PrivateRoute exact path='/protected' component={Kinds} />
       <Route path='/login' component={Login} />
       <Route path='/protected/simple' component={Simple} />
     </Switch>
     <Route path='/logout' component={Logout} />
    </div>
    </Router>
  
  );
};

export default App;
