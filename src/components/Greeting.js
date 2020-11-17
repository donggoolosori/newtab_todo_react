import React from "react";
import "../style/Greeting.css";

// Greeting Component
const Greeting = ({ name }) => {
  const hour = new Date().getHours();
  let greet;
  if (hour >= 5 && hour < 12) {
    greet = "Morning";
  } else if (hour >= 12 && hour < 17) {
    greet = "Afternoon";
  } else {
    greet = "Evening";
  }
  return (
    <h1 className="greeting">
      Good {greet} {name}!
    </h1>
  );
};

export default Greeting;
