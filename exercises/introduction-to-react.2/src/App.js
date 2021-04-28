import Pokemon from './componentes/Pokemon';
import pokemons from './data';

// const dataPokemons = data.pokemons;
// console.log(dataPokemons);

function App() {
  return (
    <div>
      {pokemons.map((pokemon) => <Pokemon pokemon={pokemon} />)}
    </div>
  );
}

export default App;
