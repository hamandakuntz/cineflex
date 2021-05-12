import ReactDOM from "react-dom";
import MoviesList from "./components/MoviesList";
import Header from "./components/Header";
import Session from "./components/Session";
import Footer from "./components/Footer";
import SessionSeats from "./components/SessionSeats";
import FooterSession from "./components/FooterSession";
import Sucess from "./components/Sucess";
import { useState, useEffect } from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {

  const [movieSession, setMovieSession] = useState([]);  
  const [movieTitle, setMovieTitle] = useState([]);
  const [movieImg, setMovieImg] = useState([]);  

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <MoviesList />
        </Route>
        <Route path="/filme/:idFilme" exact>
          <Session movieSession={movieSession} movieTitle={movieTitle} movieImg={movieImg} setMovieImg={setMovieImg} setMovieTitle={setMovieTitle} setMovieSession={setMovieSession} />          
          <Footer movieImg={movieImg} movieName={movieTitle}/>   
        </Route>
        <Route path="/sessao/:idSessao" exact>
          <SessionSeats />
          <FooterSession movieTitle={movieTitle} movieImg={movieImg} movieSession={movieSession}/>          
        </Route>
        <Route path="/sucesso" exact>
          <Sucess />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
