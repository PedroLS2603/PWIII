import React from 'react'
import './ArtistaAlbuns.css';
import '../Artista/Artista.css';
import { NavLink } from 'react-router-dom';
import CardAlbum from '../../components/CardAlbum';

export default function ArtistaAlbuns(){
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
            <div className="NavMenu">
                    <NavLink to="/artista" className="NavArtista">Tops</NavLink>
                    <NavLink to="/albuns" className="NavArtista">Albuns</NavLink>
            </div>
            <div className="albuns">
                <div className="content">
                    <CardAlbum/>
                    <CardAlbum/>
                    <CardAlbum/>
                    <CardAlbum/>   
                </div>
            </div>
        </div>
    );
}
