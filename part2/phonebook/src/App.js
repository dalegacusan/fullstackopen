import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
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

  return (
    <div className="App">

      <h2>Phonebook</h2>

      <div>
        Filter shown with <input type="text" value={filterName} onChange={handleFilterChange} />
      </div>

      <h2>Add New Contact</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          Name: <input type="text" value={newName} name="name" onChange={handleInputChange} />
        </div>
        <div>
          Number: <input type="text" value={newNumber} name="number" onChange={handleInputChange} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      Filtered:
        {
          persons.map(person => {
            const { name } = person;
            const personName = name.toLowerCase();
            const filterEntry = filterName.toLowerCase();

            // Check if filterEntry is found on personName
            if (personName.indexOf(filterEntry) > -1) {
              return <p key={name}>{name} <span>{person.number}</span></p>;
            } else {
              return null;
            }

          })
        }

    </div>
  );
}