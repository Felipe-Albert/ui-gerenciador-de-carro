import './listCar.css';
import React from "react";
import { useEffect, useState } from "react";
import Container from "../components/Container";
import { api } from "../services/api";


function ListCar() {
  const [cars, setCars] = useState([])

  useEffect(() => {
    api.get('/carros')
      .then(response => {
        setCars(response.data || [])
      .catch(error => console.error(error))
      })
  }, []);
    
  return (
    <Container>
      <h1 className="list_title">Pesquise seu carro</h1>
      <form id="list_car" action="" method="GET" className="form_listCar">
        <input className="search_bar" type="text" placeholder="pesquise por marca ou modelo" />
        <button form="list_car" className="btn_listCar" type="submit" name="" value="">Buscar</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Ano</th>
            <th>Km</th>
            <th>Cor</th>
          </tr>
        </thead>
        <tbody>
          {cars.map(car => {
            return (
              <tr key={car.id}>
                <td>{car.marca}</td>
                <td>{car.modelo}</td>
                <td>{car.ano}</td>
                <td>{car.km_rodado}</td>
                <td>{car.cor}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Container>
  )
}

export default ListCar;