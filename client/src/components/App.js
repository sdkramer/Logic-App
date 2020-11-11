import React, { useEffect } from "react";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Kinds from "./Kinds";
import Login from './Login';
import Logout from './Logout';
import Simple from './Simple';
import PrivateRoute from './PrivateRoute';
import Route from './Route';
import Header from './Header';
import p5 from 'p5';





const App = (props) => {
 const myRef = React.createRef()

 const Sketch = (p) => {
  const barWidth = 20;
  let lastBar = -1;

   p.setup = () => {
 p.createCanvas(720, 40);
 p.colorMode(p.HSB, p.height, p.height, p.height);
 p.noStroke();
 p.background(0);
   }
   p.draw = () => {
    let whichBar = p.mouseX / barWidth;
    if (whichBar !== lastBar) {
      let barX = whichBar * barWidth;
      p.fill(p.mouseY, p.height, p.height);
      p.rect(barX, 0, barWidth, p.height);
      lastBar = whichBar;
   }
 }}

 useEffect(() => {
   const myP5 = new p5(Sketch, myRef.current)
 }, [])
 

  // const history = useHistory();
  // console.log('history:', history);

  // const logout = (e) => {
  //   e.preventDefault();
  //   localStorage.setItem('token', '');
  //   console.log('history:', history);
  // }

  return (
    <div>
       <div ref={myRef}></div>
      <Header />
    <Route path='/'><Login /></Route>
    <Route path='/logout'><Logout /></Route>
   
    </div>
  //   <Router>
  // <div>
  //     <h2>Logic App</h2>
       
  //    <ul>
  //      <li>
  //        <Link to='/login'>Login</Link>
  //      </li>
  //      <li>
  //        <Link to='/protected'>Protected Page</Link>
  //      </li>
  //      <li>
  //      <Link to='/logout'>Log out</Link>
  //      </li>
  //    </ul>
  //    <Switch>
  //      <PrivateRoute exact path='/protected' component={Kinds} />
  //      <Route path='/login' component={Login} />
  //      <Route path='/protected/simple' component={Simple} />
  //    </Switch>
  //    <Route path='/logout' component={Logout} />
  //   </div>
  //   </Router>
  
  );
};

export default App
