import React from "react";
import Person from "./Persons/Person";

export default function Persons(props) {

    const { persons, filterName, handleDelete } = props;

    return (
        <div>
            <h2>Numbers</h2>
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
    );
}