import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/home" component={Home} />
    </Switch>
);

export default Routes;
