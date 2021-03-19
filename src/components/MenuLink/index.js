import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import classes from "./index.module.css";

import Icon from "components/Icon";

const MenuLink = ({ iconName, text, to }) => {
  return (
    <NavLink className={classes.Link} to={to} activeClassName={classes.Active}>
      <Icon
        iconName={iconName}
      />
      <p>{text}</p>
    </NavLink>
  );
};

MenuLink.propTypes = {
  iconName: PropTypes.string,
  text: PropTypes.string,
  to: PropTypes.string
};

export default MenuLink;
