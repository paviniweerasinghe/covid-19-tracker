import React from 'react';
import {Card, CardContent, Typography, Grid } from '@material-ui/core';
import classes from '../Cards/Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = (props) => {
if(!props.confirmed){
    return 'Loading';
}

    return (
        <div className={classes.container}> 
            <Grid container spacing={3} justify='center'> 
                <Grid item component={Card} className={cx(classes.card, classes.infected)}> 
                    <CardContent> 
                        <Typography color='textSecondary' gutterBottom> Infected </Typography>
                        <Typography variant='h5'> <CountUp start={0} end={props.confirmed} duration={1.5} separator=','/> </Typography>
                        <Typography color='textSecondary'>{new Date(props.lastUpdate).toDateString()} </Typography>
                        <Typography variant='body2'> Number of active cases of Covid-19 </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} className={cx(classes.card, classes.recovered)}> 
                    <CardContent> 
                        <Typography color='textSecondary' gutterBottom> Recovered </Typography>
                        <Typography variant='h5'> <CountUp start={0} end={props.recovered} duration={1.5} separator=','/> </Typography>
                        <Typography color='textSecondary'>{new Date(props.lastUpdate).toDateString()} </Typography>
                        <Typography variant='body2'> Number of recoveries from Covid-19 </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} className={cx(classes.card, classes.deaths)}> 
                    <CardContent> 
                        <Typography color='textSecondary' gutterBottom> Deaths </Typography>
                        <Typography variant='h5'> <CountUp start={0} end={props.deaths} duration={1.5} separator=','/> </Typography>
                        <Typography color='textSecondary'>{new Date(props.lastUpdate).toDateString()} </Typography>
                        <Typography variant='body2'> Number of deaths caused by Covid-19 </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;