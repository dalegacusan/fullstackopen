import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import personHelpers from "./services/personHelpers";

// npx json-server --port 3001 --watch db.jsons

export default function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterName, setFilterName] = useState('');
  const [messageNotification, setMessageNotification] = useState({ status: null, message: null });

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
            // If ID matches, place returned object to current index, else, return original object.
            handleNotification("updateSuccess", currentPerson);
            setPersons(persons.map(person => person.id === response.data.id ? response.data : person));
          })
          .catch(error => {
            handleNotification("error", currentPerson);
          });

      };

    } else {
      personHelpers.create(newPerson)
        .then(response => {
          handleNotification("success", response);
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
      personHelpers.deletePerson(id);

      setPersons(persons.filter(person => person.id !== id));
    }
  }

  const handleNotification = (status, personObj) => {
    if (status === "success") {
      setMessageNotification({ status, message: `Added ${personObj.name}` });
    } else if (status === "error") {
      setMessageNotification({ status, message: `Person ${personObj.name} was already removed from server` });
    } else if (status === "updateSuccess"){
      setMessageNotification({ status, message: `Successfully updated ${personObj.name}` });
    }

    setTimeout(() => {
      setMessageNotification({ status: null, message: null });
    }, 5000);
  }

  useEffect(() => {
    personHelpers
      .getAll()
      .then(response => setPersons(response));
  }, []);

  return (
    <div className="App">

      <h2>Phonebook</h2>
      <Notification message={messageNotification} />

      <Filter filterName={filterName} handleFilterChange={handleFilterChange} />

      <h2>Add New Contact</h2>

      <PersonForm newName={newName} newNumber={newNumber} handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} />

      <Persons persons={persons} filterName={filterName} handleDelete={handleDelete} />

    </div>
  );
}