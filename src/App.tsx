import React from "react";
import "./App.css";
import Labs from "./Labs";
import Quizzes from "./Quiz";

function App() {
  return (
    <div>
      <h1>Welcome to Web Dev!!</h1>
      <Quizzes/>
      
      <Labs />
    </div>
  );
}

export default App;
