import React from 'react'
import './Subheader.css'
import { NavLink } from 'react-router-dom'


export default function Subheader(props){
    return(
        <div className="Subheader">
            <NavLink to="/lancamentos" className="nav-link">Hotspot</NavLink>
            <NavLink to="/top10" className="nav-link">Top 10</NavLink>
        </div>
    )
}