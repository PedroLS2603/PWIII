import React from 'react';
import './App.css';
import Header from "./components/Header"
import Subheader from "./components/Subheader"
import Card from "./components/Card"
import Endbar from "./components/Endbar"


function App() {
  return (
    <div className="App"> 
      <Header/>
      <Subheader/>
      <div className="content">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <div className="content">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Endbar/>
    </div>
  );
}

export default App;
