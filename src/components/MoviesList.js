import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function MoviesList() {
  const [moviesImg, setMoviesImg] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies"
    );

    promise.then((response) => {
      setMoviesImg(response.data);      
    });
  }, []);

  return (
    <>
      <div className="selection">Selecione o filme</div>

      <ul className="movies">
        {moviesImg.map((movie) => (
          <Link to={`/filme/${movie.id}`}>
            <li className="movie" key={movie.id}>
              <img src={movie.posterURL} alt="movie" />
            </li>
          </Link>
        ))}
      </ul>
    </>
  ); 
}
