import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./index.module.css";
import Icon from "components/Icon";

export interface MenuLinkProps {
  iconName: string;
  text: string;
  to: string;
}

const MenuLink = ({ iconName, text, to = "" }: MenuLinkProps) => {
  return (
    <NavLink className={classes.Link} to={to} activeClassName={classes.Active}>
      <Icon iconName={iconName} />
      <p className={classes.Text}>{text}</p>
    </NavLink>
  );
};

export default MenuLink;
