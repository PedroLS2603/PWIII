import React, {useEffect, useState, Fragment} from 'react';
import axios from 'axios'
import './Top10.css';
import CardArtista from '../../components/CardArtista';


export default function Top10(){

    const [top100, setTop100] = useState([])
    useEffect(function(){load()},[])

    async function load(){
        try {    
            const resposta = await axios.get("https://api.vagalume.com.br/rank.php?type=art&period=month&scope=all&limit=10&apikey=49b2dd052cbdc055fa7c45b4f590c5ea")
            setTop100(resposta.data.art.month.all)
            console.log(resposta.data.art.month.all)
            }

        catch(erro){
            console.log(erro)
        }
    }
    return(
        <div className="content1">
            {top100.map((artista)=>{return <CardArtista bla = {artista}/>})}
        </div>  
    );  
}
