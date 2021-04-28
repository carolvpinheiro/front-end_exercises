import React from 'react';
// import PropTypes from 'prop-types';

function Pokemon(props) {
  return (
    <section>
      <p>Name: {props.pokemon.name}</p>
      <p>Type: {props.pokemon.type}</p>
      <p>Average Weight: {props.pokemon.averageWeight.value} {props.pokemon.averageWeight.measurementUnit}</p>
      <div>Image: <img width="100" src={props.pokemon.image} alt={`foto ${props.pokemon.name}`}/></div><br/>
    </section>
  );
};

export default Pokemon
