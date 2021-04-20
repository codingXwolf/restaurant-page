import "./App.css";
import "semantic-ui-css/semantic.min.css";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <NavBar/>
        </header>

        <Content />
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
