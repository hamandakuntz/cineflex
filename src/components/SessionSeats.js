import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SessionSeats() {
  const { idSessao } = useParams();
  const [sessionSeats, setSessionSeats] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSessao}/seats`
    );

    promise.then((res) => {
      setSessionSeats(res.data.seats);
      console.log(res.data.seats);
    });
  }, []);

  return (
    <>
      <div className="selection">Selecione o(s) assento(s)</div>
      <div className="seats">
        {sessionSeats.map((seat) => (
          <div
            className={`seat ${isSelected ? "selected-seat" : "available-seat"} ${
              seat.isAvailable ? "available-seat" : "unavailable-seat"
            } `} onClick={() => seat.isAvailable ? setIsSelected(true) : setIsSelected(false)}
          >
            <div>{seat.name}</div>
          </div>
        ))}
      </div>

      <div className="seats-subtitle">
        <div className="selected">
          <div className="circle">l</div>
          <div className="title">Selecionado</div>
        </div>
        <div className="available">
          <div className="circle">l</div>
          <div className="title">Disponível</div>
        </div>
        <div className="unavailable">
          <div className="circle">l</div>
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
    </>
  );
}
