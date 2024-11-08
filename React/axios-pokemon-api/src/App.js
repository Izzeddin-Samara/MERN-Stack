import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=807');
      setPokemon(response.data.results);
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
    }
  };

  return (
    <div className="App">
      <h1>Pokemon Fetcher</h1>
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      <ul>
        {pokemon.map((poke, index) => (
          <li key={index}>{poke.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
