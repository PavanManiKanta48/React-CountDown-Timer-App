import React, { useState, useEffect } from "react";
import "./App.css";
import Display from "./Display";

function App() {
  const endTime = new Date("july 11, 2023 00:00:00").getTime();
  const [currentTime, setcurrentTime] = useState(new Date().getTime());
  const gap = endTime - currentTime;
  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const remainigDays = Math.floor(gap / days);
  const remainigHours = Math.floor((gap % days) / hours);
  const remainigMinutes = Math.floor((gap % hours) / minutes);
  const remainigSeconds = Math.floor((gap % minutes) / seconds);

  useEffect(() => {
    setTimeout(() => setcurrentTime(new Date().getTime()), 1000);
  }, [currentTime]);

  return (
    <div className="App">
      <center>
        <Display
          days={remainigDays}
          hours={remainigHours}
          minutes={remainigMinutes}
          seconds={remainigSeconds}
        />
      </center>
    </div>
  );
}

export default App;
