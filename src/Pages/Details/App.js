import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Axios from "axios";
import { BaseURL, timestamp, hash } from "../../Config/Key";

function Details() {

  const {name} = useParams(); //realizando a captura do parametro passado na URL

  const [character, setCharacter] = useState([]);

  useEffect(() => { 
    Axios.get(`${BaseURL}${name}&ts=${timestamp}&hash=${hash}`) //requisitando a API para pegar os detalhes do personagem
      .then(response => {
        const responseData = response.data; // Obtém a resposta completa
        if (responseData && responseData.data && responseData.data.results) {
          const { name, description, thumbnail } = responseData.data.results[0]; // Acessa o primeiro resultado, se existir
          const character = {
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
  }, [])

  return (
    <div className="hero">
            <img src = {character.image} alt = {character.name}/> 
            <div className="details">
              <h1>{character.name}</h1>
              <spam>Name: {character.name}</spam>
              <spam>Description: {character.description}</spam>
              <spam> {character.thumbnail}</spam>
              <Link to={`/`}><button>Go Back</button></Link>
            </div>
          </div>
  );
}

export default Details;