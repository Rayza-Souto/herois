import Axios from "axios";
import { useEffect, useState } from "react";
import { BaseURL, timestamp, publicKey, hash} from "../../Config/Key";
import { Link } from "react-router-dom";
import "./App.css";


function App() {

  const [character, setCharacter] = useState([]);

  useEffect(() => { 
    Axios.get(`${BaseURL}ts=${timestamp}&apikey=${publicKey}&hash=${hash}`) //requisitando a API
    .then(response => {
      console.log(response.data.data.results)
      setCharacter(response.data.data.results)
    }) //pegando a resposta da API
  }, []);


  return (
    <div className="Detalhes">
      <p className="text-center fs-2">Personagens</p>
      <div className="row">
        {character.map((item) => (
          <div className="col-md-3">
            <div className="card">
              <img src={item.thumbnail.path + "." + item.thumbnail.extension} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <Link to={`/details/name=${item.name}&apikey=${publicKey}`} className="btn btn-primary">Detalhes</Link>
              </div>
              </div>
          </div>
        ))} //mapeando os itens da API
    </div>
    </div>

  )
}

export default App;