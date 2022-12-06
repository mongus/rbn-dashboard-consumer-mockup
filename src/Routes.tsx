import React, {lazy, useEffect, useState} from 'react';
import {Switch, Route} from 'react-router-dom';

import {Redirect} from "react-router";

const Dashboard = lazy(() => import('./pages/Dashboard'));

const LTO_END_TIMESTAMP = new Date('2022-01-01').getTime();

const Routes = () => {
    const [tpgLtoActive, setTpgLtoActive] = useState(Date.now() < LTO_END_TIMESTAMP);

    useEffect(() => {
        if (tpgLtoActive) {
            const timeout = window.setTimeout(() => setTpgLtoActive(false), LTO_END_TIMESTAMP - Date.now());
            return () => window.clearTimeout(timeout);
        }
    }, [tpgLtoActive, setTpgLtoActive]);

    return (
        <Switch>
            <Route path="/dashboard" component={Dashboard}/>

            <Redirect to="/dashboard"/>
        </Switch>
    );
};

export default Routes;
