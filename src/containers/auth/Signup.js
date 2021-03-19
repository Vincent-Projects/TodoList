import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import classes from "./index.module.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import DiamondSpinner from "components/DiamondSpinner";

import GenericButton from "components/buttons/GenericButton";
import GenericInput from "components/inputs/GenericInput";
import InTextBtn from "components/buttons/InTextBtn";
import SocialMediaBtn from "components/buttons/SocialMediaBtn";

import * as constants from "components/contants";

import { signup, authErrReset } from 'redux/actions';

const Signup = ({
    isAuth,
    signup,
    isLoading,
    authErrMessage,
    authErrReset
}) => {
    if (isAuth)
        return <Redirect to="/dashboard" />;

    let history = useHistory();

    const [username, setUsername] = useState("");
    const [usernameErr, setUsernameErr] = useState(false);
    const [usernameErrMessage, setUsernameErrMessage] = useState("");

    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState(false);
    const [emailErrMessage, setEmailErrMessage] = useState("");

    const [password, setPassword] = useState("");
    const [passwordErr, setPasswordErr] = useState(false);
    const [passwordErrMessage, setPasswordErrMessage] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordErr, setConfirmPasswordErr] = useState(false);
    const [confirmPasswordErrMessage, setConfirmPasswordErrMessage] = useState("");

    const [code, setCode] = useState("");
    const [codeErr, setCodeErr] = useState(false);
    const [codeErrMessage, setCodeErrMessage] = useState("");


    const onSignup = (event) => {
        event.preventDefault();
        let validFields = true;

        if (!username || username.length < 3) {
            setUsernameErr(true);
            setUsernameErrMessage("Username should be 4 character length minimum");
            validFields = false;
        }

        if (!email) {
            setEmailErr(true);
            setEmailErrMessage("Email required");
            validFields = false;
        }

        if (!password ||
            password.length < 8 ||
            !password.match(/[a-zA-Z0-9]/) ||
            !password.match(/[@$&%#§!?]/)
        ) {
            setPasswordErr(true);
            setPasswordErrMessage("Password should contains, 8 characters, 1 lowercase, 1 uppercase, 1 number, 1 special character");
            validFields = false;
        }

        if (confirmPassword !== password) {
            setConfirmPasswordErr(true);
            setConfirmPasswordErrMessage("Confirm Password and password should be the same");
            validFields = false;
        }


        if (!code || code.length !== 8) {
            setCodeErr(true);
            setCodeErrMessage("Valid code is required");
            validFields = false;
        }


        if (validFields) {
            signup(username, email, password, confirmPassword, code);
        }
    };

    const handleLoginClick = () => {
        authErrReset();
        history.push("/login");
    };

    const handleInput = (text, setState, errState, setErrState) => {
        if (errState)
            setErrState(false);

        setState(text);
    };

    return (
        <div className={classes.PageContainer}>
            <form className={classes.Form}>
                <h1 className={classes.Title}>Welcome to Flists !</h1>

                {authErrMessage ? <p className={classes.Error}>{authErrMessage} </p> : null}

                <div className={classes.Margin}></div>{/* Find a new way of doing this */}

                <GenericInput
                    id="username"
                    value={username}
                    handleChangeText={text => handleInput(text, setUsername, usernameErr, setUsernameErr)}
                    label="Username"
                    placeholder="Vincent"
                    darkTheme={false}
                    isError={usernameErr}
                    errMessage={usernameErrMessage}
                />

                <div className={classes.Margin}></div>{/* Find a new way of doing this */}

                <GenericInput
                    id="email"
                    value={email}
                    handleChangeText={text => handleInput(text, setEmail, emailErr, setEmailErr)}
                    label="Email"
                    placeholder="sample@email.com"
                    darkTheme={false}
                    isError={emailErr}
                    errMessage={emailErrMessage}
                />

                <div className={classes.Margin}></div>{/* Find a new way of doing this */}

                <GenericInput
                    id="password"
                    value={password}
                    label="Password"
                    handleChangeText={text => handleInput(text, setPassword, passwordErr, setPasswordErr)}
                    type="password"
                    darkTheme={false}
                    isError={passwordErr}
                    errMessage={passwordErrMessage}
                />

                <div className={classes.Margin}></div>{/* Find a new way of doing this */}

                <GenericInput
                    id="confirm"
                    value={confirmPassword}
                    label="Confirm Password"
                    handleChangeText={text => handleInput(text, setConfirmPassword, confirmPasswordErr, setConfirmPasswordErr)}
                    type="password"
                    darkTheme={false}
                    isError={confirmPasswordErr}
                    errMessage={confirmPasswordErrMessage}
                />

                <div className={classes.Margin}></div>{/* Find a new way of doing this */}

                <GenericInput
                    id="code"
                    value={code}
                    handleChangeText={text => handleInput(text, setCode, codeErr, setCodeErr)}
                    label="Signup Code"
                    type="password"
                    darkTheme={false}
                    isError={codeErr}
                    errMessage={codeErrMessage}
                />

                <div className={classes.Margin}></div>{/* Find a new way of doing this */}

                <div className={classes.BtnGroup}>
                    {isLoading ?
                        <DiamondSpinner mode="circle" />
                        :
                        <GenericButton
                            text="Signup"
                            handleClick={onSignup}
                        />
                    }
                    <p className={classes.InfosText}>
                        {"Already have an account ? "}
                        <InTextBtn
                            text="Login here"
                            handleClick={handleLoginClick}
                            darkTheme={false}

                        />
                    </p>
                </div>

                <div className={classes.Margin}></div>{/* Find a new way of doing this */}

                <div className={classes.SocialMediaBar}>
                    <div className={classes.SocialMediaBtn}>
                        <SocialMediaBtn
                            name={constants.TWITTER}
                        />
                    </div>
                    <div className={classes.SocialMediaBtn}>
                        <SocialMediaBtn
                            name={constants.GITHUB}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

Signup.propTypes = {
    isAuth: PropTypes.bool,
    signup: PropTypes.func,
    authErrReset: PropTypes.func,
    isLoading: PropTypes.bool,
    authErrMessage: PropTypes.string
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        isLoading: state.auth.isLoading,
        authErrMessage: state.auth.authErrMessage
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signup: (username, email, password, confirmPassword, code) => dispatch(signup(username, email, password, confirmPassword, code)),
        authErrReset: () => dispatch(authErrReset())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);