import React from "react";
import styled from "styled-components";
import Page from "./Page";

interface AuthPageProps {
  children: React.ReactChildren;
  className?: string;
}

const AuthPage = ({ children, className }: AuthPageProps) => {
  return <Page className={className}>{children}</Page>;
};

const AuthPageStyled = styled(AuthPage)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 786px) {
    & {
      align-items: flex-end;
    }
  }
`;

export default AuthPageStyled;
