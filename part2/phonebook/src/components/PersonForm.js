import React from "react";

export default function PersonForm(props) {
    const { newName, newNumber, handleInputChange, handleFormSubmit } = props;

    return (
        <div>
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
        </div>
    );
}