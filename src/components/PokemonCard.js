import React, {useEffect, useState} from 'react';
import { getPokemonDetails } from '../api';
import './../styles/PokemonCard.css';

const PokemonCard = ({name}) => {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            const data = await getPokemonDetails(name);
            setPokemon(data);
        }

        fetchPokemon();
    }, [name]);

    return (
        pokemon && (
            <div className="pokemon-card">
                <img
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    className="pokemon-image"
                />
                <p>#{pokemon.id}</p>
                <h2>{pokemon.name.toUpperCase()}</h2>
                <p>Type: {pokemon.types.map((type) => type.type.name).join(',')}</p>
            </div>
            
        )
    )
}

export default PokemonCard;