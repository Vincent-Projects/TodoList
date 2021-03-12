import React, { useState } from "react";
import classes from "./index.module.css";

import GenericButton from "../../components/buttons/GenericButton";
import GenericInput from "../../components/inputs/GenericInput";
import InTextBtn from "../../components/buttons/InTextBtn";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = () => {

    }

    return (
        <div className={classes.PageContainer}>
            <form>
                <h1>Welcome Back !</h1>
                {/*  */}
                <GenericInput
                    id="email"
                    value={email}
                    handleChangeText={text => setEmail(text)}
                    label="Email"
                    placeholder="sample@email.com"
                />
                <GenericInput
                    id="password"
                    value={password}
                    label="Password"
                    handleChangeText={text => setPassword(text)}
                    type="password"
                />
                <GenericButton
                    text="Login"
                    handleClick={onLogin}
                />
            </form>
        </div>
    );
};

export default Login;