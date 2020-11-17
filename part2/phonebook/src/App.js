import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Persons from "./components/Persons/Persons";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

import Notification from "./components/Notification";
import HowToUse from "./components/HowToUse";
import personHelpers from "./services/personHelpers";

// npx json-server --port 3001 --watch db.json

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

  // currentPerson is CONFLICTING here
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber,
    };

    personHelpers.create(newPerson)
      .then(response => {
        handleNotification("success", response);
        setPersons([...persons, response]);

        setNewName('');
        setNewNumber('');
      })
      .catch(err => {

        const { message } = err.response.data;

        console.log(message);

        handleNotification("error", message);
      });

    setNewName('');
    setNewNumber('');

  }

  const handleFilterChange = (e) => {
    const { value } = e.target;

    setFilterName(value);
  }

  const handleDelete = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personHelpers.deletePerson(id)
        .then(deletedPerson => {
          handleNotification("deleted", deletedPerson);
          setPersons(persons.filter(person => person.id !== id));
        });
    }
  }

  const handleNotification = (status, messageObj) => {
    if (status === "success") {
      setMessageNotification({ status, message: `Added ${messageObj.name}` });
    } else if (status === "deleted") {
      setMessageNotification({ status, message: `Deleted ${messageObj.data.name}` });
    } else if (status === "error") {
      setMessageNotification({ status, message: messageObj });
    }

    setTimeout(() => {
      setMessageNotification({ status: null, message: null });
    }, 3000);
  }

  useEffect(() => {
    personHelpers
      .getAll()
      .then(response => setPersons(response));
  }, []);

  return (
    <div className="App">
      {/* <HowToUse />
      <h2>Phonebook</h2>
      <Notification message={messageNotification} />

      

      <h2>Add New Contact</h2>

      <PersonForm newName={newName} newNumber={newNumber} handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} />

      */}

      <Navbar />

      {/* Header */}
      <Jumbotron
        newName={newName}
        newNumber={newNumber}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        filterName={filterName}
        handleFilterChange={handleFilterChange}
      />

      {/* Contact */}
      <Persons persons={persons} filterName={filterName} handleDelete={handleDelete} />

      {/* About */}
      <About />

      {/* Footer */}
      <Footer />

    </div>
  );
}