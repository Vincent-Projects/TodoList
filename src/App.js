import React, { Suspense, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

import AuthPage from "hoc/AuthPage";
import Page from "hoc/Page";
import Menu from "containers/Menu";

import { checkAuthState } from "redux/actions";
import DiamondSpinner from "components/loaders/DiamondSpinner";
import LandingPage from "containers/LandingPage";
import ProtectedRoute from "components/ProtectedRoute";
import PageNotFound from "containers/PageNotFound";

const Dashboard = React.lazy(() => import("containers/Dashboard"));
const Login = React.lazy(() => import("containers/auth/Login"));
const Signup = React.lazy(() => import("containers/auth/Signup"));
const ValidationAccount = React.lazy(() =>
  import("containers/auth/ValidationAccount")
);

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 786px) {
    & {
      flex-direction: row;
    }
  }
`;

const app = ({ checkAuth, isAuth }) => {
  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AppContainer>
      {isAuth /* IF route === / remove menu */ ? <Menu /> : null}
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/dashboard">
          <ProtectedRoute>
            <Suspense fallback={<DiamondSpinner mode="cubic" />}>
              <Page>
                <Dashboard />
              </Page>
            </Suspense>
          </ProtectedRoute>
        </Route>
        <Route path="/login">
          <Suspense fallback={<DiamondSpinner mode="cubic" />}>
            <Login />
          </Suspense>
        </Route>
        <Route path="/signup">
          <Suspense fallback={<DiamondSpinner mode="cubic" />}>
            <AuthPage>
              <Signup />
            </AuthPage>
          </Suspense>
        </Route>
        <Route path="/auth/confirm/account/:token">
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
    </AppContainer>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkAuth: () => dispatch(checkAuthState()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(app);
