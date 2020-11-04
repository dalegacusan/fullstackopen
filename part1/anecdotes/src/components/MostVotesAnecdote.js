import React from "react";

export default function MostVotesAnecdote(props) {

    const { anecdotes, votes } = props;

    return (
        <div>
            <h1>Anecdote with Most Votes</h1>
            <p>{anecdotes[votes.indexOf(Math.max(...votes))]}</p>
        </div>
    );
}