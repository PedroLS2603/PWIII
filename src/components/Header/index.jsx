import React from 'react'
import './Header.css'

export default function Header(props){
    return(
        <div className="Header">
            <a href="/"><img src="logo.png"></img></a>
            <input type="text" name="search" id="search" className="busca" placeholder="Música, artista, gênero..."></input>
            <span class="search-icon">search</span>
        </div>
    )
}