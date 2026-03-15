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
      <h1>Random Joke Generator</h1>
      <p>{joke}</p>
      <button onClick={fetchJoke}>Get a Joke</button>
    </div>
  );
}

export default App;
