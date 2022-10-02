
import { React, useState, useEffect } from "react";

import '../Styles/Tela.css'
import { dados } from "./dados";

import Teclado from "./Teclado";

export default function Tela() {  

    const [thisStep, setThisStep] = useState(0);
    const [registration, setRegistration] = useState({});    
    const [candidato, setCandidate] = useState({});
    const [numberCandidate, setNumberCandidate] = useState("");    
    
    function Numero() {
        const inputNumbers = [];
        
        const arrayy = numberCandidate.split(";");
        
        for (let i = 0; i < registration.numeros; i++) {                                   
            inputNumbers.push(<input key={i} type="number" className="numeros" defaultValue={arrayy[i]} />);
        }                
        return inputNumbers;
    }
    useEffect(() => {
        setRegistration(dados[thisStep]);
    }, [thisStep]);

    useEffect(() => {          
        
        const numText = numberCandidate.replaceAll(";", "");
    
        const candidatos = registration.candidatos;
        if (candidatos) {                     
            const candidato = candidatos.filter(candidato => candidato.number === numText);
            setCandidate(candidato[0]);       
        }  
    }, [numberCandidate]);



    return(
        <div className="principal">
            <div className="tela">
                <div className="voto">
                    <div className="esquerda">
                        <div className="e-1">
                            <span>{registration.legenda}</span>
                        </div>
                        <div className="e-2">
                            <span>{registration.titulo}</span>
                        </div>
                        <span className="fim">{registration.finaliza}</span>
                        <div className="e-3">
                            <Numero/>                            
                        </div>
                        <div className="e-4">
                            <span>{candidato && candidato.nome}</span> <br />
                            <span>{candidato && candidato.partido} </span> <br />
                            <span> {candidato && candidato.nomeVice}</span> <br />
                        </div>
                    </div>
                    <div className="direita">
                        <div className="avatar">
                            <img src={candidato && candidato.foto} alt="" />
                            <span>{candidato && candidato.legenda}</span>
                        </div>
                        <div className="avatar v">
                            <img src={candidato && candidato.foto2}alt="" />
                            <span>{candidato && candidato.legenda2}</span>
                        </div>
                    </div>
                </div>
                {thisStep!==3 && 
                <div className="instrucao">
                    <div className="linha"/>
                    <span>Como proceder? :</span><br />
                    <span>Pressione VERDE para CONFIRMAR</span><br/>
                    <span>Pressione LARANJA para CORRIGIR</span><br />
                    <span>Pressione BRANCO para votar em BRANCO</span><br />
                </div>
                }
            </div>
            <Teclado
                thisStep={thisStep}
                setThisStep={setThisStep}
                setNumberCandidate={setNumberCandidate} 

                
            />
        </div>
    )
}