import React, { useState } from "react";

export default function CountryView(props) {
    const { name, capital, population, languages, flag } = props.country;

    const [buttonClicked, setButtonClicked] = useState(false);

    const handleShowMoreClick = () => {
        setButtonClicked(!buttonClicked);
    }

    return (
        <div>
            <span>{name}</span>
            <button type="button" name={name} onClick={() => handleShowMoreClick()}>
                {buttonClicked ? "Show Less" : "Show More"}
            </button>

            {
                buttonClicked ?
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
                    </div> : null
            }
        </div>
    );
}