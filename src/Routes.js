import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';


const Routes = () => {

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                

                 
            </Switch>
        
        </BrowserRouter>
    );

};


export default Routes;