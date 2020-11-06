import React from "react";

export default function Person(props) {

    const { person, handleDelete } = props;
    const { id, name, number } = person;

    return (
        <div>
            <span key={name}>{name} <span>{number}</span></span>
            <button type="button" onClick={() => handleDelete(id)}>Delete</button>
        </div>
    );
}