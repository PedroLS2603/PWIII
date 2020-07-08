import React from 'react';
import './CardArtista.css';
import { NavLink } from 'react-router-dom'
export default function CardArtista(props){
    return(
        <div className='CardArtista'>
            <div className="wrapper1">
                <img src={props.bla.pic_medium} className="imagem1"></img>
                <NavLink to={`/artista/${props.bla.name}`}  className="texto-artista">{props.bla.name}</NavLink>
            </div>
        </div>
    )   
}