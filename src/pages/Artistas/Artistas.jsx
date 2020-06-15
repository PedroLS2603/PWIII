import React from 'react';
import Card from "../../components/CardArtista"
import './Artistas.css';
import CardArtista from '../../components/CardArtista';


export default function Artistas(){
    return(
    <div>
        <div className="content">
            <CardArtista/>
            <CardArtista/>
            <CardArtista/>
            <CardArtista/>
        </div>
        <div className="content">
            <CardArtista/>
            <CardArtista/>
            <CardArtista/>
            <CardArtista/>
        </div>
    </div>
    );
}
