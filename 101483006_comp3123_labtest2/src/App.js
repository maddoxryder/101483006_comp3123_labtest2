import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";

function App() {
    const [city, setCity] = useState("Toronto");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");

    const API_KEY = "4f43d2ff840aba4607397a68abf5bfce";

    const fetchWeather = async (cityName) => {
        try {
            const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
            );
            setWeather(res.data);
            setError("");
        } catch (err) {
            console.log("API ERROR:", err.response?.data);
            setError("City not found. Try another.");
            setWeather(null);
        }
    };

    useEffect(() => {
        fetchWeather(city);
    }, []);

    return (
        <div className="container">
            <h1 className="title">Weather App</h1>

            <SearchBar
                onSearch={(value) => {
                    if (value.trim() !== "") {
                        setCity(value);
                        fetchWeather(value);
                    }
                }}
            />

            {error && <p className="error">{error}</p>}

            {weather && <WeatherCard data={weather} />}
        </div>
    );
}

export default App;
