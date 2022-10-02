import React from 'react'

import '../Styles/Teclado.css'

const arrayNumberCandidate = [];
var stringNumberCandidato = "";

const Teclado = (props) => {   
    function cleanFields() {       
        while (arrayNumberCandidate.length) {
            arrayNumberCandidate.pop()
        }
        props.setNumberCandidate('')
    }
    function clicou(n) {
        const maxSize = props.thisStep === 0 ? 5 : 3
        arrayNumberCandidate.push(n);
        stringNumberCandidato = "";       
        if (arrayNumberCandidate.length <= maxSize) {
            for (let i = 0; i < arrayNumberCandidate.length; i++) {
                const element = arrayNumberCandidate[i];
                stringNumberCandidato += element + ";";
            }
            stringNumberCandidato = stringNumberCandidato.substring(0, stringNumberCandidato.length - 1);    
            props.setNumberCandidate(stringNumberCandidato);
        }
    }
    function confirma() {
        if (props.thisStep < 3){
            let mudarEtapa = props.thisStep + 1
            props.setThisStep(mudarEtapa)
            cleanFields()
        }else if (props.thisStep === 2){
            props.setThisStep(0)
            cleanFields()
        }
    }
    function corrige() {
        cleanFields()
    }
    function branco() {

    }
    
    

    return(
        <div className="teclado">
            <div className="num">
                <div>
                    <button className="botao" onClick={() =>clicou(1)}>1</button>
                    <button className="botao" onClick={() =>clicou(2)}>2</button>  
                    <button className="botao" onClick={() =>clicou(3)}>3</button>  
                </div>
                <div>
                    <button className="botao" onClick={() =>clicou(4)}>4</button>  
                    <button className="botao" onClick={() =>clicou(5)}>5</button>  
                    <button className="botao" onClick={() =>clicou(6)}>6</button>  
                </div>
                <div>
                    <button className="botao" onClick={() =>clicou(7)}>7</button>
                    <button className="botao" onClick={() =>clicou(8)}>8</button>
                    <button className="botao" onClick={() =>clicou(9)}>9</button>
                </div>
                <div>
                    <button className="botao" onClick={() =>clicou(0)}>0</button>
                </div>
            </div>
            <div>
                    <button className="botao branco" onClick={() =>branco()}>BRANCO</button>
                    <button className="botao corrige" onClick={() =>corrige()}>CORRIGE</button> 
                    <button className="botao confirma" onClick={() => confirma()}>CONFIRMA</button>  
            </div>
            
        </div>

        
        
    )
}

export default Teclado