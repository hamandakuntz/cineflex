import { Link } from "react-router-dom";

export default function Session() {
  return (
    <>
      <div className="selection">Selecione o horário</div>
      <div className="session-day">Quinta-feira - 24/06/2021</div>
      <div className="session-time">
        <Link to="/sessao/id">
          <div className="time">15:00</div>
        </Link>
        <Link to="/sessao/id">
          <div className="time">16:00</div>
        </Link>
      </div>
      <div className="session-day">Sexta-feira - 25/06/2021</div>
      <div className="session-time">
        <div className="time">15:00</div>
        <div className="time">19:00</div>
      </div>
    </>
  );
}
