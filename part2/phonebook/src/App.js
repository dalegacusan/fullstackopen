import React, { useState, useEffect } from "react";
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";
import noteService from "./services/personHelpers";
import "./App.css";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import personHelpers from "./services/personHelpers";

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

    const newPerson = {
      id: uuidv4(),
      name: newName,
      number: newNumber,
      date: new Date(),
    };

    const currentPerson = persons.find(person => person.name === newName);

    if (currentPerson) {
      if (window.confirm(`${newName} is already added to phonebook, would you like to replace the old number with a new one?`)) {
        personHelpers.updatePerson(currentPerson, { ...currentPerson, number: newNumber })
          .then(response => {
            setPersons(persons.map(person => person.id === response.data.id ? response.data : person));
          });
      };
    } else {
      noteService.create(newPerson)
        .then(response => {
          setPersons([...persons, response]);

          setNewName('');
          setNewNumber('');
        });
    }

    setNewName('');
    setNewNumber('');

  }

  const handleFilterChange = (e) => {
    const { value } = e.target;

    setFilterName(value);
  }

  const handleDelete = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      noteService.deletePerson(id);

      setPersons(persons.filter(person => person.id !== id));
    }
  }

  useEffect(() => {
    noteService
      .getAll()
      .then(response => setPersons(response));
  }, []);

  return (
    <div className="App">

      <h2>Phonebook</h2>

      <Filter filterName={filterName} handleFilterChange={handleFilterChange} />

      <h2>Add New Contact</h2>

      <PersonForm newName={newName} newNumber={newNumber} handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} />

      <Persons persons={persons} filterName={filterName} handleDelete={handleDelete} />

    </div>
  );
}