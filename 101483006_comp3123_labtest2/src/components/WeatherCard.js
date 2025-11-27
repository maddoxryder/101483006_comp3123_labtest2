import React from "react";

function WeatherCard({ data }) {
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    return (
        <div className="weather-card">
            <h2>
                {data.name}, {data.sys.country}
            </h2>

            <div className="weather-main">
                <img src={iconUrl} alt="weather icon" />
                <h1>{Math.round(data.main.temp)}°C</h1>
            </div>

            <p className="desc">{data.weather[0].description}</p>

            <div className="weather-details">
                <p><b>Humidity:</b> {data.main.humidity}%</p>
                <p><b>Wind:</b> {data.wind.speed} m/s</p>
                <p><b>Pressure:</b> {data.main.pressure} hPa</p>
            </div>
        </div>
    );
}

export default WeatherCard;
