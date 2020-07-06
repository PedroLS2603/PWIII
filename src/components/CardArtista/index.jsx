import React from 'react';
import './CardArtista.css';
import { NavLink } from 'react-router-dom'
export default function CardArtista(){
    return(
        <div className='CardArtista'>
            <div className="wrapper">
                <NavLink to="/artista" className="texto-artista">Ed sheeran</NavLink>
            </div>
        </div>
    )   
}