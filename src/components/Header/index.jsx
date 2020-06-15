import React from 'react'
import './Header.css'

export default function Header(props){
    return(
        <div className="Header">
            <div className="Logo"><a href="/"><img src="logo.png"></img></a></div>
            <input type="text" name="search" id="search" className="busca" placeholder="Música, artista, gênero..."></input>
        </div>
    )
}