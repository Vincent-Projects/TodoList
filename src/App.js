import React, { Suspense } from "react";
import {
    Switch,
    Route
} from "react-router-dom";

import LandingPage from "./containers/LandingPage";

const Dashboard = React.lazy(() => import('./containers/Dashboard'));
const Login = React.lazy(() => import('./containers/Login'));

const app = () => {
    return (
        <div>
            <div>
                <p>Menu Here</p>
            </div>
            <Switch>
                <Route exact path="/">
                    <LandingPage />
                </Route>
                <Route path="/dashboard">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Dashboard />
                    </Suspense>
                </Route>
                <Route path="/login">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Login />
                    </Suspense>
                </Route>
                <Route>
                    <h1>404 Error</h1>
                </Route>
            </Switch>
        </div>
    )
};

export default app;