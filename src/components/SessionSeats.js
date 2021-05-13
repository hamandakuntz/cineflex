import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FooterSession from "./FooterSession";
import axios from "axios";
import Seat from "./Seat";

export default function SessionSeats() {
  const { idSessao } = useParams();
  const [sessionSeats, setSessionSeats] = useState([]);  
  const [sessionInfo, setSessionInfo] = useState([]);
  

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSessao}/seats`
    );

    promise.then((res) => {
      setSessionSeats(res.data.seats);
      setSessionInfo(res.data);
    });
  }, []);


  if (sessionInfo.length === 0){
    return (
      <div>

      </div>
    )
  }

  console.log()

  return (
    <>
      <div className="selection">Selecione o(s) assento(s)</div>
      <div className="seats">
        {sessionSeats.map((seat, i) => (
          <Seat key={i} isAvailable={seat.isAvailable} seatName={seat.name}/>
        ))}
      </div>

      <div className="seats-subtitle">
        <div className="selected">
          <div className="circle"></div>
          <div className="title">Selecionado</div>
        </div>
        <div className="available">
          <div className="circle"></div>
          <div className="title">Disponível</div>
        </div>
        <div className="unavailable">
          <div className="circle"></div>
          <div className="title">Indisponível</div>
        </div>
      </div>
      <div className="user-data">
        <div className="title">Nome do comprador:</div>
        <input type="text" className="name" placeholder="Digite seu nome" />
        <div className="title">CPF do comprador:</div>
        <input type="text" className="cpf" placeholder="Digite seu CPF" />
        <Link to="/sucesso">
          <button className="reserve-seat">Reservar assento(s)</button>
        </Link>
      </div>
      <FooterSession movieDay={sessionInfo.day.weekday} movieTitle={sessionInfo.movie.title} movieImg={sessionInfo.movie.posterURL} movieSession={sessionInfo.name}/>   
    </>
  );
}
