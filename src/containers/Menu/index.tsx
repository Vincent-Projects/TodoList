import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "redux/actions/authActions";
import styled from "styled-components";
import MenuLink, { MenuLinkProps } from "components/MenuLink";
import ROUTES from "./constants";
import InTextBtn from "components/buttons/InTextBtn";
import DiamondSpinner from "components/DiamondSpinner";
import versions from "versions";

const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media only screen and (min-width: 786px) {
    & {
      width: 20%;
      height: 100vh;
    }
  }

  @media only screen and (min-width: 1200px) {
    & {
      width: 15%;
    }
  }
`;

const Title = styled.div`
  font-size: 2rem;

  @media only screen and (min-width: 786px) {
    & {
      font-size: 2.8rem;
    }
  }

  @media only screen and (min-width: 1200px) {
    & {
      font-size: 3.4rem;
    }
  }
`;

const MenuLinkContainer = styled.div`
  width: 100%;
`;

const Versionning = styled.div`
  font-size: 0.65rem;
  margin: auto;
  margin-top: 0.5rem;
  color: gray;
`;

const LogoutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;


interface MenuLinkListProps extends MenuLinkProps {
  key: string;
}

interface MenuProps {
  isLoading: boolean,
  logout: () => Function
}

const Menu = ({ isLoading, logout }: MenuProps) => {
  const history = useHistory();

  let links: MenuLinkListProps[] = [];
  for (let [key, object] of Object.entries(ROUTES)) {
    links.push({
      ...object,
      key: key
    });
  }

  const handleLogout = () => {
    logout();
    history.replace("/login");
  }

  const handleRouteClick = (route: string) => {
    history.push(route);
  }

  return (
    <MenuContainer>
      <div>
        <Title>Flists</Title>
      </div>
      <MenuLinkContainer>
        {links.map(link => (
          <MenuLink
            key={link.key}
            to={link.to}
            text={link.text}
            iconName={link.iconName}
          />
        ))}
      </MenuLinkContainer>
      <LogoutContainer>
        {!isLoading
          ? (          
            <InTextBtn
            text="logout"
            handleClick={handleLogout}
            warning={true}
            />
          )
          : <DiamondSpinner mode="cubic"/>
        }
        <Versionning>
          <InTextBtn
            text={versions}
            handleClick={() => handleRouteClick("/versions")}
          />
        </Versionning>
      </LogoutContainer>
    </MenuContainer>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isLoading: state.auth.isLoading
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);