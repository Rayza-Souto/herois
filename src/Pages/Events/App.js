import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Axios from "axios";
import { BaseURL, timestamp, hash } from "../../Config/Key";
import "./App.css";
import {Details} from "src/Pages/Details/App.js";

function App (){
    
  const {name} = useParams(); //realizando a captura do parametro passado na URL
  const [events, setEvents] = useState([]);

  useEffect(() => { 
    Axios.get(`${BaseURL}?${name}&ts=${timestamp}&hash=${hash}`) //requisitando a API para pegar os detalhes do personagem
      .then(response => {
        const responseData = response.data; // Obtém a resposta completa
        if (responseData && responseData.data && responseData.data.results) {
          const {id, name, description, thumbnail } = responseData.data.results[0]; // Obtém os dados do personagem
          const character = {
            id,
            name: name,
            description: description,
            image: `${thumbnail.path}.${thumbnail.extension}`
          }; 
          setCharacter(character);
          console.log(character);
        } else {
          console.error('Nenhum resultado encontrado ou estrutura de dados inesperada:', responseData);
        } 
      }) //pega os dados da api e seta no estado
  },[name] ) //name foi passado como dependencia para que toda vez que ele mudar a requisição seja feita novamente

    return (
      <div className="details">
                <Link to={`/`}><button className="btn btn-outline-danger">Go Back</button></Link>
              </div>
    ); //retorna os detalhes do personagem
  }
  

export default App;