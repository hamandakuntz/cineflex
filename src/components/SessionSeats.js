import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FooterSession from "./FooterSession";
import axios from "axios";
import Seat from "./Seat";

export default function SessionSeats({
  listOfChosenSeats,
  setListOfChosenSeats,
  sessionInfo,
  setSessionInfo,
  sessionSeats,
  setSessionSeats,
  listClientInfo,
  setListClientInfo,
}) {
  const { idSessao } = useParams();
  const [clientName, setClientName] = useState("");
  const [clientCPF, setClientCPF] = useState("");

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSessao}/seats`
    );

    promise.then((res) => {
      setSessionSeats(res.data.seats);
      setSessionInfo(res.data);
    });
  }, [idSessao, setSessionSeats, setSessionInfo]);  

  function createListClientInfo() {
    const newListClientInfo = {
      ids: listOfChosenSeats.map((chosenSeat) => chosenSeat.id),
      name: clientName,
      cpf: clientCPF,
    };

    const promise = axios.post(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many`,
      newListClientInfo
    );
    promise.then((res) => console.log(res));
    setListClientInfo({ ...listClientInfo, newListClientInfo });
  }

  return (
    <>
      <div className="selection">Selecione o(s) assento(s)</div>
      <div className="seats">
        {sessionInfo.length === 0
          ? ""
          : sessionSeats.map((seat) => (
              <Seat
                key={seat.id}
                id={seat.id}
                listOfChosenSeats={listOfChosenSeats}
                setListOfChosenSeats={setListOfChosenSeats}
                isAvailable={seat.isAvailable}
                seatName={seat.name}
              />
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
        <input
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          type="text"
          className="name"
          placeholder="Digite seu nome"
        />
        <div className="title">CPF do comprador:</div>
        <input
          value={clientCPF}
          onChange={(e) => setClientCPF(e.target.value)}
          type="text"
          className="cpf"
          placeholder="Digite seu CPF"
        />
        <Link to={{ pathname: "/sucesso", listClientInfo }}>
          <button onClick={createListClientInfo} className="reserve-seat">
            Reservar assento(s)
          </button>
        </Link>
      </div>
      {sessionInfo.length === 0 ? (
        ""
      ) : (
        <FooterSession
          movieDay={sessionInfo.day.weekday}
          movieTitle={sessionInfo.movie.title}
          movieImg={sessionInfo.movie.posterURL}
          movieSession={sessionInfo.name}
        />
      )}
    </>
  );
}
