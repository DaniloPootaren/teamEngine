import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import CreateEmployee from "../pages/createEmployee";
import ViewEmployees from "../pages/viewEmployees";



const Routes = () => {
    return (
        <Switch>
            <Route path="/create" component={CreateEmployee} />
            <Route path="/view" component={ViewEmployees} />
            <Route path="/" component={Dashboard} />
        </Switch>
    );
};

export default Routes;
