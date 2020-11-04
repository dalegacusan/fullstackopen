import React from "react";

export default function Total(props) {
    const { parts } = props;

    const calculateTotal = () => {

        const exercises = [];

        for (let item of parts) {
            exercises.push(item.exercises);
        }

        return exercises.reduce((total, curr) => curr + total);
    }

    return (
        <div>
            <h3>Total of {calculateTotal()} Exercises</h3>
        </div>
    );
}