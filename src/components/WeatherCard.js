import React from 'react'
import '../Style.css'


class WeatherCard extends React.Component{

   

    spitOutCelcius = (kelvin) => {
        const celcius = Math.round(kelvin - 273.15);
        return celcius;
    }

    getWeatherIcon = (iconParameter) => {
        const icon = ``
        return <img src = {icon} alt = "" />
    }

    render() {
        return(
           <center> <div >
            <div className="card-top text-center my-3">
                <div className="city-name my-3">
                    <p style={{fontSize:'30px' ,color:"white"}}>{this.props.weatherResult.name}</p>
                    
                </div>
            </div>

            <div className="card-body my-5">
                <div className="card-mid row">
                    <div className="col-7 text-center temp">
                        <span style={{fontSize:'50px', color:"white"}}>{this.spitOutCelcius(this.props.weatherResult.main.temp)}&deg;C</span>
                    </div>
                    <div className="col-5 condition-temp text-light">
                        <p className="condition">{this.props.weatherResult.weather[0].description}</p>
                        <p className="high">Max: 30&deg;C</p>
                        <p className="low">Min: 27&deg;C</p>
                    </div>
                </div>

                <div className="icon-container card shadow mx-8px">
                    {this.getWeatherIcon(this.props.weatherResult.weather[0].icon)}
                </div>
                <div className="card-bottom px-1 py-4 row text-light">
                    <div className="col text-center">
                        <p>{this.spitOutCelcius(this.props.weatherResult.main.feels_like)}&deg;C</p>
                        <span>Feels Like</span>
                    </div>
                    <div className="col-7 text-center ">
                        <p>{this.props.weatherResult.main.humidity}%</p>
                        <span>Humidity</span>
                    </div>
                </div>
            </div>
        </div></center>
        )
    }
}

export default WeatherCard;