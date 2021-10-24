import '../components/App.css'
import { useState,useEffect } from 'react';
import PokemonList from '../api/PokemonList';
import RegionList from '../api/RegionList';
function App() {
  const [pokemon,setPokemon] = useState([])
  return (
    <div className="App">
            <div className="Container">
                <div id="title">
                  Poke Data
                </div>
              <div id="main">
                <div className="search-box"> Main Area : default search <input type="text"/></div>
                  <PokemonList/>
              </div>
              <div id="sidebar">Sidebar : region
              <RegionList/>
              </div>
              <div id="content1">Container1 </div>
              <div id="content2">Container2 </div>
              <div id="content3">Container3 </div>
            <div id="footer">Footer</div>
          </div>
    </div>
  );
}

export default App;
