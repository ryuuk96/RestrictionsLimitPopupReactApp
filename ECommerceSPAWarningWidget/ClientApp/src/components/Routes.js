import React from 'react'
import { Switch, Route } from 'react-router';
import WarningList from '../pages/WarningList';
import WarningDetail from '../pages/WarningDetail';
import WarningTemplates from '../pages/WarningTemplates';
import Settings from '../pages/Settings';
import Help from '../pages/Help';
import AboutUs from '../pages/AboutUs';

function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <WarningList />
            </Route>
            <Route path="/warning-list">
                <WarningList />
            </Route>
            <Route path="/warning-detail/:id">
                <WarningDetail />
            </Route>
            <Route path="/warning-templates">
                <WarningTemplates />
            </Route>
            <Route path="/settings">
                <Settings />
            </Route>
            <Route path="/about-us">
                <AboutUs />
            </Route>
            <Route path="/help">
                <Help />
            </Route>
        </Switch>
    )
}

export default Routes;
