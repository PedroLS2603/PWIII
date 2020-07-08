import React, {useEffect, useState} from 'react';
import axios from 'axios'
import './Busca.css';
import CardBusca from '../../components/CardBusca';


export default function Busca(props){

    const [artistas, setArtistas] = useState([])
    const apiURL = "https://api.vagalume.com.br/search.artmus"+props.location.q

    useEffect(function(){load()},[props.location.q])
    
    async function load(){
        try {    
            const resposta = await axios.get(apiURL)
            setArtistas(resposta.docs)
            console.log(resposta.docs)
            }

        catch(erro){
            console.log(erro)
        }
    
    }

    return(
        <div className="content2">
            {artistas.map((artista)=>{return <CardBusca bla = {artista}/>})}
        </div>  
    );  
}
