import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Axios from "axios";
import { BaseURL, publicKey, URLComics, timestamp, hash } from "../../Config/Key";
import "./App.css";

function ComicsDetails() {
  const { id, name } = useParams();
  const [comics, setComics] = useState([]);
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    Axios.get(`${URLComics}${id}/comics?apikey=${publicKey}&ts=${timestamp}&hash=${hash}`) //requisitando a API para pegar os detalhes do personagem
    .then(response => {
      const responseData = response.data; // Obtém a resposta completa
      if (responseData && responseData.data && responseData.data.results) {
        const {id, title, description, text, thumbnail } = responseData.data.results[19];
        const character = {
          id,
          title: title,
          description: description,
          text: text,
          thumbnail: `${thumbnail.path}.${thumbnail.extension}`
        };
        setCharacter(character);
        console.log(character);
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
        {comics.map(comic => (
          <div key={comic.id}>
            <h2>{comic.title}</h2>
            <span className="desc">Text: {comic.text}</span>
            <span className="desc">Description: {comic.description}</span>
            <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} className="imagem" alt={comic.title} />
            <span className="desc">Description: {comic.description}</span>
          </div>
        ))}
        <Link to={`/`}><button className="btn btn-outline-danger">Go Back</button></Link>
      </div>
    </div>
  );
};

export default ComicsDetails;