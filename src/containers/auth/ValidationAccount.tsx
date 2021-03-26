import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { validateAccount } from "redux/actions";

import GenericButton from "components/buttons/GenericButton";
import DiamondSpinner from "components/DiamondSpinner";
import GenericNotification from "components/notification/GenericNotification";

interface TokenParam  {
  token: string;
}

interface ValidationAccountProps {
  isLoading: boolean;
  validateAccount: (token: string) => Function;
  authSuccessMessage: string;
  authErrMessage: string;
}

const ValidationAccount = ({
  isLoading,
  validateAccount,
  authSuccessMessage,
  authErrMessage
}: ValidationAccountProps) => {
  const { token }: TokenParam = useParams();

  const handleClick = () => {
    validateAccount(token);
  }



  return (
    <div>
      { authSuccessMessage
        ? <GenericNotification text={authSuccessMessage} />
        : authErrMessage
          ? <GenericNotification text={authErrMessage} error={true} />
          : null
      }
      <h1>Welcome to Flists</h1>
      <p>To activate your account and enjoy this app, you need first to push that button and open the doors to your app. ;)</p>
      { isLoading
        ? <DiamondSpinner mode="circle" />
        : (
          <GenericButton
            text="Activate My Account"
            handleClick={handleClick}
          />
        )
      }
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isLoading: state.auth.isLoading,
    authSuccessMessage: state.auth.authSuccessMessage,
    authErrMessage: state.auth.authErrMessage
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    validateAccount: (token: string) => dispatch(validateAccount(token)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ValidationAccount);