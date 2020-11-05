import React from "react";

export default function Persons(props) {

    const { persons, filterName } = props;

    return (
        <div>
            <h2>Numbers</h2>
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