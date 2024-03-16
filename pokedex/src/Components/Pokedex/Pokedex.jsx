import Pokemon from "../Pokemon/Pokemon";
import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";
import './Pokedex.css'

const Pokedex = () => {
    return (
        <>
            <div className="pokdex-wrapper" >
                <h1>Pokedex</h1>
                <Search />
                <PokemonList />
                <Pokemon />
            </div>
        </>
    )
}

export default Pokedex