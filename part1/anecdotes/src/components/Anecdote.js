import React from "react";

export default function Anecdote(props){

    const { anecdotes, selected, votes } = props;

    return (
        <div>
            <p>{anecdotes[selected]}</p>
            <p>has {votes[selected]} votes</p>
        </div>
    );
}