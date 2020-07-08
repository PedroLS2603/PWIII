import React from 'react'
import './Header.css'

export default function Header(props){
    return(
        <div className="Header">
            <img src="logo.png"></img>
            <form action="">
                <input type="text" name="search" id="search" className="busca" placeholder="Música, artista..."></input>
                <button type="submit"className="search-icon">search</button>
            </form>
        </div>
    )
}