import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import classes from "./index.module.css";

import GenericButton from "../../components/buttons/GenericButton";
import GenericInput from "../../components/inputs/GenericInput";
import InTextBtn from "../../components/buttons/InTextBtn";
import SocialMediaBtn from "../../components/buttons/SocialMediaBtn";

import * as constants from "../../components/contants";


const Signup = () => {
    let history = useHistory();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const onLogin = () => {

    };

    const handleLoginClick = () => {
        history.push("/login");
    };

    return (
        <div className={classes.PageContainer}>
            <form className={classes.Form}>
                <h1 className={classes.Title}>Welcome to Flists !</h1>

                <div className={classes.Margin}></div>{/* Find a new way of doing this */}

                <GenericInput
                    id="username"
                    value={username}
                    handleChangeText={text => setUsername(text)}
                    label="Username"
                    placeholder="Vincent"
                    darkTheme={false}
                />

                <div className={classes.Margin}></div>{/* Find a new way of doing this */}

                <GenericInput
                    id="email"
                    value={email}
                    handleChangeText={text => setEmail(text)}
                    label="Email"
                    placeholder="sample@email.com"
                    darkTheme={false}
                />

                <div className={classes.Margin}></div>{/* Find a new way of doing this */}

                <GenericInput
                    id="password"
                    value={password}
                    label="Password"
                    handleChangeText={text => setPassword(text)}
                    type="password"
                    darkTheme={false}
                />

                <div className={classes.Margin}></div>{/* Find a new way of doing this */}

                <GenericInput
                    id="confirm"
                    value={password}
                    label="Confirm Password"
                    handleChangeText={text => setConfirmPassword(text)}
                    type="password"
                    darkTheme={false}
                />

                <div className={classes.Margin}></div>{/* Find a new way of doing this */}

                <div className={classes.BtnGroup}>
                    <GenericButton
                        text="Login"
                        handleClick={onLogin}
                    />
                    <p className={classes.InfosText}>
                        {"Already have an account ? "}
                        <InTextBtn
                            text="Login here"
                            handleClick={handleLoginClick}
                            darkTheme={false}

                        />
                    </p>
                </div>

                <div className={classes.Margin}></div>{/* Find a new way of doing this */}

                <div className={classes.SocialMediaBar}>
                    <div className={classes.SocialMediaBtn}>
                        <SocialMediaBtn
                            name={constants.TWITTER}
                        />
                    </div>
                    <div className={classes.SocialMediaBtn}>
                        <SocialMediaBtn
                            name={constants.GITHUB}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Signup;