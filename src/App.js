import React, {useState, useEffect} from 'react';
import { getPokemonList, getPokemonDetails } from './api';
import PokemonList from './components/PokemonList';
import SearchBar from './components/SearchBar';
import './styles/App.css';

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemon, setFilterPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async() => {
      setLoading(true);
      const data = await getPokemonList();
      setPokemonList(data);
      setFilterPokemon(data);
      setLoading(false);
    }
    fetchPokemon();
  },[]);


  const handleSearch = (query) => {
    const filtered = pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(query.toLowerCase()));
    setFilterPokemon(filtered);
  }


return (
  <div className='app'>
    <h1>Pokedex</h1>
    <div className='pokedex-screen'>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <p>Loading ... </p>
      ) : (
        <PokemonList pokemonList={filteredPokemon} />
      )}
    </div>
    <div className='pokedex-controls'>
      <button className='pokedex-button'></button>
      <button className='pokedex-button'></button>
    </div>
    <div className='pokedex-lights'>
      <div className='pokedex-light red'></div>
      <div className='pokedex-light green'></div>
      <div className='pokedex-light yellow'></div>
    </div>
  </div>
  )
};

export default App;