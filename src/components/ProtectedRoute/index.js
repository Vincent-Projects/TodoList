import React from "react";
import {
    Redirect
} from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ProtectedRoute = ({
    isAuth,
    children
}) => {
    console.log("isAuth:" + isAuth);
    if (!isAuth) {
        return <Redirect to="/login" />;
    }

    return (
        <>
            { children}
        </>
    );
};

ProtectedRoute.propTypes = {
    isAuth: PropTypes.bool,
    children: PropTypes.any
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    };
};

export default connect(mapStateToProps)(ProtectedRoute);