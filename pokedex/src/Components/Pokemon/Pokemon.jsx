import React from 'react'
import './Pokemon.css'
import { Link } from "react-router-dom";


const Pokemon = ({ name, image, id }) => {
    return (
        <>

            <div className='pokemon-card-container' >
                <Link className='no-underline' to={`/pokemon/${id}`} >
                    <div className='pokemon-card' >
                        <div className='pokemon-name' >{name}</div>
                        <div>
                            <img className='pokemon-img' src={image} alt="" />
                        </div>
                    </div>
                </Link>
            </div>



        </>
    )
}

export default Pokemon