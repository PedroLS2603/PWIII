import React, {useEffect, useState} from 'react';
import axios from 'axios'
import './Lancamentos.css';
import CardLancamento from '../../components/CardLancamento';


export default function Lancamentos(){

    const [lancamentos, setLancamentos] = useState([])
    useEffect(function(){load()},[])

    async function load(){
        try {
            const resposta = await axios.get("https://api.vagalume.com.br/hotspots.php?apikey=49b2dd052cbdc055fa7c45b4f590c5ea")
            setLancamentos(resposta.data.hotspots)
            console.log(resposta.data.hotspots)
        }
        catch(erro){
            console.log(erro)
        }
    }


    return(
    <div>
        <div className="content">
            {lancamentos.map(
                function (lancamento){
                    return <CardLancamento bla = {lancamento}/>               
                }
            )}
        </div>
    </div>
    );
}
