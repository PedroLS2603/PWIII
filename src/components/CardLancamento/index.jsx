import React from 'react';
import './CardLancamento.css';
import { NavLink } from 'react-router-dom'

export default function CardLancamento(){
    return(
        <div className='CardLancamento'>
            <div className="wrapper">
                <NavLink to="/musica" className="card-musica" href="#">Shape of you</NavLink>
                <br></br>
                <NavLink to="/artista" className="card-artista" href="#">Ed sheeran</NavLink>
            </div>
        </div>
    )   
}