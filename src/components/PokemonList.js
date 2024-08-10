import React from 'react';
import PokemonCard from './PokemonCard';
import './../styles/PokemonList.css';

const PokemonList = ({ pokemonList }) => {
    return (
        <div className="pokemon-list">
            {pokemonList.map((pokemon) => (
                <PokemonCard key={pokemon.name} name={pokemon.name} />
            ))}
        </div>
    )
}

export default PokemonList;