import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/users/UserList';
import LoginPage from './components/LoginPage/LoginPage';
import { Route, Redirect } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Route path='/' exact component={LoginPage} />
        <PrivateRoute path='/users' authed={!!sessionStorage.jwt} component={UserList} />
      </div>
    );
  }
}

export default App;
