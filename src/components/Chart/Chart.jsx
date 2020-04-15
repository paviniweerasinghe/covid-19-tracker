import React from 'react';
import {Line, Bar} from 'react-chartjs-2';
import classes from '../Chart/Chart.module.css';

const Chart = (props) => {

    const lineChart = (
        (props.dailyData.length) !== 0 ? (
            <Line
                data = {{
                    labels : props.dailyData.map(date =>{
                        return date.reportDate
                    }),
                    datasets : [{
                        data : props.dailyData.map(date => {
                            return date.confirmed.total
                        }),
                        label : 'Infected',
                        borderColor : '#3333ff',
                        fill : true
                    },{
                        data : props.dailyData.map(date => {
                            return date.deaths.total
                        }),
                        label : 'Deaths',
                        borderColor : 'red',
                        backgroundColor : 'rgba(255,0,0,0.5)',
                        fill : true
                    }]
                }}
            />) : null
    )

    return (
        <div className={classes.container}> 
            {lineChart}
        </div>
    )
}

export default Chart;