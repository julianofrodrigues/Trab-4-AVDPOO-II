import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SiginIn from '../pages/SiginIn';
import SiginUp from '../pages/SiginUp';
import Profile from '../pages/Profile';
import Detail from '../pages/Detail'
import New from '../pages/New';
import Type from '../pages/Type';
import NewType from '../pages/NewType';
import EditType from '../pages/EditType';
import ForgotenPassword from '../pages/ForgotenPassword';
import EditExam from '../pages/EditExam';


const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={SiginIn} />
        <Route path="/register" component={SiginUp} />
        <Route path="/profile" component={Profile} />
        <Route path="/detail" component={Detail} />
        <Route path="/new" component={New} />
        <Route path="/edit/exam" component={EditExam} />
        <Route path="/type" component={Type} />
        <Route path="/newtype" component={NewType} />
        <Route path="/edit/type" component={EditType} />
        <Route path="/forgoten" component={ForgotenPassword} />
    </Switch>
)

export default Routes;