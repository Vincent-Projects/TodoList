import React from "react";
import { useHistory } from "react-router-dom";
import GenericButton from "components/buttons/GenericButton";
import Button from "hoc/Button";
import classes from "./index.module.css";
//import logo from "assets/icons/appicon.png";

const LandingPage = () => {
  const history = useHistory();

  const handleRouteClick = (route: string) => {
    history.push(route);
  };

  return (
    <div className={classes.Container}>
      <div className={classes.MenuContainer}>
        <div className={classes.AppIconBtn}>
          <Button handleClick={() => handleRouteClick("/")}>
            <div className={classes.Btn}>
              <p className={classes.LogoImage}>Flists</p>
            </div>
          </Button>
        </div>
        <div className={classes.BtnContainer}>
          <div className={classes.Btn}>
            <GenericButton
              text="Login"
              handleClick={() => handleRouteClick("/login")}
            />
          </div>
          <div className={classes.Btn}>
            <GenericButton
              text="Signup"
              handleClick={() => handleRouteClick("/signup")}
            />
          </div>
        </div>
      </div>

      <div className={classes.BigTitleContainer}>
        <h1 className={classes.BigTitle}>Flists</h1>
        <h2 className={classes.BigSubTitle}>
          Take control of your <span>life.</span>
        </h2>
      </div>
    </div>
  );
};

export default LandingPage;
