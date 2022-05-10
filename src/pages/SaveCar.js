import React from "react";
import Container from "../components/Container";

function SaveCar() {
    return (
        <Container>
            <form className="form_container">
                <h1 className="title_register">Cadastre um novo carro</h1>
                <div className="div_form">
                    <label>Marca</label>
                    <input name="marca" type="text" />
                </div>
                <div className="div_form">
                    <label>Modelo</label>
                    <input name="modelo" type="text" />
                </div>
                <div className="div_form">
                    <label>Ano</label>
                    <input name="ano" type="text" />
                </div>
                <div className="div_form">
                    <label>KM Rodados</label>
                    <input name="quilometragem" type="text" />
                </div>
                <div className="div_form">
                    <label>Cor</label>
                    <input name="cor" type="text" />
                </div>
                <button type="submit" className="bt_register">Cadastrar</button>
            </form>
        </Container>
    )
}

export default SaveCar;