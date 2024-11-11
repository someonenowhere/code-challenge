import './list.css';

interface ListProps { pokemons: { name: string }[]; removePokemon: (name: string) => void }

export const List: React.FC<ListProps> = ({ pokemons, removePokemon }) => {
  return (
    <div className='list'>
      {pokemons.map((pokemon, index) => (
        <li key={index}>
          {pokemon.name}
          <button onClick={() => removePokemon(pokemon.name)}>Remove</button>
        </li>
      ))}
    </div>);
};