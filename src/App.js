import React from 'react';
import './App.css';
import Header from "./components/Header";
import Subheader from "./components/Subheader";
import Endbar from "./components/Endbar";
import Lancamentos from "./pages/Lancamentos/Lancamentos"
import Artistas from "./pages/Artistas/Artistas"

function App() {
  return (
    <div className="App"> 
      <Header/>
      <Subheader/>
      <Artistas/>  
      <Endbar/>
    </div>
  );
}

export default App;
