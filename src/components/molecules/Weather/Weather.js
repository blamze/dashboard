import React from 'react'
import sunsetIcon from '../../../assets/img/sunset.svg'
import sunriseIcon from '../../../assets/img/sunrise.svg'

const weatherApiUrl = 'https://community-open-weather-map.p.rapidapi.com/weather?q=kaunas&units=metric';
const weatherApiKey = 'wjZqL855a4msh34pawTk4IbaHwrwp1LcGUhjsnunhhQ0LrHrIG';

export class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            temp: `0°`,
            weatherIcon: '',
            sunrise: 0,
            sunset: 0,
        }
    }

    componentDidMount() {
        const refetchWeatherInterval = 60 * 60 * 1000
        this.fetchWeather();
        window.setInterval(this.fetchWeather, refetchWeatherInterval);
    }

    parseTime = (time) => {
        const d = new Date(time),
            h = (d.getHours() < 10 ? '0' : '') + d.getHours(),
            m = (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
        return h + ':' + m;
    }

    fetchWeather = () => {
        fetch(weatherApiUrl, {
            headers: {
                "X-RapidAPI-Key": weatherApiKey,
            }
        }).then(response => response.json()
        ).then(data => {
            this.setState({
                temp: `${data.main.temp}°`,
                weatherIcon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                sunrise: this.parseTime(data.sys.sunrise * 1000),
                sunset: this.parseTime(data.sys.sunset * 1000)
            })
        })
    }

    render() {
        const {temp, weatherIcon, sunrise, sunset} = this.state
        return (
            <div className="weather-container">
                <div className="weather-block">
                    <div className="weather-weather">{temp}</div>
                    <img className="weather-main-icon" alt="weather icon" src={weatherIcon}/>
                </div>
                <div className="weather-block">
                    <div className="weather-text">{sunrise}</div>
                    <img src={sunriseIcon} className="weather-icon" alt="sunrise icon"/>
                </div>
                <div className="weather-block">
                    <div className="weather-text">{sunset}</div>
                    <img src={sunsetIcon} className="weather-icon" alt="sunset icon"/>
                </div>
            </div>
        )
    }
}

