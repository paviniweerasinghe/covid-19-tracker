import React from 'react';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import classes from '../src/App.css';



class App extends React.Component {

    state = {
        confirmed : 0,
        recovered : 0,
        deaths : 0,
        lastUpdate : 0,
        dailyData : [],
        country : []
    }

    
    async componentDidMount() {
        const url = 'https://covid19.mathdro.id/api';
        const res = await fetch(url);
        const response = await res.json()
        this.setState({
            confirmed : response.confirmed.value,
            recovered : response.recovered.value,
            deaths : response.deaths.value,
            lastUpdate : response.lastUpdate

        })

        const dailyData = await fetch(`${url}/daily`);
        const response1 = await dailyData.json()
        console.log (response1);
        this.setState({        
            dailyData : response1
        })

        const countries = await fetch(`${url}/countries`);
        const response2 = await countries.json()
        console.log (response2.countries)
        this.setState({        
            country : response2.countries
        })
        
    }
   

    render () {
        
        const {confirmed, recovered, deaths, lastUpdate, dailyData, country} = this.state

        return (
            <div className={classes.container}> 
                <Cards confirmed={confirmed} recovered={recovered} deaths={deaths} lastUpdate={lastUpdate}/>
                <CountryPicker country={country}/>
                <Chart dailyData={dailyData}/>
            </div>
        )
    }
}

export default App;