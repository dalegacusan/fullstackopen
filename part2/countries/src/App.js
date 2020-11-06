import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import CountryView from "./components/CountryView";

const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const [countries, setCountries] = useState([]);

  const handleInputChange = (e) => {
    const { value } = e.target;

    setSearchValue(value);
  };

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
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
          <CountryView key={country.area} country={country} oneResult={false} />
        );
      })
    } else if (filteredArray.length === 1) {

      toDisplay = (
        <CountryView country={filteredArray[0]} oneResult={true} WEATHER_API_KEY={WEATHER_API_KEY} />
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