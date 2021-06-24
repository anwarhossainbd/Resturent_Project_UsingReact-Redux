import React from 'react';
import Menu from "./Menu";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import {  Route, Switch ,Redirect } from 'react-router-dom';

const Body = () => {

    return (
        <div>

            <Switch>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/menu" component={Menu}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
                <Redirect from="/" to="/home" />
            </Switch>

        </div>
    );
};

export default Body;