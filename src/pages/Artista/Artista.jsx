import React from 'react';
import './Artista.css';
import { NavLink } from 'react-router-dom';

export default function Artista(){
    return(
        <div>
            <div className="PerfilArtista"> 
                <div className="arrow_foto_nome">
                    <span class="material-icons">arrow_back</span>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRz8xlILZNOXlrNwLWdZzq_hvIWJv58PsF6-i9lPPHe7toa4lnw&usqp=CAU" className="fotoArtista"></img>
                    <div className="nomeGenero">
                    <text className="TituloArtista">Ed Sheeran</text>
                    <div className="generos">
                        <text className="Genero">Pop/rock</text>
                        <text className="Genero">Romântico</text>
                    </div>    
                </div>
                </div>
            </div>
            <div className="tops">
                <div className="NavMenu">
                    <NavLink to="/artista" className="NavArtista">Tops</NavLink>
                    <NavLink to="/albuns" className="NavArtista">Albuns</NavLink>
                </div>
                <div className="topsContent">
                    <div className="topsMusica">
                        <div className="material-icons">album</div>
                        <NavLink to="/musica" className="textMusica">1. Shape of You</NavLink>
                    </div>
                    <div className="topsMusica">
                        <div className="material-icons">album</div>
                        <NavLink to="/musica" className="textMusica">2. Castle on the hill</NavLink>
                    </div>
                    <div className="topsMusica">    
                        <div className="material-icons">album</div>
                        <NavLink to="/musica" className="textMusica">3. Eraser</NavLink>
                    </div>
                    <div className="topsMusica">
                        <div className="material-icons">album</div>
                        <NavLink to="/musica" className="textMusica">4. Photograph</NavLink>
                    </div>
                    <div className="topsMusica">
                        <div className="material-icons">album</div>
                        <NavLink to="/musica" className="textMusica">5. The A Team</NavLink>
                    </div>
                </div>
            </div>
        </div>
        );}