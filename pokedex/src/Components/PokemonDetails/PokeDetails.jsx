import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PokemonDetails.css'

const PokeDetails = () => {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState({});

  const downloadPokemonDetails = async () => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

    setPokemon({
      pokemonname: res.data.name,
      image: res.data.sprites.other.dream_world.front_default,
      weight: res.data.weight,
      height: res.data.height,
      types: res.data.types.map((t) => t.type.name)
    });
  };

  useEffect(() => {
    downloadPokemonDetails();
  }, []);

  return (
    <>

      <div className='pokemon-details-cards-container' >

        <div className=' p-common name pokemon-details-name' >
          {pokemon.pokemonname}
        </div>

        <div>
          <img className=' p-common pokemon-details-img' src={pokemon.image} alt="" />
        </div>

        <div className=' p-common pokemon-details-weight' >
          {pokemon.weight} KG
        </div>

        <div className=' p-common pokemon-details-height' >
          {pokemon.height} ft.
        </div>

        <div className=' p-common pokemon-details-types' >
          TYPE : {pokemon.types && pokemon.types.map((t) => <div key={t}>{t}</div>)}
        </div>

      </div>
    </>
  )
}
export default PokeDetails;
