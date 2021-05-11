import ReactDOM from "react-dom";
import Content from "./components/MoviesList";
import Header from "./components/Header";
import Session from "./components/Session";
import Footer from "./components/Footer";
import SessionSeats from "./components/SessionSeats";

import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Content />
        </Route>
        <Route path="/filme/id" exact>
         <Session />
         <Footer />
        </Route>
        <Route path="/sessao/id" exact>
         <SessionSeats/>   
        </Route>
        <Route path="/sucesso" exact>
            
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
