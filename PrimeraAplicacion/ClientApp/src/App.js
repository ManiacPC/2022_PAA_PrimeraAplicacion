import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import Perfil from './components/Perfil'
import Login from './components/Login'
// import ComponenteEjercio from ...

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/perfil' component={Perfil} />
        <Route path='/login' component={Login} />
        {/* <Route ... /> */}
      </Layout>
    );
  }
}
