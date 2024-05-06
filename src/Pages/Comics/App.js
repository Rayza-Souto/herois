import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Axios from "axios";
import {publicKey, URLComics, timestamp, hash } from "../../Config/Key";
import "./App.css";

function ComicsDetails() {
  const { id } = useParams();
  const [comics, setComics] = useState([]); //pegando os dados dos quadrinhos
  //const [character, setCharacter] = useState([]);

  useEffect(() => {
    Axios.get(`${URLComics}${id}/comics?apikey=${publicKey}&ts=${timestamp}&hash=${hash}`) //requisitando a API para pegar os detalhes dos quadrinhos
    .then(response => {
      const responseData = response.data; // Obtém a resposta completa
      if (responseData && responseData.data && responseData.data.results) {
        const {id, title, description, thumbnail } = responseData.data.results[19];
        const comics = {
          id,
          title: title,
          description: description,
          thumbnail: `${thumbnail.path}.${thumbnail.extension}`
        };
        setComics(comics); //
        console.log('Dados dos personagens:', comics);
      }
  })
    .catch(error => {
      console.error('Erro ao buscar os dados:', error);
    });
  }, [id]);
  

  return (
    <div>
      <div className="details">
        <h1>Comics</h1>
          <div >
            <h2>{comics.title}</h2>
            <img src={`${comics.thumbnail}`} className="imagem" alt="." />
            <span className="desc">Description: {comics.description}</span>
          </div>
        <Link to={`/`}><button className="btn btn-outline-danger">Go Back</button></Link>
      </div>
    </div>
  );
};

export default ComicsDetails;