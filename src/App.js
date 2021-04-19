import React, { useEffect } from "react";
import { connect } from "react-redux";
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

const app = ({ checkAuth, isAuth, theme }) => {
  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <ThemeProvider theme={!objectIsEmpty(theme) ? theme : getTheme()}>
      <AppContainer>
        {isAuth ? <Menu /> : null}
        <AppRoutes isAuth={isAuth} />
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
