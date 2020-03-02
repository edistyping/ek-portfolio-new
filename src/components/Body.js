import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

import '../App.css'

const Body = () => {

    return (
        <div className="Body"> 

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/experience" component={Experience} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
            </Switch>

        </div>
    )
}
export default Body;
