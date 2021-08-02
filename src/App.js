import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "containers/Login";
import SignUp from "containers/SignUp";
import Home from "containers/Home";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route component={Login} path="/" exact />
          <Route component={Home} path="/home" exact />
          <Route component={Login} path="/login" exact />
          <Route component={SignUp} path="/sign-up" exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
