import React from 'react';
import './CardBusca.css';
import { NavLink } from 'react-router-dom'
export default function CardBusca(props){
    return(
        <div className='CardBusca'>
            <div className="wrapper2">
                <img src={props.bla.pic_medium} className="imagem2"></img>
                <NavLink to={`/artista/${props.bla.name}`}  className="texto-artista">{props.bla.band}</NavLink>
            </div>
        </div>
    )   
}