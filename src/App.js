import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "containers/Login";
import SignUp from "containers/SignUp";
import Albums from "containers/Albums";
import AlbumView from "containers/AlbumView";
import ProfileSettings from "containers/ProfileSettings";
import NotFound from "components/NotFound";

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
            <PrivateRoute component={ProfileSettings} path="/settings" exact />
            <Route component={NotFound} />
          </Switch>
        )}
      </Router>
    </>
  );
}

export default App;
