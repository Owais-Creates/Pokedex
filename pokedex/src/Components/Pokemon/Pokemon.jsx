import React from 'react'
import './Pokemon.css'

const Pokemon = ({ name, image }) => {
    return (
        <>

            <div className='pokemon-card-container' >
                <div className='pokemon-card' >
                    <div className='pokemon-name' >{name}</div>
                    <div>
                        <img className='pokemon-img' src={image} alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Pokemon