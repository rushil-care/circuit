import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './containers/Login/Login'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
            <Login />

      </MuiThemeProvider>
    );
  }
}

export default App;
