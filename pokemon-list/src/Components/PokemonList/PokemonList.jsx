import { useState } from "react";
import pokemonJSON from "../../data/pokemon.json";
import "./PokemonList.css";
import PokemonItem from "../PokemonItem/PokemonItem";

function PokemonList() {
  const [pokemons] = useState(pokemonJSON);
  const [filterPokemons, setFilterPokemons] = useState(pokemonJSON);

  const handleSearch = (e) => {
    let search = pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(e.target.value);
    });

    setFilterPokemons(search);
  };

  return (
    <>
      <input
        type="text"
        placeholder="cari pokemon..."
        className="search"
        onChange={handleSearch}
      />

      {/* list pokemon */}
      <div className="list-pokemon">
        {filterPokemons.length == 0 ? (
          <div>data tidak ditemukan</div>
        ) : (
          filterPokemons.map((item) => (
            <PokemonItem key={item.id} pokemon={item} />
          ))
        )}
      </div>
    </>
  );
}

export default PokemonList;
