import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Axios from "axios";
import { BaseURL, timestamp, hash, publicKey } from "../../Config/Key";
import "./App.css";

function Details() {

  const {name} = useParams(); //realizando a captura do parametro passado na URL

  const [character, setCharacter] = useState([]);

  useEffect(() => { 
    Axios.get(`${BaseURL}${name}&ts=${timestamp}&hash=${hash}`) //requisitando a API para pegar os detalhes do personagem
      .then(response => {
        const responseData = response.data; // Obtém a resposta completa
        if (responseData && responseData.data && responseData.data.results) {
          const characterData = responseData.data.results.map(result =>({
            id: result.id,
            name: result.name,
            description: result.description,
            image: `${result.thumbnail.path}.${result.thumbnail.extension}`
          })); //fazendo um map para pegar os dados do personagem, assim ele retorna mais de um personagem
          setCharacter(characterData);
        } else {
          console.error('Nenhum resultado encontrado ou estrutura de dados inesperada:', responseData);
        } 
      }) //pega os dados da api e seta no estado
  },[name] ) //name foi passado como dependencia para que toda vez que ele mudar a requisição seja feita novamente

  return (
    <div>
      {character.map(character => (
        <div key={character.id} className="details">
          <h1>{character.name}</h1>
          <img src={character.image} className="imagem" alt={character.name} />
          <div className="descricao">
            <span className="desc">Description: {character.description}</span>
          </div>
          <Link to={`/${character.id}/comics?apikey=${publicKey}`}><button className="btn btn-outline-danger">Comics</button></Link>
          <Link to={`/`}><button className="btn btn-outline-danger">Go Back</button></Link>
        </div>
      ))}
    </div>
  ); // retorna os detalhes do personagem
}

export default Details;