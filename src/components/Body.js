import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Experience from './Experience';

import '../App.css'

const Body = () => (

        <div className="Body"> 

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/experience" component={Experience} />
            </Switch>

        </div>

)

export default Body;
