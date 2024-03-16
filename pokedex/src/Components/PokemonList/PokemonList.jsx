
import axios from "axios"
import { useEffect, useState } from "react"
import './PokemonList.css'
import Pokemon from "../Pokemon/Pokemon";

const PokemonList = () => {
    let pokemon;
    const [isLoading, setIsLoading] = useState(true);
    const [pokemonList, setPokemonList] = useState([]);
    const POKEDEX_API = 'https://pokeapi.co/api/v2/pokemon'

    const downloadData = async () => {
        const res = await axios.get(POKEDEX_API);
        const pokemonResults = res.data.results;

        const pokemonData = pokemonResults.map((p) => axios.get(p.url));
        const pokemonDataResults = await axios.all(pokemonData)

        const neededPokemonData = pokemonDataResults.map((p) => {
            pokemon = p.data
            return {
                name: pokemon.name,
                image: (pokemon.sprites.others ? pokemon.sprites.others.front_default : pokemon.sprites.front_shiny),
                types: pokemon.types,
                id: pokemon.id
            }
        })
        console.log(neededPokemonData);
        setPokemonList(neededPokemonData)
        setIsLoading(false);
    }

    useEffect(() => {
        downloadData()
    }, [])


    return (
        <>
            <div className="pokemon-list-wrapper" >
                <p>PokemonList</p>
                {isLoading ? "Loading....." :

                    <div className="pokemon" >
                        {pokemonList.map((p) => (
                            <Pokemon name={p.name} image={p.image} key={p.id} />
                        ))}

                    </div>

                }
            </div>
        </>
    )
}

export default PokemonList