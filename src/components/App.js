import React from 'react';
import axios from 'axios';
import '../Style.css'
import CitySearch from './CitySearch';
import WeatherCard from './WeatherCard'

class App extends React.Component{

    state = {weatherResult: null}

    onSearchSubmit = async (searchInputValue) => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchInputValue}&appid=b1d58c906cf01fecde85d4cd9feaafc2`)
        this.setState({weatherResult: response.data})
     }

    render() {
        return(
            <div className="container my-5">
                <center><h1  style={{marginTop:"90px" ,fontFamily:'sans-serif',fontSize:"50px",color:"darkgrey",fontWeight:"300px"}}>Weather in</h1></center><br/><br/>
                 <CitySearch onSearchSubmit = {this.onSearchSubmit} />
                 {this.state.weatherResult ?  <WeatherCard weatherResult = {this.state.weatherResult} /> : <div></div>}
            </div>
        )
    }

}

export default App;