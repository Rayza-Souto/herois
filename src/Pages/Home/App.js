import Axios from "axios";
import { useEffect, useState } from "react";
import { BaseURL, timestamp, publicKey, hash} from "../../Config/Key";
import { Link } from "react-router-dom";
import "./App.css";


function App() {

  const [character, setCharacter] = useState([]);

  const buscarPersonagem = () => {
    const [handleSearch, setHandleSearch] = useState('');

    const handleChange = (e) => {
      setHandleSearch(e.target.value);
    }
  }

  useEffect(() => { 
    Axios.get(`${BaseURL}ts=${timestamp}&apikey=${publicKey}&hash=${hash}`) //requisitando a API
    .then(response => {
      console.log(response.data.data.results) //mostrando no console a resposta da API
      setCharacter(response.data.data.results) //setando a resposta da API no estado
    }) //pegando a resposta da API
  }, []);


  return (
    <div className="Home">
      <h1>Marvel Characteres</h1>
      <div className="Search">
        <input type="text" placeholder="Digite o nome do personagem" className="form-control" />
        <Link to={`${BaseURL}name=${item.name}&apikey=${publicKey}`} className="btn btn-outline-primary">Buscar</Link>
      </div>
    </div>
  ) 
}

export default App;