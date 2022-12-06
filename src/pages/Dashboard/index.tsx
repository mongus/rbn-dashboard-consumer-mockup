import React from 'react';
import {Route, RouteComponentProps} from "react-router";

import ConsumerDashboard from './Consumer';

const DashboardSelector = (props:RouteComponentProps) => {
    return (
        <ConsumerDashboard {...props}/>
    );
};

const DashboardRoutes = ({match}:RouteComponentProps) => (
    <>
        <Route path={match.path} component={DashboardSelector}/>
    </>
);

export default DashboardRoutes;