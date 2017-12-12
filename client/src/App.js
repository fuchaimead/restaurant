import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';
import Menu from './components/Menu';
import MenuForm from './components/MenuForm';


import { Segment } from 'semantic-ui-react';


const App = () =>(
  <Segment basic>
    <Navbar />
    <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/about' component={About} />
    <Route exact path='/menu_items' component={Menu} />
    <Route exact path='/menu_items/:id/edit' component={MenuForm} />
    <Route component={NoMatch} />
    </Switch>
  </Segment>
);

export default App;

