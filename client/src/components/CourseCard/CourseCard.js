import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './CourseCard.css'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    mainCont: {
        marginTop: '10vh',
        color: theme.palette.text.secondary,
    },
    cardCont: {
    backgroundColor:'#ff0000'
        
       
    },
    cardTitle: {
        textAlign: 'center',
        height: '50px',
        justify:'center',
        backgroundColor:'#ff0000'
    }
});
function CourseCard(props) {
    return (
        
    <Grid item xs={12} sm={4}>
        <Card className={styles.cardCont}>

            <CardContent className={styles.paper} >
                <div className='mainCont'>
                    <h1 >{props.course}</h1>
                </div>
                <div>
                    {"Level 1 Level 2 Level3"}

                </div>
            </CardContent>

        </Card>

    </Grid>);


}

export default withStyles(styles)(CourseCard);



