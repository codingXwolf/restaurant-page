import "./App.css";
import "semantic-ui-css/semantic.min.css";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import FooterContent from "./components/FooterContent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <NavBar />
        </header>

          <Switch>
            <Route exact path="/" component={Menu} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </Switch>

        <footer>
          <FooterContent />
        </footer>
      </div>
    </Router>
  );
};

export default App;
