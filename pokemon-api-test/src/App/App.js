import '../components/App.css'
import { useState,useEffect } from 'react';
import PokemonList from '../api/PokemonList';
function App() {
  const [pokemon,setPokemon] = useState([])
  return (
    <div className="App">
      <PokemonList/>
    </div>
  );
}

export default App;
