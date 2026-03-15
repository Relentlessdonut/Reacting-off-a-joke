import React, { useState } from 'react';
import './App.css';

function App() {
  const [joke, setJoke] = useState('');

const [reaction, setReaction] = useState("");
  const fetchJoke = async () => {
    const res = await fetch('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' }
    });
    const data = await res.json();
    setJoke(data.joke);
  };

  return (
  <div className="App">
    <div className="container">
      <h1>😂 Random Joke Generator</h1>

      <p className="joke">{joke || "Click the button to get a joke!"}</p>

      <button onClick={fetchJoke}>Get a Joke</button>

      <div className="reactions">
        <button onClick={() => setReaction("😂")}>😂</button>
        <button onClick={() => setReaction("👍")}>👍</button>
        <button onClick={() => setReaction("👎")}>👎</button>
      </div>

      {reaction && <p>Your reaction: {reaction}</p>}
    </div>
  </div>
);
}

export default App;
