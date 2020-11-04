import React, { useState } from "react";
import './App.css';
import Header from "../Header/Header";
import Content from "../Content/Content";

function App() {

  const course = 'Half Stack application development';
  const content = [
    {
      id: 1,
      partName: "Fundamentals of React",
      exercises: 10
    },
    {
      id: 2,
      partName: "Using props to pass data",
      exercises: 7
    },
    {
      id: 3,
      partName: "State of a Component",
      exercises: 14
    }
  ];

  return (
    <div className="App">
      <div>
        <Header course={course} />
        <Content content={content} />
      </div>
    </div>
  );
}

export default App;
