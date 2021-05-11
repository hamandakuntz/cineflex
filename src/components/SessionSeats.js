export default function SessionSeats() {
    return (
      <>
        <div className="selection">Selecione o(s) assento(s)</div>
        <div className="seats">
          <div className="seat">
            <div>01</div>
          </div>
          <div className="seat">
            <div>02</div>
          </div>
          <div className="seat">
            <div>03</div>
          </div>
          <div className="seat">
            <div>04</div>
          </div>
          <div className="seat">
            <div>05</div>
          </div>
          <div className="seat">
            <div>06</div>
          </div>
          <div className="seat">
            <div>07</div>
          </div>
          <div className="seat">
            <div>08</div>
          </div>
          <div className="seat">
            <div>09</div>
          </div>
          <div className="seat">
            <div>10</div>
          </div>
          <div className="seat">
            <div>11</div>
          </div>
          <div className="seat">
            <div>12</div>
          </div>
          <div className="seat">
            <div>13</div>
          </div>
          <div className="seat">
            <div>14</div>
          </div>
          <div className="seat">
            <div>15</div>
          </div>
          <div className="seat">
            <div>16</div>
          </div>
          <div className="seat">
            <div>17</div>
          </div>
          <div className="seat">
            <div>18</div>
          </div>
          <div className="seat">
            <div>19</div>
          </div>
          <div className="seat">
            <div>20</div>
          </div>
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
          <input type="text" className="name" placeholder="Digite seu nome"/>
          <div className="title">CPF do comprador:</div>
          <input type="text" className="cpf" placeholder="Digite seu CPF"/>
          <button className="reserve-seat">Reservar assento(s)</button>
        </div>
        
      </>
    );
}