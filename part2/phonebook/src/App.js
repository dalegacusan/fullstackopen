import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";

export default function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterName, setFilterName] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    name === "name" ? setNewName(value) : setNewNumber(value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons([...persons, { name: newName, number: newNumber }]);
    }

    setNewName('');
    setNewNumber('');

  }

  const handleFilterChange = (e) => {
    const { value } = e.target;

    setFilterName(value);
  }

  useEffect(() => {
    console.log("Effect");

    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        const notes = response.data;
        console.log("Promise Fulfilled");
        setPersons(notes);
      });
  }, []);

  console.log("render", persons.length, "persons");




  return (
    <div className="App">

      <h2>Phonebook</h2>

      <Filter filterName={filterName} handleFilterChange={handleFilterChange} />

      <h2>Add New Contact</h2>

      <PersonForm newName={newName} newNumber={newNumber} handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} />

      <Persons persons={persons} filterName={filterName} />

    </div>
  );
}