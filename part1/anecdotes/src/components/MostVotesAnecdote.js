import React from "react";

export default function MostVotesAnecdote(props) {

    const { mostVotes } = props;

    return (
        <div>
            <h1>Anecdote with Most Votes</h1>
            <p>{mostVotes}</p>
        </div>
    );
}