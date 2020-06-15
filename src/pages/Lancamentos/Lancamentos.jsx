import React from 'react';
import Card from "../../components/Card"
import './Lancamentos.css';
import CardLancamento from '../../components/Card';


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
