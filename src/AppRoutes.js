import React, { Suspense } from "react";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import {
  loginRoute,
  signupRoute,
  landingPageRoute,
  dashboardRoute,
  validateAccountRoute
} from "./routes";

import AuthPage from "layouts/AuthPage";
import Page from "layouts/Page";

import ProtectedRoute from "hoc/ProtectedRoute";
import LandingPage from "pages/LandingPage";
import PageNotFound from "pages/PageNotFound";
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const Login = React.lazy(() => import("pages/auth/Login"));
const Signup = React.lazy(() => import("pages/auth/Signup"));
const ValidationAccount = React.lazy(() =>
  import("pages/auth/ValidationAccount")
);

import DiamondSpinner from "components/loaders/DiamondSpinner";

const AppRoutes = ({ isAuth }) => {
  return (
    <Switch>
      <Route exact path={landingPageRoute}>
        {isAuth ? <Redirect to="/dashboard" /> : <LandingPage />}
      </Route>
      <Route path={dashboardRoute}>
        <ProtectedRoute>
          <Suspense fallback={<DiamondSpinner mode="cubic" />}>
            <Page>
              <Dashboard />
            </Page>
          </Suspense>
        </ProtectedRoute>
      </Route>
      <Route path={loginRoute}>
        <Suspense fallback={<DiamondSpinner mode="cubic" />}>
          <Login />
        </Suspense>
      </Route>
      <Route path={signupRoute}>
        <Suspense fallback={<DiamondSpinner mode="cubic" />}>
          <AuthPage>
            <Signup />
          </AuthPage>
        </Suspense>
      </Route>
      <Route path={validateAccountRoute}>
        <Suspense fallback={<DiamondSpinner mode="cubic" />}>
          <AuthPage>
            <ValidationAccount />
          </AuthPage>
        </Suspense>
      </Route>
      <Route>
        <Page>
          <PageNotFound />
        </Page>
      </Route>
    </Switch>
  );
};

export default AppRoutes;

