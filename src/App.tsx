import React from "react";
import "./App.css";

const getWeek = () => {
  const date = new Date(); // Create a new Date object with the current date and time
  const dayOfWeek = date.getDay(); // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return daysOfWeek[dayOfWeek];
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>{getWeek()}</h3>
      </header>
    </div>
  );
}

export default App;
