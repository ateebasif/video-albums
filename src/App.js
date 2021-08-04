import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Login from "containers/Login";
import SignUp from "containers/SignUp";
import Home from "containers/Home";
import About from "containers/About";
import Albums from "containers/Albums";
import AlbumView from "containers/AlbumView";

import { UserContext } from "utils/contexts/userContext";
import PrivateRoute from "routes/Private";
import PublicRoute from "routes/Public";

function App() {
  const { loading } = useContext(UserContext);

  return (
    <>
      <Router>
        {!loading && (
          <Switch>
            <PublicRoute component={Login} path="/login" exact restricted />
            <PublicRoute component={SignUp} path="/sign-up" exact restricted />

            <PrivateRoute component={Albums} path="/" exact />
            <PrivateRoute component={Albums} path="/albums" exact />
            <PrivateRoute component={AlbumView} path="/album/:name" exact />
            <PrivateRoute component={About} path="/about" exact />
          </Switch>
        )}
      </Router>
    </>
  );
}

export default App;
