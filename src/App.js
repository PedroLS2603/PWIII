
import React from 'react';
import './App.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from "./components/Header";
import Subheader from "./components/Subheader";
import Endbar from "./components/Endbar";
import Lancamentos from "./pages/Lancamentos/Lancamentos"
import Artista from './pages/Artista/Artista';
import ArtistaAlbuns from './pages/ArtistaAlbuns/ArtistaAlbuns';
import Musica from './pages/Musica/Musica';
import Album from './pages/Album/Album';
import Top10 from './pages/Top10/Top10';
import Busca from './pages/Busca/Busca';

function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
      <Header/>
        <Subheader/>
        <Switch>
          <Route exact path="/" component={Lancamentos}/>
          <Route path="/lancamentos" component={Lancamentos}/>
          <Route path="/top10" component={Top10}/>
          <Route path="/artista" component={Artista}/>
          <Route path="/albuns" component={ArtistaAlbuns}/>
          <Route path="/musica" component={Musica}/>
          <Route path="/album" component={Album}/>
          <Route path="/busca" component={Busca}/>
        </Switch>
      </BrowserRouter>
      <Endbar/>
    </div>
  );
}

export default App;
