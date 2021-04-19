import DiamondSpinner from "components/loaders/DiamondSpinner";
import GenericButton from "components/buttons/GenericButton";
import GenericNotification from "components/notification/GenericNotification";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { validateAccount } from "redux/actions";

const Container = styled.div`
  background-color: rgb(var(--surface));
  color: rgb(var(--on-surface));
  margin: auto;
  padding: 2rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 0px rgb(var(--shadow));
`;

const Title = styled.h1`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  width: 85%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

interface TokenParam {
  token: string;
}

interface ValidationAccountProps {
  isLoading: boolean;
  validateAccount: (token: string) => void;
  authSuccessMessage: string;
  authErrMessage: string;
}

const ValidationAccount = ({
  isLoading,
  validateAccount,
  authSuccessMessage,
  authErrMessage,
}: ValidationAccountProps) => {
  const { token }: TokenParam = useParams();

  const handleClick = () => {
    validateAccount(token);
  };

  return (
    <Container>
      {authSuccessMessage ? (
        <GenericNotification text={authSuccessMessage} />
      ) : authErrMessage ? (
        <GenericNotification text={authErrMessage} error={true} />
      ) : null}
      <Title>Welcome to Flists</Title>
      <Text>
        To activate your account and enjoy this app, you need first to push that
        button and open the doors to your app. ;)
      </Text>
      {isLoading ? (
        <DiamondSpinner mode="circle" />
      ) : (
        <GenericButton text="Activate My Account" handleClick={handleClick} />
      )}
    </Container>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isLoading: state.auth.isLoading,
    authSuccessMessage: state.auth.authSuccessMessage,
    authErrMessage: state.auth.authErrMessage,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    validateAccount: (token: string) => dispatch(validateAccount(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ValidationAccount);
