import React from 'react';
import './Lancamentos.css';
import CardLancamento from '../../components/CardLancamento';


export default function Lancamentos(){
    return(
    <div>
        <div className="content">
            <CardLancamento/>
            <CardLancamento/>
            <CardLancamento/>
            <CardLancamento/>
        </div>
        <div className="content">
            <CardLancamento/>
            <CardLancamento/>
            <CardLancamento/>
            <CardLancamento/>
        </div>
    </div>
    );
}
