import React from 'react';
import Pokemon from './Pokemon';

function Pokedex(props) {
  return (
    <div>
       {props.pokemons.map((pokemon, index) => <Pokemon key={index} pokemon={pokemon} />)} 
    </div>
  );
};

export default Pokedex