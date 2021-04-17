import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

interface ProtectedRouteProps {
  isAuth: boolean;
  children: React.ReactChildren;
}

const ProtectedRoute = ({ isAuth, children }: ProtectedRouteProps) => {
  if (!isAuth) {
    return <Redirect to="/login" />;
  }

  return <>{children}</>;
};

const mapStateToProps = (state: any) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps)(ProtectedRoute);
