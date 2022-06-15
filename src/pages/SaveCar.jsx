import './saveCar.css';
import React, { useState } from "react";
import { api } from "../services/api";
import Container from "../components/Container";


function SaveCar() {
    const [marca, setMarca] = useState('')
    const [modelo, setModelo] = useState('')
    const [ano, setAno] = useState(0)
    const [kmRodado, setKmRodado] = useState(0)
    const [cor, setCor] = useState('')

    async function handleSubmit() {
        const data = {
            marca: marca,
            modelo: modelo,
            ano: ano,
            kilometragem: kmRodado,
            cor: cor
        }
        console.log(data)

        if(marca !== '' && modelo !== '' && ano !== '' && kmRodado !== '' && cor){
            await api.post('/carros', data).then(() => {
               console.log(data)
               window.location.href='/home'
            }).catch(() => alert('Erro ao cadastrar novo carro!'))
        }else{
            alert('Por favor, preencha todos os campos!')
        }
    }

    return (
        <Container>
            <h1 className="title_register">Cadastre um novo carro</h1>
            <form action="" method="POST" className="form_container">
                <div className="div_form">
                    <label>Marca</label>
                    <input 
                    name="marca" 
                    type="text" 
                    value={marca}
                    onChange={e => setMarca(e.target.value)}
                    />
                </div>
                <div className="div_form">
                    <label>Modelo</label>
                    <input 
                    name="modelo" 
                    type="text"
                    value={modelo}
                    onChange={e => setModelo(e.target.value)}
                    />
                </div>
                <div className="div_form">
                    <label>Ano</label>
                    <input 
                    name="ano" 
                    type="text"
                    value={ano}
                    onChange={e => setAno(e.target.value)}
                    />
                </div>
                <div className="div_form">
                    <label>KM Rodados</label>
                    <input 
                    name="quilometragem" 
                    type="text"
                    value={kmRodado}
                    onChange={e => setKmRodado(e.target.value)}
                    />
                </div>
                <div className="div_form">
                    <label>Cor</label>
                    <input 
                    name="cor" 
                    type="text"
                    value={cor}
                    onChange={e => setCor(e.target.value)}
                    />
                </div>
                <button 
                type="button" 
                className="bt_register"
                onClick={handleSubmit}>
                    Cadastrar</button>
            </form>
        </Container>
    )
}

export default SaveCar;