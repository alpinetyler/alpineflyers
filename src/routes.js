import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Body from './components/Body';
import Topics from './components/Topics';
import Contact from './components/Contact';
import About  from './components/About';
import Login from './components/Login';

export default (
    <Switch>
        <Route exact path="/" component={Body} />
        <Route path="/Topics" component={Topics} />
        <Route path="/Contact" component={Contact} />
        <Route path="/About" component={About} />
        <Route path="/Login" component={Login} />
    </Switch>
)