import Search from "../Search/Search";
import './Pokedex.css'

const Pokedex = () => {
    return (
        <>
            <div className="pokdex-wrapper" >
                <h1>Pokedex</h1>
                <Search />
            </div>
        </>
    )
}

export default Pokedex