import React, { useState, useEffect } from "react";
import "./App.css";
import CountryView from "./components/CountryView";
import axios from "axios";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [countries, setCountries] = useState([]);

  const handleInputChange = (e) => {
    const { value } = e.target;

    setSearchValue(value);
  };

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      const { data } = response;

      setCountries(data);
    });
  }, []);

  const displayedCountries = () => {
    let toDisplay = "";
    const filteredArray = [...countries].filter((country) => {
      const { name } = country;
      const countryName = name.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return countryName.indexOf(searchText) > -1;
    });

    if (filteredArray.length > 10) {
      toDisplay = <p>Too many matches, specify another filter</p>;
    } else if (filteredArray.length > 1 && filteredArray.length <= 10) {
      toDisplay = filteredArray.map(country => {
        return (
          <CountryView key={country.area} country={country} />
        );
      })
    } else if (filteredArray.length === 1) {
      const { name, capital, population, languages, flag } = filteredArray[0];
      toDisplay = (
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
        </div>
      );
    }

    return toDisplay;
  }

  return (
    <div className="App">
      <span>Find Countries:</span>
      <input type="text" value={searchValue} onChange={handleInputChange} />
      {displayedCountries()}
    </div>
  );
}