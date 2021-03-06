import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import "./css/reset.css";
import "./css/styles.css";
import Header from "./components/Header";
import MoviesList from "./components/MoviesList";
import Session from "./components/Session";
import SessionSeats from "./components/SessionSeats";
import Sucess from "./components/Sucess";

function App() {
  const [sessionSeats, setSessionSeats] = useState([]);
  const [sessionInfo, setSessionInfo] = useState([]);
  const [listClientInfo, setListClientInfo] = useState({});
  const [listOfChosenSeats, setListOfChosenSeats] = useState([]);
  const [handleButton, setHandleButton] = useState(true);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <MoviesList />
        </Route>
        <Route path="/filme/:idMovie" exact>
          <Session />
        </Route>
        <Route path="/sessao/:idSession" exact>
          <SessionSeats
            listOfChosenSeats={listOfChosenSeats}
            setListOfChosenSeats={setListOfChosenSeats}
            sessionSeats={sessionSeats}
            setSessionSeats={setSessionSeats}
            sessionInfo={sessionInfo}
            setSessionInfo={setSessionInfo}
            listClientInfo={listClientInfo}
            setListClientInfo={setListClientInfo}
            handleButton={handleButton}
            setHandleButton={setHandleButton}
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
