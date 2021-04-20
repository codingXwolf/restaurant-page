import "./App.css";
import "semantic-ui-css/semantic.min.css";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
// import { Menu, Input } from 'semantic-ui-react'
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
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>

        <footer>
          {/* <Menu>
            <Menu.Item disabled>(c) My Copyright</Menu.Item>
            <Menu.Item position="right">
              <Input disabled label="Jaime" />
            </Menu.Item>
            <Menu.Item>
              <Input disabled label="Ortiz" />
            </Menu.Item>
          </Menu> */}
        </footer>
      </div>
    </Router>
  );
};

export default App;
