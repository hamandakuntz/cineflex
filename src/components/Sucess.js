import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import button from "../assets/images/previous.svg";

export default function Sucess({
  listOfChosenSeats,
  sessionInfo,
  listClientInfo,
  setListOfChosenSeats,
}) {
  let history = useHistory();

  function handleClick() {
    history.push(`/sessao/${sessionInfo.id}`);
  }

  return (
    <>
      <button onClick={handleClick} className="go-back">
        <img src={button} alt="button"></img>
      </button>
      <div className="sucess">Pedido feito com sucesso!</div>
      <div className="session-info-title">Filme e sessão</div>
      <div className="session-movie">{sessionInfo.movie.title}</div>
      <div className="session-info">
        {sessionInfo.day.date} - {sessionInfo.name}
      </div>

      <div className="ticket-info-title">Ingressos</div>
      {listOfChosenSeats.map((info) => (
        <div key={info.id} className="session-movie">
          Assento - {info.seatName}
        </div>
      ))}

      <div className="user-info-title">Comprador</div>
      <div className="session-movie">
        Nome: {listClientInfo.newListClientInfo.name}
      </div>
      <div className="session-info">
        CPF: {listClientInfo.newListClientInfo.cpf}
      </div>
      <Link onClick={() => setListOfChosenSeats([])} to="/">
        <button className="home">Voltar para home</button>
      </Link>
    </>
  );
}
