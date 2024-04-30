import { Link } from "react-router-dom";
import "./App.css";
import React, { useState } from 'react';

function App() {
  // Definindo um estado para armazenar o valor da caixa de texto
  const [valor, setValor] = useState('');

  // Função para lidar com a mudança no valor da caixa de texto
  const handleChange = (event) => {
    setValor(event.target.value);
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)

    // Exibe o valor capturado
    alert('O valor inserido é: ' + valor);
  };

  return(
    <div className="Home">
      <form onSubmit={handleSubmit}>
      <h1>Marvel Characteres</h1>
      <div className="Search">
      <input
          type="text"
          value={valor}
          onChange={handleChange}
          placeholder="Digite algo..."
        />
        <Link to ="src\Pages\Details\App.js" className="btn btn-primary">Buscar</Link>
    </div>
    </form>
  </div>

  )
}

export default App;