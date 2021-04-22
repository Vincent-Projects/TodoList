import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
import { passwordRequirements } from "utils/constants";

import DiamondSpinner from "components/loaders/DiamondSpinner";

import GenericButton from "components/buttons/GenericButton";
import GenericInput from "components/inputs/GenericInput";
import InTextBtn from "components/buttons/InTextBtn";
import SocialMediaBtn from "components/buttons/SocialMediaBtn";
import GenericNotification from "components/notification/GenericNotification";

import * as constants from "components/contants";

import { signup, authErrReset } from "redux/actions";

import {
  Form,
  Title,
  FormContent,
  ErrorMessage,
  InfoText,
  BtnGroup,
  SocialMediaBar,
} from "./Login";

const mapStateToProps = (state: any) => {
  return {
    isAuth: state.auth.isAuth,
    isLoading: state.auth.isLoading,
    authErrMessage: state.auth.authErrMessage,
    authSuccessMessage: state.auth.authSuccessMessage,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    signup: (firstname: string, lastname: string, email: string, password: string, confirmPassword: string, code: string) =>
      dispatch(
        signup(firstname, lastname, email, password, confirmPassword, code)
      ),
    authErrReset: () => dispatch(authErrReset()),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromStore = ConnectedProps<typeof connector>;

type SignupProps = PropsFromStore & {
};

const Signup = ({
  isAuth,
  signup,
  isLoading,
  authErrMessage,
  authErrReset,
  authSuccessMessage,
}: SignupProps) => {
  const history = useHistory();

  const [firstname, setFirstname] = useState("");
  const [firstnameErr, setFirstnameErr] = useState(false);
  const [firstnameErrMessage, setFirstnameErrMessage] = useState("");

  const [lastname, setLastname] = useState("");
  const [lastnameErr, setLastnameErr] = useState(false);
  const [lastnameErrMessage, setLastnameErrMessage] = useState("");

  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState(false);
  const [emailErrMessage, setEmailErrMessage] = useState("");

  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);
  const [passwordErrMessage, setPasswordErrMessage] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordErr, setConfirmPasswordErr] = useState(false);
  const [confirmPasswordErrMessage, setConfirmPasswordErrMessage] = useState(
    ""
  );

  const [code, setCode] = useState("");
  const [codeErr, setCodeErr] = useState(false);
  const [codeErrMessage, setCodeErrMessage] = useState("");

  if (isAuth) return <Redirect to="/dashboard" />;

  const onSignup = (event: any) => {
    event.preventDefault();
    let validFields = true;

    if (!firstname) {
      setFirstnameErr(true);
      setFirstnameErrMessage("Username should be 4 character length minimum");
      validFields = false;
    }

    if (!lastname) {
      setLastnameErr(true);
      setLastnameErrMessage("Lastname is required");
      validFields = false;
    }

    if (!email) {
      setEmailErr(true);
      setEmailErrMessage("Email required");
      validFields = false;
    }

    if (
      !password ||
      password.length < 8 ||
      !password.match(/[a-zA-Z0-9]/) ||
      !password.match(/[@$&%#§!?]/)
    ) {
      setPasswordErr(true);
      setPasswordErrMessage(
        "Password should contains, 8 characters, 1 lowercase, 1 uppercase, 1 number, 1 special character"
      );
      validFields = false;
    }

    if (confirmPassword !== password) {
      setConfirmPasswordErr(true);
      setConfirmPasswordErrMessage(
        "Confirm Password and password should be the same"
      );
      validFields = false;
    }

    if (!code || code.length !== 8) {
      setCodeErr(true);
      setCodeErrMessage("Valid code is required");
      validFields = false;
    }

    if (validFields) {
      signup(firstname, lastname, email, password, confirmPassword, code);
    }
  };

  const handleLoginClick = () => {
    authErrReset();
    history.push("/login");
  };

  const handleInput = (text: string, setState: (text: string) => void, errState: boolean, setErrState: (b: boolean) => void) => {
    if (errState) setErrState(false);

    setState(text);
  };

  let SuccessMessage;

  if (authSuccessMessage) {
    SuccessMessage = <GenericNotification text={authSuccessMessage} />;
  }

  return (
    <>
      {SuccessMessage ?? null}{" "}
      {/* Replace with notification component + absolute position top of screen and 90% || 80% || 65% width screen */}
      <Form>
        <Title>Welcome to Flists !</Title>

        {authErrMessage ? <ErrorMessage>{authErrMessage} </ErrorMessage> : null}

        <FormContent>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: "95%",
              marginBottom: "1rem",
            }}
          >
            <GenericInput
              id="firstname"
              value={firstname}
              handleChangeText={(text) =>
                handleInput(text, setFirstname, firstnameErr, setFirstnameErr)
              }
              label="Firstname"
              placeholder="Vincent"
              isError={firstnameErr}
              errMessage={firstnameErrMessage}
            />
            <div style={{ margin: "0.5rem" }}></div>
            <GenericInput
              id="lastname"
              value={lastname}
              handleChangeText={(text) =>
                handleInput(text, setLastname, lastnameErr, setLastnameErr)
              }
              label="Lastname"
              placeholder="Dupont"
              isError={lastnameErr}
              errMessage={lastnameErrMessage}
            />
          </div>

          <GenericInput
            id="email"
            value={email}
            handleChangeText={(text) =>
              handleInput(text, setEmail, emailErr, setEmailErr)
            }
            label="Email"
            placeholder="sample@email.com"
            isError={emailErr}
            errMessage={emailErrMessage}
          />


          <GenericInput
            id="password"
            value={password}
            label="Password"
            handleChangeText={(text) =>
              handleInput(text, setPassword, passwordErr, setPasswordErr)
            }
            type="password"
            isError={passwordErr}
            errMessage={passwordErrMessage}
            requirements={passwordRequirements}
          />

          <GenericInput
            id="confirm"
            value={confirmPassword}
            label="Confirm Password"
            handleChangeText={(text) =>
              handleInput(
                text,
                setConfirmPassword,
                confirmPasswordErr,
                setConfirmPasswordErr
              )
            }
            type="password"
            isError={confirmPasswordErr}
            errMessage={confirmPasswordErrMessage}
          />


          <GenericInput
            id="code"
            value={code}
            handleChangeText={(text) =>
              handleInput(text, setCode, codeErr, setCodeErr)
            }
            label="Alpha Code"
            type="password"
            isError={codeErr}
            errMessage={codeErrMessage}
            requirements={"Code provided by email sent by @Vincent"}
          />

          <BtnGroup>
            {isLoading ? (
              <DiamondSpinner mode="circle" />
            ) : (
              <GenericButton text="Signup" handleClick={onSignup} />
            )}
            <InfoText>
              {"Already have an account ? "}
              <InTextBtn
                text="Login here"
                handleClick={handleLoginClick}
              />
            </InfoText>
          </BtnGroup>


          <SocialMediaBar>
            <SocialMediaBtn name={constants.TWITTER} />
            <SocialMediaBtn name={constants.GITHUB} />
          </SocialMediaBar>
        </FormContent>
      </Form>
    </>
  );
};

export default connector(Signup);
