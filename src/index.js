import ReactDOM from "react-dom";
import Content from "./components/MoviesList";
import Header from "./components/Header";
import Session from "./components/Session";
import Footer from "./components/Footer";
import SessionSeats from "./components/SessionSeats";
import FooterSession from "./components/FooterSession";
import Sucess from "./components/Sucess";

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
         <FooterSession />
        </Route>
        <Route path="/sucesso" exact>
            <Sucess />            
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
