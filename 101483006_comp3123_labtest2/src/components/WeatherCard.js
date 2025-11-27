import React from "react";

function WeatherCard({ data }) {

    // weather icon url
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    return (
        <div className="weather-card">
            {/* city + country */}
            <h2>
                {data.name}, {data.sys.country}
            </h2>

            {/* icon + temperature */}
            <div className="weather-main">
                <img src={iconUrl} alt="weather icon" />
                <h1>{Math.round(data.main.temp)}°C</h1>
            </div>

            {/* weather text */}
            <p className="desc">{data.weather[0].description}</p>

            {/* extra weather info */}
            <div className="weather-details">
                <p><b>Humidity:</b> {data.main.humidity}%</p>
                <p><b>Wind:</b> {data.wind.speed} m/s</p>
                <p><b>Pressure:</b> {data.main.pressure} hPa</p>
            </div>
        </div>
    );
}

export default WeatherCard;
