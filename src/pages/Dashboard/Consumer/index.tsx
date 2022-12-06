import React from 'react';
import {Route, RouteComponentProps} from 'react-router-dom';

import Dashboard from './Dashboard';

import AmExConnect from "./Boxes/AmEx/AmExConnect";
import Buying from './Boxes/Buying/BuyingForm';
import Selling from './Boxes/Selling/SellingForm';
import Calendly from "./Boxes/Consult/Calendly";

const ConsumerRoutes = ({match}:RouteComponentProps) => (
    <>
        <Route exact path={match.path} component={Dashboard}/>
        <Route exact path={`${match.path}/welcome`} component={Dashboard}/>
        <Route path={`${match.path}/amex-connect`} component={AmExConnect}/>
        <Route path={`${match.path}/buying`} component={Buying}/>
        <Route path={`${match.path}/selling`} component={Selling}/>
        <Route path={`${match.path}/schedule`} component={Calendly}/>
    </>
);

export default ConsumerRoutes;