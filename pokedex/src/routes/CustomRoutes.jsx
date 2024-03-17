import { Routes, Route } from "react-router-dom"
import Pokedex from "../Components/Pokedex/Pokedex"
import PokeDetails from "../Components/PokemonDetails/PokeDetails"

const CustomRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Pokedex />} />
                <Route path={"/pokemon/:id"} element={<PokeDetails />} />
            </Routes>
        </>

    )
}

export default CustomRoutes