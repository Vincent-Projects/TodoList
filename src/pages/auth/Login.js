import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

import GenericButton from "components/buttons/GenericButton";
import GenericInput from "components/inputs/GenericInput";
import InTextBtn from "components/buttons/InTextBtn";
import SocialMediaBtn from "components/buttons/SocialMediaBtn";

import DiamondSpinner from "components/loaders/DiamondSpinner";

import * as constants from "components/contants";
import * as actions from "redux/actions";
import { authErrReset } from "redux/actions";

export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 768px) {
    & {
      align-items: flex-end;
    }
  }
`;

export const Form = styled.form`
  width: 95%;
  border-radius: 3px;
  background-color: rgb(${props => props.theme.bg2dp});
  box-shadow: 1px 1px 3px rgb(${props => props.theme.shadow});
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 98%;
  color: rgb(${props => props.theme.onBg});

  @media only screen and (min-width: 768px) {
    & {
      width: 65%;
    }
  }

  @media only screen and (min-width: 1024px) {
    & {
      margin-right: 5rem;
      width: 38%;
      min-height: 80%;
      height: fit-content;
    }
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-family: "port-lligat-slab";

  @media only screen and (min-width: 768px) {
    & {
      font-size: 3.2rem;
    }
  }
  
  @media only screen and (min-width: 1024px) {
    & {
      font-size: 3.6rem;
    }
  }
`;

export const Margin = styled.div`
  margin: 1.1rem;

  @media only screen and (min-width: 768px) {
    margin: 0.8rem;
  }
`;

export const ErrorMessage = styled.p`
  color: rgb(var(--error));
`;

export const SocialMediaBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: space-around;
`;


export const InfoText = styled.p`
  font-size: 0.85rem;
  margin-top: 0.6rem;
`;

export const BtnGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Login = ({ isAuth, login, isLoading, authErrMessage, authErrReset }) => {
  if (isAuth) {
    return <Redirect to="/dashboard" />;
  }

  let history = useHistory();

  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [emailErrMessage, setEmailErrMessage] = useState("");

  const [password, setPassword] = useState("");
  const [passErr, setPassErr] = useState(false);
  const [passErrMessage, setPassErrMessage] = useState("");

  const handleEmailInput = (text) => {
    setEmail(text);

    if (emailErr) {
      setEmailErr(false);
      setEmailErrMessage("");
    }
  };

  const handlePasswordInput = (text) => {
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
      login(email, password);
    }
  };

  const handleSignupClick = () => {
    authErrReset();
    history.push("/signup");
  };

  const handleForgotPasswordClick = () => {};

  return (
    <PageContainer>
      <Form>
        <Title>Welcome Back !</Title>

        {authErrMessage ? (
          <ErrorMessage>{authErrMessage}</ErrorMessage>
        ) : null}

        <Margin />
        {/* Find a new way of doing this */}

        <GenericInput
          id="email"
          value={email}
          handleChangeText={handleEmailInput}
          label="Email"
          placeholder="sample@email.com"
          isError={emailErr}
          errMessage={emailErrMessage}
        />

        <Margin/>
        {/* Find a new way of doing this */}

        <GenericInput
          id="password"
          value={password}
          label="Password"
          handleChangeText={handlePasswordInput}
          type="password"
          isError={passErr}
          errMessage={passErrMessage}
        />

        <InfoText>
          <InTextBtn
            text="forgot passord ?"
            handleClick={handleForgotPasswordClick}
          />
        </InfoText>

        <Margin/>
        {/* Find a new way of doing this */}

        <BtnGroup>
          {isLoading ? (
            <DiamondSpinner mode="circle" />
          ) : (
            <GenericButton text="Login" handleClick={onLogin} />
          )}

          <InfoText>
            {"Doesn't have an account yet ? "}
            <InTextBtn
              text="Sign up here"
              handleClick={handleSignupClick}
            />
          </InfoText>
        </BtnGroup>

        <Margin/>
        {/* Find a new way of doing this */}

        <SocialMediaBar>
            <SocialMediaBtn name={constants.TWITTER} />
            <SocialMediaBtn name={constants.GITHUB} />
        </SocialMediaBar>
      </Form>
    </PageContainer>
  );
};

Login.propTypes = {
  login: PropTypes.func,
  isAuth: PropTypes.bool,
  isLoading: PropTypes.bool,
  authErrMessage: PropTypes.string,
  authErrReset: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    isLoading: state.auth.isLoading,
    authErrMessage: state.auth.authErrMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(actions.login(email, password)),
    authErrReset: () => dispatch(authErrReset()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
