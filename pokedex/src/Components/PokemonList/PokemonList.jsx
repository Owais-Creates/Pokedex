
import axios from "axios"
import { useEffect, useState } from "react"
import './PokemonList.css'
import Pokemon from "../Pokemon/Pokemon";

const PokemonList = () => {
    let pokemon;
    const [isLoading, setIsLoading] = useState(true);
    const [pokemonList, setPokemonList] = useState([]);
    const [nextUrl, setNextUrl] = useState("")
    const [prevUrl, setPrevUrl] = useState("")
    const [pokedexUrl, setPokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon')

    const downloadData = async () => {

        const res = await axios.get(pokedexUrl);
        const pokemonResults = res.data.results;
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);

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
        setPokemonList(neededPokemonData)
        setIsLoading(false);
    }

    useEffect(() => {
        downloadData()
    }, [pokedexUrl])


    return (
        <>
            <div className="pokemon-list-wrapper" >
                <h1>Pokemon List</h1>
                {isLoading ? "Loading....." :

                    <div className="pokemon-card-wrapper" >
                        {pokemonList.map((p) => (
                            <Pokemon name={p.name} type={p.types} image={p.image} key={p.id} id={p.id} />
                        ))}

                    </div>

                }
            </div>

            <div className="controls" >
                <button disabled={prevUrl == null} onClick={() => setPokedexUrl(prevUrl)} >PREVIOUS</button>
                <button disabled={nextUrl == null} onClick={() => setPokedexUrl(nextUrl)} >NEXT</button>
            </div>
        </>
    )
}

export default PokemonList