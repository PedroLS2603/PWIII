
import React from 'react';
import './App.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from "./components/Header";
import Subheader from "./components/Subheader";
import Endbar from "./components/Endbar";
import Lancamentos from "./pages/Lancamentos/Lancamentos"
import Artistas from "./pages/Artistas/Artistas"
import Artista from './pages/Artista/Artista';
import ArtistaAlbuns from './pages/ArtistaAlbuns/ArtistaAlbuns';

function App() {
  return (
    <div className="App"> 
      <Header/>
      <BrowserRouter>
        <Subheader/>
        <Switch>
          <Route exact path="/" component={Lancamentos}/>
          <Route path="/lancamentos" component={Lancamentos}/>
          <Route path="/artistas" component={Artistas}/>
          <Route path="/artista/" component={Artista}/>
          <Route path="/albuns" component={ArtistaAlbuns}/>
        </Switch>
      </BrowserRouter>
      <Endbar/>
    </div>
  );
}

export default App;
