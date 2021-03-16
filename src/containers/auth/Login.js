import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import classes from "./index.module.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import GenericButton from "../../components/buttons/GenericButton";
import GenericInput from "../../components/inputs/GenericInput";
import InTextBtn from "../../components/buttons/InTextBtn";
import SocialMediaBtn from "../../components/buttons/SocialMediaBtn";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (event) => {
    event.preventDefault();
    login(email, password);
  };

  const handleSignupClick = () => {
    history.push("/signup");
  };

  return (
    <div className={classes.PageContainer}>
      <form className={classes.Form}>
        <h1 className={classes.Title}>Welcome Back !</h1>

        <div className={classes.Margin}></div>{/* Find a new way of doing this */}

        <GenericInput
          id="email"
          value={email}
          handleChangeText={text => setEmail(text)}
          label="Email"
          placeholder="sample@email.com"
          darkTheme={false}
        />

        <div className={classes.Margin}></div>{/* Find a new way of doing this */}

        <GenericInput
          id="password"
          value={password}
          label="Password"
          handleChangeText={text => setPassword(text)}
          type="password"
          darkTheme={false}
        />

        <div className={classes.Margin}></div>{/* Find a new way of doing this */}

        <div className={classes.BtnGroup}>
          <GenericButton
            text="Login"
            handleClick={onLogin}
          />
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);