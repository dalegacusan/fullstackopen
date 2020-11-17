import React from "react";
import PersonForm from "../PersonForm";
import Filter from "../Filter";


export default function Jumbotron(props) {

  const { newName, newNumber, handleInputChange, handleFormSubmit, filterName, handleFilterChange } = props;

  return (
    <header class="bg-primary">
      <div class="container section_container">
        <h3>Add, Search, and Delete a Contact</h3>
        <div class="row">
          <div class="col">
            <PersonForm newName={newName} newNumber={newNumber} handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} />
          </div>
          <div class="col">
            <Filter filterName={filterName} handleFilterChange={handleFilterChange} />
          </div>
        </div>
      </div>
    </header>
  );
}