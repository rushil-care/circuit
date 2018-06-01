import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '../../components/AppBar/AppBar'


import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './StudentDashboard.css'
import CourseCard from '../../components/CourseCard/CourseCard'
const styles = theme => ({
    root: {
        flexGrow: 1,
        
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        fontSize:'1.5rem',
        marginLeft:'10vw',
        marginRight:'10vw',
    },
    mainCont: {
        marginTop: '10vh',
        color: theme.palette.text.secondary,
    },
    cardCont: {
        marginTop: '2em',
        marginLeft: '10vw',
        marginRight: '10vw'
    },
    cardTitle: {
        textAlign: 'center',
        height: '50px',
    }
});





class StudentReg extends Component {
    state = {
        courses: ['ECE Lab', 'EEE Lab', 'Power System', 'EMI Lab','EIE Lab']
    }




    render() {
        const { classes } = this.props;

        return (

            <div  className='bkg'>
                <AppBar />
                <Grid container spacing={24} className={classes.mainCont}>
                    <Grid container direction='row'>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>{"Courses Enrolled"}</Paper>
                        </Grid>
                        <Grid  container direction='row' spacing={24} className={classes.cardCont} >
                        {this.state.courses.map((each,index)=> (<CourseCard key={index} course={each} />))}
                            


                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );

    }
}
StudentReg.propTypes = {
    classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(StudentReg);
