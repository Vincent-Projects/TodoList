import InTextBtn from "components/buttons/InTextBtn";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const PageNotFoundContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

const Text = styled.p`
  padding-left: 5rem;
  padding-right: 5rem;
  font-size: 1.15rem;
`;

interface PageNotFoundProps {
  isAuth: boolean;
}

const PageNotFound = ({ isAuth }: PageNotFoundProps) => {
  const history = useHistory();

  const handleRouteRedirect = (route: string) => {
    history.replace(route);
  };
  return (
    <PageNotFoundContainer>
      <Title>Page Not Found</Title>
      <Text>
        Sorry, it seems that the page you requested for is not avaible or does
        not exists. Click this link to head back to the app :
        {isAuth ? (
          <InTextBtn
            text=" Go back to the app"
            handleClick={() => handleRouteRedirect("/dashboard")}
          />
        ) : (
          <InTextBtn
            text=" Go back to main page"
            handleClick={() => handleRouteRedirect("/")}
          />
        )}
      </Text>
    </PageNotFoundContainer>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps)(PageNotFound);
