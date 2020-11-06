import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CountryView(props) {
    const [buttonClicked, setButtonClicked] = useState(false);
    const [weatherData, setWeatherData] = useState({});

    const { oneResult, WEATHER_API_KEY } = props;
    const { name, capital, population, languages, flag } = props.country;
    const { main, wind, weather } = weatherData;

    useEffect(() => {
        oneResult ?
            axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${WEATHER_API_KEY}`)
                .then(response => {
                    const { data } = response;

                    console.log("API successfully made request");

                    setWeatherData(data);
                })
            : console.log("API hasn't made a request yet");

    }, []);

    const handleShowMoreClick = () => setButtonClicked(!buttonClicked);

    return (
        <div>

            {
                // If show only one result, hide button, else, show button.
                oneResult ? null : (
                    <div>
                        <span>{name}</span>
                        <button type="button" name={name} onClick={() => handleShowMoreClick()}>
                            {buttonClicked ? "Show Less" : "Show More"}
                        </button>
                    </div>)

            }

            {
                buttonClicked || oneResult ?
                    <div>
                        <h2>{name}</h2>

                        <img src={flag} className="flagImg" alt="countryFlag" />

                        <p>Capital: {capital}</p>
                        <p>Population: {population}</p>
                        <h4>Languages</h4>
                        <ul>
                            {
                                languages.map(lang => {
                                    const { name } = lang;
                                    return <li key={name}>{name}</li>
                                })
                            }
                        </ul>

                        {
                            Object.keys(weatherData).length !== 0 ?
                                <div>
                                    <h2>Weather in {name}</h2>

                                    <p><b>Temperature:</b> {main.temp}</p>
                                    <img src={`http://openweathermap.org/img/w/${weather[0].icon}.png`} alt="weatherIcon" />
                                    <p><b>Wind:</b> {wind.deg}</p>
                                </div> : null
                        }

                    </div> : null
            }
        </div>
    );
}