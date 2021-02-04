import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Detail from '../views/Detail';
import Home from '../views/Home';

function Router(props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/detail/:identifier'>
                    <Detail/>
                </Route>
            </Switch>
        </BrowserRouter>

    );
}

export default Router;