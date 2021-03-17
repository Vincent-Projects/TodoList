import React, { Suspense, useEffect } from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import { connect } from "react-redux";

import { checkAuthState } from "./redux/actions";

import LandingPage from "./containers/LandingPage";

import ProtectedRoute from "./components/ProtectedRoute";

const Dashboard = React.lazy(() => import("./containers/Dashboard"));
const Login = React.lazy(() => import("./containers/auth/Login"));
const Signup = React.lazy(() => import("./containers/auth/Signup"));

const app = ({ checkAuth }) => {
  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <div>
      {/* <div>
                <p>Menu Here</p>
            </div> // Add auth flow*/}
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/dashboard">
          <ProtectedRoute>
            <Suspense fallback={<div>Loading...</div>}>
              <Dashboard />
            </Suspense>
          </ProtectedRoute>
        </Route>
        <Route path="/login">
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>
        </Route>
        <Route path="/signup">
          <Suspense fallback={<div>Loading...</div>}>
            <Signup />
          </Suspense>
        </Route>
        <Route>
          <h1>404 Error</h1>
        </Route>
      </Switch>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    checkAuth: () => dispatch(checkAuthState())
  };
};
export default connect(null, mapDispatchToProps)(app);