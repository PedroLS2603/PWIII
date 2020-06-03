import React from 'react';
import './Card.css';
export default function Card(){
    return(
        <div className='Card'>
            <div className="wrapper">
                <a className="card-musica" href="#">Shape of you</a>
                <br></br>
                <a className="card-artista" href="#">Ed sheeran</a>
            </div>
        </div>
    )   
}