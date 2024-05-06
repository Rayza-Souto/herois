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
      console.log(response.data);
      const responseData = response.data; // Obtém a resposta completa
      if (responseData && responseData.data && responseData.data.results) {
        const comicsData = responseData.data.results.map(result => ({
          id: result.id,
          title: result.title,
          thumbnail: `${result.thumbnail.path}.${result.thumbnail.extension}`
        }));
        setComics(comicsData);
      } else {
        console.error('Nenhum resultado encontrado ou estrutura de dados inesperada:', responseData);
      }
  })
  }, [id]); //id foi passado como dependencia para que toda vez que ele mudar a requisição seja feita novamente
  

  return (

  <div className="col-sm-6">
    <h1>Comics</h1>
    {comics.map(comics =>(
      <div class="card-body">
      <img src={`${comics.thumbnail}`} className="card-img-top" alt="..." />
      <h5 class="card-title">{comics.title}</h5>
      </div>
          ))}
      <Link to={`/`}><button className="btn btn-outline-danger">Go Back</button></Link>
  </div>
);

}

export default ComicsDetails;