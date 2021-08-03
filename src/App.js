import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "containers/Login";
import SignUp from "containers/SignUp";
import Home from "containers/Home";
import About from "containers/About";
import PrivateRoute from "routes/Private";
import PublicRoute from "routes/Public";
import { UserContext } from "utils/contexts/userContext";

function App() {
  const { loading } = useContext(UserContext);

  return (
    <>
      <Router>
        {!loading && (
          <Switch>
            <PublicRoute component={Login} path="/login" exact restricted />
            <PublicRoute component={SignUp} path="/sign-up" exact restricted />

            <PrivateRoute component={Home} path="/" exact />
            <PrivateRoute component={Home} path="/home" exact />
            <PrivateRoute component={About} path="/about" exact />
          </Switch>
        )}
      </Router>
    </>
  );
}

export default App;
