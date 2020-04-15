import React from 'react';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import classes from '../src/App.css';
import CoronaImage from '../src/images/image.png';


class App extends React.Component {

    state = {
        confirmed : 0,
        recovered : 0,
        deaths : 0,
        lastUpdate : 0,
        dailyData : [],
        countryName : [],
        country : ''
    }

    
    async componentDidMount(country) {
        const url = 'https://covid19.mathdro.id/api';

        const res = await fetch(url);
        const response = await res.json()
        // console.log(response);
        this.setState({
            confirmed : response.confirmed.value,
            recovered : response.recovered.value,
            deaths : response.deaths.value,
            lastUpdate : response.lastUpdate
        })
        

        const dailyData = await fetch(`${url}/daily`);
        const response1 = await dailyData.json()
        // console.log (response1);
        this.setState({        
            dailyData : response1
        })

        const countries = await fetch(`${url}/countries`);
        const response2 = await countries.json()
        console.log(response2)
        // console.log (response2.countries.map(country=>country.name))
        this.setState({        
            countryName : response2.countries.map(country=>country.name)
        })
        
    }

    handleCountryChange =  async (country) => {
        const url = 'https://covid19.mathdro.id/api';
        let changeablUrl = url;

        if (country) {
            changeablUrl = `${url}/countries/${country}`
        }
        const res = await fetch(changeablUrl);
        const response = await res.json()
         console.log(response);
        this.setState({
            confirmed : response.confirmed.value,
            recovered : response.recovered.value,
            deaths : response.deaths.value,
            lastUpdate : response.lastUpdate,
            country : country
        })
    }
   

    render () {
        
        const {confirmed, recovered, deaths, lastUpdate, dailyData, countryName, country} = this.state

        return (
            <div className={classes.container}> 
                <img src={CoronaImage} alt='corona-19' className={classes.image}/>
                <Cards confirmed={confirmed} recovered={recovered} deaths={deaths} lastUpdate={lastUpdate}/>
                <CountryPicker countryName={countryName} handleChange={this.handleCountryChange}/>
                <Chart confirmed={confirmed} recovered={recovered} deaths={deaths} lastUpdate={lastUpdate} country={country} dailyData={dailyData}/>
            </div>
        )
    }
}

export default App;