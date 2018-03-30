import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import Icon from 'material-ui/Icon';
import { FormControl, FormHelperText } from 'material-ui/Form';
import classNames from 'classnames';
import './StudentRegister.css'
import MenuItem from 'material-ui/Menu/MenuItem';
import Button from 'material-ui/Button';



const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
});

// FOR DEPARTMENT CHOICE


const currencies = [
    {
        value: 0,
        label: 'CSE',
    },
    {
        value: 1,
        label: 'EEE',
    },
    {
        value: 2,
        label: 'ECE',
    }
];

function FullWidthGrid(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            {/* Master Grid */}
            <Grid container spacing={24} className="formContainer" >
                <Grid item xs={12}  >
                    {/* Form Container  */}
                    <Grid container alignItems='center' justify='center'>
                        {/* Text Field container */}
                        <Grid item xs={12} sm={10} md={6} >

                            {/* Card Begins */}
                            <Card className="CardContainer">
                                <CardContent>
                                    <Grid container >
                                        <Grid item xs={12} >
                                            {/* Row for two fields */}
                                            {/* Reg no & Department */}
                                            <Grid container direction='row' spacing={8} align='center' justify='center' className="rowItem" >
                                                <Grid item xs={12} md={6}  >

                                                    <FormControl className={classNames(classes.margin, classes.textField)}>
                                                        <InputLabel htmlFor="RegNo">Registration No.</InputLabel>
                                                        <Input
                                                            id="RegNo"
                                                            type="text"
                                                            className="rowItem"
                                                            endAdornment={
                                                                <InputAdornment position="end">
                                                                    <Icon>perm_contact_calendar</Icon>
                                                                </InputAdornment>
                                                            }
                                                        />
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <FormControl className={classNames(classes.margin, classes.textField)}>
                                                        <InputLabel htmlFor="Department">Department</InputLabel>
                                                        <Input
                                                            id="Department"
                                                            type="text"
                                                            className="rowItem"
                                                            endAdornment={
                                                                <InputAdornment position="end">
                                                                    <Icon>school</Icon>
                                                                </InputAdornment>
                                                            }
                                                        />
                                                    </FormControl>
                                                </Grid>
                                            </Grid>

                                            {/* First Name and Last Name */}
                                            <Grid container direction='row' spacing={8} align='center' justify='center' className="rowItem" >
                                                <Grid item xs={12} md={6}  >

                                                    <FormControl className={classNames(classes.margin, classes.textField)}>
                                                        <InputLabel htmlFor="FirstName">First Name</InputLabel>
                                                        <Input
                                                            id="FirstName"
                                                            type="text"
                                                            className="rowItem"
                                                            endAdornment={
                                                                <InputAdornment position="end">
                                                                    <Icon>account_circle</Icon>
                                                                </InputAdornment>
                                                            }
                                                        />
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <FormControl className={classNames(classes.margin, classes.textField)}>
                                                        <InputLabel htmlFor="LastName">Last Name</InputLabel>
                                                        <Input
                                                            id="LastName"
                                                            type="text"
                                                            className="rowItem"
                                                            endAdornment={
                                                                <InputAdornment position="end">
                                                                    <Icon>account_circle</Icon>
                                                                </InputAdornment>
                                                            }
                                                        />
                                                    </FormControl>
                                                </Grid>
                                            </Grid>

                                            {/* Password & Conf Password */}
                                            <Grid container direction='row' spacing={8} align='center' justify='center' className="rowItem" >
                                                <Grid item xs={12} md={6}  >

                                                    <FormControl className={classNames(classes.margin, classes.textField)}>
                                                        <InputLabel htmlFor="Password">Password</InputLabel>
                                                        <Input
                                                            id="Password"
                                                            type="password"
                                                            className="rowItem"
                                                            endAdornment={
                                                                <InputAdornment position="end">
                                                                    <Icon>vpn_key</Icon>
                                                                </InputAdornment>
                                                            }
                                                        />
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <FormControl className={classNames(classes.margin, classes.textField)}>
                                                        <InputLabel htmlFor="ConfPassword">Confirm Password</InputLabel>
                                                        <Input
                                                            id="ConfPassword"
                                                            type="password"
                                                            className="rowItem"
                                                            endAdornment={
                                                                <InputAdornment position="end">
                                                                    <Icon>vpn_key</Icon>
                                                                </InputAdornment>
                                                            }
                                                        />
                                                    </FormControl>
                                                </Grid>
                                            </Grid>

                                            {/* Email & DOB */}
                                            <Grid container direction='row' spacing={8} align='center' justify='center' className="rowItem" >
                                                <Grid item xs={12} md={6}  >

                                                    <FormControl className={classNames(classes.margin, classes.textField)}>
                                                        <InputLabel htmlFor="Email">Email</InputLabel>
                                                        <Input
                                                            id="Email"
                                                            type="email"
                                                            className="rowItem"
                                                            endAdornment={
                                                                <InputAdornment position="end">
                                                                    <Icon>mail</Icon>
                                                                </InputAdornment>
                                                            }
                                                        />
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <FormControl className={classNames(classes.margin, classes.textField)}>
                                                        <InputLabel htmlFor="RegNo">Date of Birth</InputLabel>
                                                        <Input
                                                            id="DOB"
                                                            type="text"
                                                            className="rowItem"
                                                            endAdornment={
                                                                <InputAdornment position="end">
                                                                    <Icon>date_range</Icon>
                                                                </InputAdornment>
                                                            }
                                                        />
                                                    </FormControl>
                                                </Grid>
                                            </Grid>





                                            <Grid container direction='row' spacing={8} align='center' justify='center' className=" buttonSubmit" >
                                                <Button variant="raised" color="secondary" >
                                                    Submit
                                                    </Button>
                                            </Grid>

                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </div>
    );
}

FullWidthGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
