import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

/* interface ProtectedRoute {
    isAuth: boolean;
    children: React.ReactChildren
} */

const ProtectedRoute = ({ isAuth, children }) => {
  if (!isAuth) {
    return <Redirect to="/login" />;
  }

  return <>{children}</>;
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
