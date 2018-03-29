import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './containers/Login/Login'
import logo from './logo.svg';
import './App.css';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import Test from './test';
import StudentRegister from './containers/StudentRegister/StudentRegister';
class App extends Component {

  render() {
    return (
      <StudentRegister />
    );
  }
}

export default App;
