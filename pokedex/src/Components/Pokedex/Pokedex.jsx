import { Link } from "react-router-dom";
import Pokemon from "../Pokemon/Pokemon";
import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";
import './Pokedex.css'
import CustomRoutes from "../../routes/CustomRoutes";

const Pokedex = () => {
    return (
        <>
            <div className="pokdex-wrapper" >
                <Search />
                <PokemonList />
                <Pokemon />
            </div>
        </>
    )
}

export default Pokedex