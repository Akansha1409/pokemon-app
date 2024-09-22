import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonCard = ({ name, url }) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await axios.get(url);
        setPokemonDetails(response.data);
      } catch (error) {
        console.error('Error fetching Pokémon details:', error);
      }
    };
    fetchPokemonDetails();
  }, [url]);

  return (
    pokemonDetails && (
      <div className="pokemon-card">
        <img src={pokemonDetails.sprites.front_default} alt={name} />
        <h3>{name}</h3>
      </div>
    )
  );
};

export default PokemonCard;
