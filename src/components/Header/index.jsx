import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'
import './Header.css'



function Header(props){
    
    const [search, setSearch] = useState("");

    function handleSearch(e){
        console.log(e.target.value)
        setSearch(e.target.value)
    }
    
    function buscar(e){
        e.preventDefault()
        props.history.push("/busca?q="+search)
    }

    return(
        <div className="Header">
            <img src="logo.png"></img>
            <form onSubmit={buscar}>
                <input type="text" name="q" id="q" className="busca" placeholder="Música, artista..." onChange={handleSearch}></input>
                <button type="submit"className="search-icon">search</button>
            </form>
        </div>
    )
}

export default withRouter(Header)