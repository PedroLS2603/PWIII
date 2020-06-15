import React from 'react'
import './Subheader.css'
import { NavLink } from 'react-router-dom'


export default function Subheader(props){
    return(
        <div className="Subheader">
            <NavLink to="/lancamentos" className="nav-link">Lançamentos</NavLink>
            <NavLink to="/artistas" className="nav-link">Artistas</NavLink>
        </div>
    )
}