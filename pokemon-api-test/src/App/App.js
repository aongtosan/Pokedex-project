import '../components/App.css'
import { useState,useEffect } from 'react';
import PokemonList from '../api/PokemonList';
function App() {
  const [pokemon,setPokemon] = useState([])
  return (
    <div className="App">
            <div className="Container">
              <div id="title">Pokedex</div>
              <div id="main">
              <div> Main Area : default search </div>
              <PokemonList/>
              </div>
              <div id="sidebar">Sidebar</div>
              <div id="content1">Container1 </div>
              <div id="content2">Container2 </div>
              <div id="content3">Container3 </div>
            <div id="footer">Footer</div>
          </div>
    </div>
  );
}

export default App;
