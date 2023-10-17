/*
Using the data.json you will create a list of pokemons.
We've created the necessary components for you, now it's
up to you to pass the props properly (😅) to these
components. Begin with the Pokemon's names, and continue on
with their types. Don't forget the key! Read more here:
https://reactjs.org/docs/lists-and-keys.html
*/

/*Extra!
Feel free to create more components, such as header/footer,
or why not include some more data from the array? */
import data from './data.json';
import { Pokemon } from './components/Pokemon'

export const App = () => {
  const pokemons = data.pokemons
  const renderPokemons = () => { 
  return  pokemons.map(
      ({id, name, height, weight, types, weaknesses, category}) => {
        return (
          <Pokemon key={id} name={name} height={height} weight={weight} types={types} weaknesses={weaknesses} category={category}  />
        )
      }
    );
   
  }
  const renderContent = renderPokemons()
  return (
    <div className="App">
      <p>Pokemon padre goes here Este es como el body en HTML</p>
      <section>{renderContent}</section>
    </div>
  );
};
