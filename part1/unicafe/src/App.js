import './App.css';
import React, { useState } from "react";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import Statistics from "./components/Statistics";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [hasStatistics, setHasStatistics] = useState(false);

  const total = good + neutral + bad;
  const average = (good / total) - (bad / total);
  const positive = 100 * (good / total);

  const setStatistic = (event) => {
    setHasStatistics(true);

    const { name } = event.target;

    switch (name) {
      case "good":
        setGood((currentNum) => (currentNum += 1));
        break;
      case "neutral":
        setNeutral((currentNum) => (currentNum += 1));
        break;
      case "bad":
        setBad((currentNum) => (currentNum += 1));
        break;
      default:
        console.log("Please click a button.");
    }
  };

  const statisticsContainer = (
    <div>
      <table>
        <tbody>
          <Statistics text="good" statistic={good} />
          <Statistics text="neutral" statistic={neutral} />
          <Statistics text="bad" statistic={bad} />
          <Statistics text="total" statistic={total} />
          <Statistics text="average" statistic={average} />
          <Statistics text="positive" statistic={positive} />
        </tbody>
      </table>
    </div>
  );

  return (
    <div>
      <Header />
      <Buttons setStatistic={setStatistic} />
      <h3>Statistics</h3>
      {hasStatistics ? statisticsContainer : <p>No feedback given</p>}
    </div>
  );
};