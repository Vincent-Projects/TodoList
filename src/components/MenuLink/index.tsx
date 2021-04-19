import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Icon from "components/Icon";

export interface MenuLinkProps {
  iconName: string;
  text: string;
  to: string;
}

const Link = styled(NavLink).attrs((props) => ({
  activeClassName: props.activeClassName,
}))`
  color: rgb(${(props) => props.theme.onBg});
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 100%;
  position: relative;
  padding: 1rem;
  text-decoration: none;

  &:after {
    content: "";
    position: absolute;
    width: 0%;
    height: 100%;
    opacity: 0;
    background-color: rgb(${(props) => props.theme.primary});
    transition: 450ms;
    right: 0;
    top: 0;
  }

  &.${(props) => props.activeClassName} {
    border-left: 2px solid rgb(var(--primary));
    color: rgb(var(--primary));
  }

  &.${(props) => props.activeClassName}:after {
    opacity: 0.1;
    width: 100%;
    background: linear-gradient(90deg, rgb(var(--primary)), transparent);
  }

  &:hover:after {
    width: 100%;
    opacity: 0.1;
  }

  @media only screen and (min-width: 786px) {
    & {
      padding-left: 0.9rem;
    }
  }

  @media only screen and (min-width: 1200px) {
    & {
      padding-left: 2rem;
    }
  }
`;

const Text = styled.p`
  padding-left: 2rem;
`;

const MenuLink = ({ iconName, text, to }: MenuLinkProps) => {
  return (
    <Link to={to} activeClassName="active">
      <Icon iconName={iconName} />
      <Text>{text}</Text>
    </Link>
  );
};

export default MenuLink;
