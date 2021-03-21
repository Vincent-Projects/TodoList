import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./index.module.css";
import Icon from "components/Icon";

interface Props {
  iconName: string,
  text: string,
  to: string
}

const MenuLink = ({
  iconName,
  text,
  to
}: Props) => {
  return (
    <NavLink className={classes.Link} to={to} activeClassName={classes.Active}>
      <Icon
        iconName={iconName}
      />
      <p>{text}</p>
    </NavLink>
  );
};

export default MenuLink;
