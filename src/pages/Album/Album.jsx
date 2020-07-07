import React from 'react'
import './Album.css' 
import { NavLink } from 'react-router-dom'


export default function Album(){
    return(
        <div>
            <div className="CapaNomeInfo">
                <img className="CapaAlbum" src="https://upload.wikimedia.org/wikipedia/pt/thumb/d/d3/Ed_Sheeran_-_Divide.png/220px-Ed_Sheeran_-_Divide.png"></img>
                <div className="NomeInfo">
                    <text className="Nome">÷</text>
                    <div className="Info">
                        <text>Asylum Records UK</text>
                        <text>2017</text>
                    </div>
                </div>
            </div>
            <div className="AlbumContent">
                    <div className="AlbumMusica">
                        <div className="material-icons">album</div>
                        <NavLink to="/musica" className="textMusica">1. Eraser</NavLink>
                    </div>
                    <div className="AlbumMusica">
                        <div className="material-icons">album</div>
                        <NavLink to="/musica" className="textMusica">2. Castle on the hill</NavLink>
                    </div>
                    <div className="AlbumMusica">    
                        <div className="material-icons">album</div>
                        <NavLink to="/musica" className="textMusica">3. Dive</NavLink>
                    </div>
                    <div className="AlbumMusica">
                        <div className="material-icons">album</div>
                        <NavLink to="/musica" className="textMusica">4. Shape of You</NavLink>
                    </div>
                    <div className="AlbumMusica">
                        <div className="material-icons">album</div>
                        <NavLink to="/musica" className="textMusica">5. Perfect</NavLink>
                    </div>
                    <div className="AlbumMusica">
                        <div className="material-icons">album</div>
                        <NavLink to="/musica" className="textMusica">6. Galway Girl</NavLink>
                    </div>
                    <div className="AlbumMusica">
                        <div className="material-icons">album</div>
                        <NavLink to="/musica" className="textMusica">7. Happier</NavLink>
                    </div>
                    <div className="AlbumMusica">    
                        <div className="material-icons">album</div>
                        <NavLink to="/musica" className="textMusica">8. New Man</NavLink>
                    </div>
                    <div className="AlbumMusica">
                        <div className="material-icons">album</div>
                        <NavLink to="/musica" className="textMusica">9. Hearts don't break around here</NavLink>
                    </div>
                    <div className="AlbumMusica">
                        <div className="material-icons">album</div>
                        <NavLink to="/musica" className="textMusica">10. What Do I Know?</NavLink>
                    </div>
                    <div className="AlbumMusica">
                        <div className="material-icons">album</div>
                        <NavLink to="/musica" className="textMusica">11. How Would I Feel</NavLink>
                    </div>
                    <div className="AlbumMusica">
                        <div className="material-icons">album</div>
                        <NavLink to="/musica" className="textMusica">12. Supermarket Flowers</NavLink>
                    </div>
                    <div className="AlbumMusica">    
                        <div className="material-icons">album</div>
                        <NavLink to="/musica" className="textMusica">13. Barcelona</NavLink>
                    </div>
                    <div className="AlbumMusica">
                        <div className="material-icons">album</div>
                        <NavLink to="/musica" className="textMusica">14. Bibia Be Ye Ye</NavLink>
                    </div>
                    <div className="AlbumMusica">
                        <div className="material-icons">album</div>
                        <NavLink to="/musica" className="textMusica">15. Nancy Mulligan</NavLink>
                    </div>
                    <div className="AlbumMusica">
                        <div className="material-icons">album</div>
                        <NavLink to="/musica" className="textMusica">16. Save Myself</NavLink>
                    </div>
                </div>
        </div>
    );
}