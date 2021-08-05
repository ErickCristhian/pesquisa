import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import AtaCreate from './pages/Atas/Create';
import AtaUpdate from './pages/Atas/Update';
import AtaView from './pages/Atas/View';

export default function Routes(){
    return (
        <Router>
            <Switch>
                <Route path="/login" exact component={Login}/>
                <Route path="/ata" exact component={AtaCreate}/>
                <Route path="/ata/editar/:id" exact component={AtaUpdate}/>
                <Route path="/ata/view/:id" exact component={AtaView}/>
                <Route path="/:page?" exact component={Home}/>
                <Route path="/" exact component={Home}/>
            </Switch>
        </Router>
    );
}
