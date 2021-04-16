import React, { Suspense, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import styled, { ThemeProvider } from "styled-components";

import { getTheme } from "./theme";
import { objectIsEmpty } from "utils/object";

import AuthPage from "layouts/AuthPage";
import Page from "layouts/Page";
import Menu from "layouts/Menu";

import LandingPage from "pages/LandingPage";
import ProtectedRoute from "components/ProtectedRoute";
import PageNotFound from "pages/PageNotFound";
const Dashboard = React.lazy(() => import("pages/Dashboard"));
const Login = React.lazy(() => import("pages/auth/Login"));
const Signup = React.lazy(() => import("pages/auth/Signup"));
const ValidationAccount = React.lazy(() =>
  import("pages/auth/ValidationAccount")
);

import { checkAuthState } from "redux/actions";
import DiamondSpinner from "components/loaders/DiamondSpinner";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 786px) {
    & {
      flex-direction: row;
    }
  }
`;

const app = ({ checkAuth, isAuth, theme }) => {
  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <ThemeProvider theme={!objectIsEmpty(theme) ? theme : getTheme()}>
      <AppContainer>
        {isAuth /* IF route === / remove menu */ ? <Menu /> : null}
        <Switch>
          <Route exact path="/">
            {isAuth ? <Redirect to="/dashboard" /> : <LandingPage />}
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
    </ThemeProvider>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    theme: state.settings.theme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkAuth: () => dispatch(checkAuthState()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(app);
