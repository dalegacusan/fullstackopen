import React, { useState } from "react";

export default function CountryView(props) {
    const { oneResult } = props;
    const { name, capital, population, languages, flag } = props.country;

    const [buttonClicked, setButtonClicked] = useState(false);

    const handleShowMoreClick = () => setButtonClicked(!buttonClicked);


    return (
        <div>
            <span>{name}</span>

            {
                // If show only one result, hide button, else, show button.
                oneResult ? null : <button type="button" name={name} onClick={() => handleShowMoreClick()}>
                    {buttonClicked ? "Show Less" : "Show More"}
                </button>
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
                    </div> : null
            }
        </div>
    );
}