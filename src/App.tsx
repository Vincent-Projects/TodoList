import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import styled, { ThemeProvider } from "styled-components";

import { getTheme } from "./theme";
import { objectIsEmpty } from "utils/object";

import AppRoutes from "./AppRoutes";

import Menu from "layouts/Menu";

import { checkAuthState } from "redux/actions";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(${(props) => props.theme.bg0dp});
  color: rgb(${(props) => props.theme.onBg});
  width: 100%;
  height: 100vh;

  @media only screen and (min-width: 786px) {
    & {
      flex-direction: row;
    }
  }
`;

const mapStateToProps = (state: any) => {
  return {
    isAuth: state.auth.isAuth,
    theme: state.settings.theme,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    checkAuth: () => dispatch(checkAuthState()),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromStore = ConnectedProps<typeof connector>;

type AppProps = PropsFromStore & {
  checkAuth: () => void;
  isAuth: boolean;
  theme: any;
};

const App = ({ checkAuth, isAuth, theme }: AppProps) => {
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  return (
    <ThemeProvider theme={!objectIsEmpty(theme) ? theme : getTheme()}>
      <AppContainer>
        {isAuth ? <Menu /> : null}
        <AppRoutes isAuth={isAuth} />
      </AppContainer>
    </ThemeProvider>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
