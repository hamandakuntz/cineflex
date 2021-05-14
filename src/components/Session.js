import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import button from "../assets/images/previous.svg";
import axios from "axios";
import Footer from "./Footer";

export default function Session() {
  const { idMovie } = useParams();
  const [movieSession, setMovieSession] = useState([]);
  const [movieTitle, setMovieTitle] = useState([]);
  const [movieImg, setMovieImg] = useState([]);

  let history = useHistory();

  function handleClick() {
    history.push(`/`);
  }

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idMovie}/showtimes`
    );

    promise.then((res) => {
      setMovieSession(res.data.days);
      setMovieTitle(res.data.title);
      setMovieImg(res.data.posterURL);
    });
  }, [idMovie]);

  return (
    <>
      <button onClick={handleClick} className="go-back">
        <img src={button} alt="button"></img>
      </button>
      <div className="selection">Selecione o horário</div>
      {movieSession.map((movie, i) => (
        <div
          key={movie.id}
          className={`evolve ${movieSession.length - 1 === i ? "last" : ""}`}
        >
          <div className="list-sessions" key={movie.id}>
            <div className="session-day">
              {movie.weekday} - {movie.date}
            </div>
            <div className="session-time">
              {movie.showtimes.map((showtime) => (
                <Link
                  key={showtime.id}
                  className="showtime"
                  to={`/sessao/${showtime.id}`}
                >
                  <div className="time">{showtime.name}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
      ;
      <Footer movieImg={movieImg} movieTitle={movieTitle} />
    </>
  );
}
