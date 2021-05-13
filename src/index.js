import ReactDOM from "react-dom";
import MoviesList from "./components/MoviesList";
import Session from "./components/Session";
import SessionSeats from "./components/SessionSeats";
import Sucess from "./components/Sucess";
import { useState } from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  const [sessionSeats, setSessionSeats] = useState([]);
  const [sessionInfo, setSessionInfo] = useState([]);
  const [listClientInfo, setListClientInfo] = useState({});
  const [listOfChosenSeats, setListOfChosenSeats] = useState([]);

  return (
    <BrowserRouter>
      <div className="header">
        <p>CINEFLEX</p>
      </div>
      <Switch>
        <Route path="/" exact>
          <MoviesList />
        </Route>
        <Route path="/filme/:idFilme" exact>
          <Session />
        </Route>
        <Route path="/sessao/:idSessao" exact>
          <SessionSeats
            listOfChosenSeats={listOfChosenSeats}
            setListOfChosenSeats={setListOfChosenSeats}
            sessionSeats={sessionSeats}
            setSessionSeats={setSessionSeats}
            sessionInfo={sessionInfo}
            setSessionInfo={setSessionInfo}
            listClientInfo={listClientInfo}
            setListClientInfo={setListClientInfo}
          />
        </Route>
        <Route path="/sucesso" exact>
          <Sucess
            setListOfChosenSeats={setListOfChosenSeats}
            listOfChosenSeats={listOfChosenSeats}
            sessionInfo={sessionInfo}
            listClientInfo={listClientInfo}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
