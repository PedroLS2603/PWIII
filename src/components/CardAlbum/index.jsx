import React from 'react';
import './CardAlbum.css';
import { NavLink } from 'react-router-dom'
export default function CardAlbum(){
    return(
        <div className='CardAlbum'>
            <div className="wrapper">
                <NavLink to="/album" className="texto-album">Divide</NavLink>
            </div>
        </div>
    )   
}