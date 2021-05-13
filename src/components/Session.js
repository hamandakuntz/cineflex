import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";

export default function Session() {
  const { idFilme } = useParams();  
  const [movieSession, setMovieSession] = useState([]);  
  const [movieTitle, setMovieTitle] = useState([]);
  const [movieImg, setMovieImg] = useState([]);  

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idFilme}/showtimes`
    );

    promise.then((res) => {
      setMovieSession(res.data.days);
      setMovieTitle(res.data.title);
      setMovieImg(res.data.posterURL);
    });
  }, []);

  return (
    <>
      <div className="selection">Selecione o horário</div>
      {movieSession.map((movie) => (
        <div>
          <div className="session-day">
            {movie.weekday} - {movie.date}
          </div>
          <div className="session-time">
            {movie.showtimes.map((showtime) => (
              <Link to={`/sessao/${showtime.id}`}>
                <div className="time">{showtime.name}</div>
              </Link>
            ))}
          </div>
        </div>
      ))}
      ;
      <Footer movieImg={movieImg} movieTitle={movieTitle}/>  
    </>
  );
}
