import React from 'react';
import './Result.css'

const Result = (props) => {

    const { err, city, date, sunrise, sunset, temp, pressure, wind } = props.weather;

    let content = null;

    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();


    if (!err && city) {
        content = (
            <div>
                <h1>Weather for {city}</h1>
                <h2>Date: {date}</h2>
                <h2>Sunrise: {sunriseTime}</h2>
                <h3>Sunset: {sunsetTime}</h3>
                <h3>Temp: {temp} &#176;C</h3>
                <h3>Pressure: {pressure}hPa</h3>
                <h4>Wind: {wind}m/s</h4>


            </div>
        )
    }

    return (
        <div className='result'>
            {err ? `${city}is not avaible in database` : content}

        </div>

    );
}

export default Result;