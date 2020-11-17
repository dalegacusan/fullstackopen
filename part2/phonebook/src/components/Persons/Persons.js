import React from "react";
import Person from "./Person";

export default function Persons(props) {

  const { persons, filterName, handleDelete } = props;

  return (
    <section id="persons">
      <div class="container section_container">
        <h2>Persons</h2>
        {
          persons.map(person => {
            const personName = person.name.toLowerCase();
            const filterEntry = filterName.toLowerCase();

            // Check if filterEntry is found on personName
            if (personName.indexOf(filterEntry) > -1) {
              return <Person key={person.id} person={person} handleDelete={handleDelete} />;
            } else {
              return null;
            }

          })
        }
      </div>
    </section>
  );
}