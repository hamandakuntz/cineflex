import { Link } from "react-router-dom";

export default function Sucess() {
  return (
    <>
        <div className="sucess">Pedido feito com sucesso!</div>
        <div className="session-info-title">Filme e sessão</div>
        <div className="session-movie">Enola Holmes</div>
        <div className="session-info">24/06/2021 15:00</div>

        <div className="ticket-info-title">Ingressos</div>
        <div className="session-movie">Assento 15</div>
        <div className="session-info">Assento 16</div>

        <div className="user-info-title">Comprador</div>
        <div className="session-movie">Nome: João da Silva Sauro</div>
        <div className="session-info">CPF: 123.456.789-10</div>
        <Link to="/">
            <button className="home">Voltar para home</button>
        </Link>      
    </>
  );
}
