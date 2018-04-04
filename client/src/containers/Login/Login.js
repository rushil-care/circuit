import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Paper, Grid, TextField, Select, Button, Icon, IconButton } from 'material-ui';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { Visibility, VisibilityOff } from 'material-ui-icons';
import { FormControl, FormHelperText } from 'material-ui/Form';
import classNames from 'classnames';
import MenuItem from 'material-ui/Menu/MenuItem';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import Date from '../../components/DatePicker/DatePicker';
import SignUpHeader from '../../components/SignUpHeader/SignUpHeader';
import * as colors from 'material-ui/colors';
import './Login.css';
import Dialog from '../../components/Dialog/Dialog'
import axios from 'axios';
import StudentRegister from '../StudentRegister/StudentRegister';

import AppBar from '../../components/AppBar/AppBar'


const styles = theme => ({


  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF5722"
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    }
  },
  overrides: {
    MuiButton: {
      // Name of the styleSheet
      root: {
        // Name of the rule
        background: 'linear-gradient(45deg, #2196F3 30%, #03A9F4 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 30,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
      },
    },
  },
});




class Login extends Component {


    state = {
      email : '',
      password : ''
    }

    LoginHandler = () => {
      const data = {
        email : this.state.email,
        password : this.state.password
      }
      axios.post('http://localhost:5000/users/login',data)
      .then(response => {
        console.log(response);
      });
    }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar />

        <Grid container spacing={24} className="formContainer" >
          <Grid item xs={12}  >
            {/* Form Container  */}
            <Grid container alignItems='center' justify='center'>
              {/* Text Field container */}
              <Grid item xs={10} sm={6} md={4}  >

                {/* Card Begins */}
                <Card className="CardContainer">
                  <SignUpHeader />
                  <CardContent className="FormCont">
                    <Grid container >
                      <Grid item xs={12} >

                        <Grid container direction='row' spacing={24} align='center' justify='center'  >

                          <Grid item xs={12} md={8}  >

                            <FormControl className="InputField"  >
                              <InputLabel htmlFor="EmId">User Name</InputLabel>
                              <Input

                                id="EmId"
                                type="text"
                                value={this.state.email} onChange={(event) => this.setState({email: event.target.value})}

                                endAdornment={
                                  <InputAdornment position="end">
                                    <Icon>account_circle</Icon>
                                  </InputAdornment>
                                }
                              />
                            </FormControl>
                          </Grid>

                          {/* Password field */}

                          <Grid item xs={12} md={8}  >

                            <FormControl className="InputField" >
                              <InputLabel htmlFor="EmId" >Password</InputLabel>
                              <Input

                                id="EmId"
                                type="password"
                                value={this.state.password} onChange={(event) => this.setState({password: event.target.value})}
                                endAdornment={
                                  <InputAdornment position="end">
                                    <Icon>vpn_key</Icon>
                                  </InputAdornment>
                                }
                              />
                            </FormControl>
                          </Grid>

                        </Grid>

                      </Grid>
                    </Grid>
                    <Grid container direction='row' spacing={24} justify='flex-end' className="ButtonCont"  >
                      <Grid item xs={4}  >
                        <Button variant="raised" color="secondary"   onClick={this.LoginHandler} >Login </Button>
                      </Grid>


                    </Grid>




                  </CardContent>
                  <CardActions>
                    <Grid container direction='row' spacing={24} justify='center' className="OtherCont" >

                      <Grid item xs={6} >
                        <Grid container justify='flex-start' className="OtherItems">
                    <a href="localhost:3000/" target="_blank">TOP CODERS</a>

                        </Grid>
                      </Grid>
                      <Grid item xs={6}  >
                        <Grid container justify='flex-end' className="OtherItems">
                          <Dialog />
                        </Grid>
                      </Grid>

                    </Grid>
                  </CardActions>
                </Card>

              </Grid>
            </Grid>
          </Grid>

        </Grid>



      </div>
    );
  }


}

export default Login;
