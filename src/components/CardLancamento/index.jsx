import React from 'react';
import './CardLancamento.css';
import { NavLink } from 'react-router-dom'

export default function CardLancamento(props){
    return(
        <div className='CardLancamento'>
                <img src={props.bla.pic_src} className="imagem"></img>
            <div className="wrapper">
                <NavLink to="/artista  " className="card-artista" href="#">{props.bla.title}</NavLink>
                <NavLink to="/musica" className="card-descricao" href="#">{props.bla.descr}</NavLink>
            </div>
        </div>
    )   
}