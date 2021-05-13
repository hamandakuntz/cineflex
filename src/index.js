import ReactDOM from "react-dom";
import MoviesList from "./components/MoviesList";
import Session from "./components/Session";
import SessionSeats from "./components/SessionSeats";
import Sucess from "./components/Sucess";

import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
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
          <SessionSeats />
        </Route>
        <Route path="/sucesso" exact>
          <Sucess />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
