import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import classes from "./index.module.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import GenericButton from "../../components/buttons/GenericButton";
import GenericInput from "../../components/inputs/GenericInput";
import InTextBtn from "../../components/buttons/InTextBtn";
import SocialMediaBtn from "../../components/buttons/SocialMediaBtn";

import DiamondSpinner from "../../components/DiamondSpinner";

import * as constants from "../../components/contants";
import * as actions from "../../redux/actions";


const Login = ({
  isAuth,
  login
}) => {
  if (isAuth) {
    return <Redirect to="/dashboard" />;
  }

  let history = useHistory();

  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [emailErrMessage, setEmailErrMessage] = useState("");

  const [password, setPassword] = useState("");
  const [passErr, setPassErr] = useState(false);
  const [passErrMessage, setPassErrMessage] = useState("");

  const handleEmailInput = text => {
    setEmail(text);

    if (emailErr) {
      setEmailErr(false);
      setEmailErrMessage("");
    }
  };

  const handlePasswordInput = text => {
    setPassword(text);

    if (passErr) {
      setPassErr(false);
      setPassErrMessage("");
    }
  };

  const onLogin = (event) => {
    event.preventDefault();
    if (!email) {
      setEmailErr(true);
      setEmailErrMessage("Please enter your email");
    }

    if (!password) {
      setPassErr(true);
      setPassErrMessage("Please enter a password");
    } else {
      setIsLoading(true);
      login(email, password);
    }

  };

  const handleSignupClick = () => {
    history.push("/signup");
  };

  const handleForgotPasswordClick = () => {

  };

  return (
    <div className={classes.PageContainer}>
      <form className={classes.Form}>
        <h1 className={classes.Title}>Welcome Back !</h1>

        <div className={classes.Margin}></div>{/* Find a new way of doing this */}

        <GenericInput
          id="email"
          value={email}
          handleChangeText={handleEmailInput}
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
          handleChangeText={handlePasswordInput}
          type="password"
          darkTheme={false}
          isError={passErr}
          errMessage={passErrMessage}
        />

        <p className={classes.InfosText}>
          <InTextBtn
            text="forgot passord ?"
            handleClick={handleForgotPasswordClick}
            darkTheme={false}
          />
        </p>

        <div className={classes.Margin}></div>{/* Find a new way of doing this */}

        <div className={classes.BtnGroup}>
          {isLoading
            ?
            <DiamondSpinner mode="circle" />
            :
            <GenericButton
              text="Login"
              handleClick={onLogin}
            />
          }

          <p className={classes.InfosText}>
            {"Doesn't have an account yet ? "}
            <InTextBtn
              text="Sign up here"
              handleClick={handleSignupClick}
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

Login.propTypes = {
  login: PropTypes.func,
  isAuth: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(actions.login(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);