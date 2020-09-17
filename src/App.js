import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CharacterCard from "./CharacterCard";
import WordCard from "./WordCard";
const word = "Hello";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome To Card Game</p>
        <WordCard value={word} />
      </header>
    </div>
  );
}

export default App;
