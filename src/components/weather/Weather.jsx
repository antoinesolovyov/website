import React, { useState, useEffect } from "react";

import "./Weather.css";

const WEATHER_API_KEY = "7cd1581792cb7fa3710cd45312c6415e";

("api.openweathermap.org/data/2.5/forecast?id=524901&APPID={WEATHER_API_KEY}");

const Weather = () => {
    const [main, setMain] = useState("0");
    const [name, setName] = useState("City");
    const [units, setUnits] = useState("metric");

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const url =
                `https://api.openweathermap.org/data/2.5/weather?` +
                `lat=${position.coords.latitude}&` +
                `lon=${position.coords.longitude}&` +
                `units=${units}&` +
                `appid=${WEATHER_API_KEY}`;

            fetch(url)
                .then(response => response.json())
                .then(json => {
                    setMain(json.main);
                    setName(json.name);
                });
        });
    }, []);

    return (
        <div>
            <p>{`${name}: ${main.temp}˚C`}</p>
        </div>
    );
};

export default Weather;
