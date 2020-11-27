import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from '../pages/Index';
import Detail from '../pages/Detail'
import New from '../pages/New';
import Edit from '../pages/Edit';


const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/new" component={New} />
        <Route path="/detail" component={Detail} />
        <Route path="/edit" component={Edit} />
    </Switch>
)

export default Routes;