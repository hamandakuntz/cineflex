import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
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
  handleButton,
  setHandleButton,  
}) {
  const { idSession } = useParams();
  const [clientName, setClientName] = useState("");
  const [clientCPF, setClientCPF] = useState("");  

  let history = useHistory();

  function handleClick() {
    history.push(`/filme/${sessionInfo.movie.id}`);  
  }    

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSession}/seats`
    );

    promise.then((res) => {
      setSessionSeats(res.data.seats);
      setSessionInfo(res.data);
    });
  }, [idSession, setSessionSeats, setSessionInfo]);

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

  if (listOfChosenSeats.length !== 0 && clientCPF !== "" && clientName !== ""){
    setHandleButton(false)
  } else {
    setHandleButton(true)
  }

  return (
    <>
      <button onClick={handleClick} className="go-back"><img src="/assets/images/previous.svg" alt="button"></img></button>
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
        <div className="title-input">Nome do comprador:</div>
        <input
          id="placeholder-text1"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
          type="text"
          className="name"
          placeholder="Digite seu nome..."
        />
        <div className="title-input">CPF do comprador:</div>
        <input
          id="placeholder-text2"
          value={clientCPF}
          onChange={(e) => setClientCPF(e.target.value)}
          type="text"
          className="cpf"
          placeholder="Digite seu CPF..."
        />
      </div>
      <Link
        className="button-reserve-seat"
        to={{ pathname: "/sucesso", listClientInfo, idSession }}
      >
        <button onClick={createListClientInfo} className="reserve-seat" disabled={handleButton}>
          Reservar assento(s)
        </button>
      </Link>
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
