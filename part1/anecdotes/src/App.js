import React, { useState, useEffect } from "react";
import './App.css';
import Anecdote from "./components/Anecdote";
import MostVotesAnecdote from "./components/MostVotesAnecdote";

function App() {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Uint8Array(6));
  const [mostVotes, setMostVotes] = useState(0);

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const generateAnecdote = () => {
    const randomNumber = Math.floor((Math.random() * anecdotes.length));

    setSelected(randomNumber);

  }

  const addVote = () => {

    setVotes(array => {
      const arrayCopy = [...array];
      arrayCopy[selected] += 1;

      return arrayCopy;
    });

  }

  useEffect(() => {
    setMostVotes(votes.indexOf(Math.max(...votes)));
  })

  console.log(votes);
  console.log("selected Index", selected);
  console.log("Votes Array", votes);
  // console.log("Votes", votes[mostVotes]);

  return (
    <div className="App">
      <h1>Anecdote of the Day</h1>
      <Anecdote anecdotes={anecdotes} selected={selected} votes={votes} />
      <button type="button" onClick={addVote}>Vote</button>
      <button type="button" onClick={generateAnecdote}>Next Anecdote</button>

      <MostVotesAnecdote anecdotes={anecdotes} mostVotes={anecdotes[mostVotes]} />
    </div>
  );
}

export default App;
