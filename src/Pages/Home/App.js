import { Link } from "react-router-dom";
import "./App.css";
import React, { useState } from 'react';
import {publicKey } from "../../Config/Key";

function App() {

  // Definindo um estado para armazenar o valor da caixa de texto
  const [valor, setValor] = useState('');

  // Função para lidar com a mudança no valor da caixa de texto
  const handleChange = (event) => {
    setValor(event.target.value); // Atualiza o estado com o valor da caixa de texto
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      <Link to ={`/details/name=${valor}&apikey=${publicKey}`}></Link>
    }
  };

  return(
    <div className="home">
      <h1 className="titulo">Marvel Characteres</h1>
      <div className="search">
        <input
          type="text"
          value={valor}
          onChange={handleChange}
          placeholder="Digite algo..."
        />
        <Link to ={`/details/name=${valor}&apikey=${publicKey}`} className="btn btn-danger">Search</Link>
    </div>

  </div>

  )
}

export default App;