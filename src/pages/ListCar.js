import React from "react";
import Container from "../components/Container";

function ListCar() {
    return (
        <Container>
            <form>
                <h1>Pesquise seu carro</h1>
                <div>
                    <input type="text" placeholder="pesquise por marca ou modelo" />
                    <select name="ano_fabricacao">
                        <option value="Selecione o ano" selected>ano de fabricação</option>
                        <option value="2022" >2022</option>
                        <option value="2021" >2021</option>
                        <option value="2020" >2020</option>
                        <option value="2019" >2019</option>
                        <option value="2018" >2018</option>
                        <option value="2017" >2017</option>
                        <option value="2016" >2016</option>
                        <option value="2015" >2015</option>
                        <option value="2014" >2014</option>
                        <option value="2013" >2013</option>
                        <option value="2012" >2012</option>
                        <option value="2011" >2011</option>
                        <option value="2010" >2010</option>
                        <option value="2010" >2009</option>
                    </select>
                    <input type="submit" value="Buscar" />
                    
                </div>
            </form>
        </Container>
    )
}

export default ListCar;