import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Profile from '../containers/Profile';

const publicPath = '/';

export const routeCodes = {
  DASHBOARD: publicPath,
  LOGIN: `${ publicPath }login`,
  REGISTER: `${ publicPath }register`,
  PROFILE: `${ publicPath }profile`,
};

export default () => (
  <Switch>
    <Route exact path={ publicPath } component={ Home } />
    <Route path={ routeCodes.LOGIN } component={ Login } />
    <Route path={ routeCodes.REGISTER } component={ Register } />
    <Route path={ routeCodes.PROFILE } component={ Profile } />
    <Route path='*' component={ NotFound } />
  </Switch>
);
