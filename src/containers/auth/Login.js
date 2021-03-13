import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import classes from "./index.module.css";

import GenericButton from "../../components/buttons/GenericButton";
import GenericInput from "../../components/inputs/GenericInput";
import InTextBtn from "../../components/buttons/InTextBtn";
import SocialMediaBtn from "../../components/buttons/SocialMediaBtn";

import * as constants from "../../components/contants";


const Login = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
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

export default Login;