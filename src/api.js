import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2';

export const getPokemonList = async (limit = 151) => {
    const response = await axios.get(`${API_URL}/pokemon?limit=${limit}`);
    return response.data.results;
};

export const getPokemonDetails = async (name) => {
    const response = await axios.get(`${API_URL}/pokemon/${name}`);
    return response.data;
}