import React, { Component } from 'react';
import './App.css';
import Login from './containers/Login/Login';
import Ecircuit from './Ecircuit'
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import yellow from 'material-ui/colors/yellow';

const theme = createMuiTheme({
  palette: {
    primary: { main: yellow[500] }, // Purple and green play nicely together.
    //secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
  },
});

class App extends Component {

  render() {
    return (
      <BrowserRouter>

      <MuiThemeProvider theme={theme}>

      <Ecircuit />
      </MuiThemeProvider>
    </BrowserRouter>
    );
  }
}

export default App;
