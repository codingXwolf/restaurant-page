import { Menu, Segment } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { BrowserRouter as Switch, Route, Link } from "react-router-dom";

const NavBar = () => {
  // Decalring a new state variable called activeItem
  const [activeItem, setActiveItem] = useState("menu");

  return (
    <>
      <Segment inverted>
        <Menu inverted pointing secondary stackable>
          <Link to="/" href="#">
            <Menu.Item
              name="menu"
              active={activeItem === "menu"}
              onClick={() => setActiveItem("menu")}
            />
          </Link>

          <Link to="/about" href="#">
            <Menu.Item
              name="about"
              active={activeItem === "about"}
              onClick={() => setActiveItem("about")}
            />
          </Link>

          <Link to="/contact" href="#">
            <Menu.Item
              name="contact"
              active={activeItem === "contact"}
              onClick={() => setActiveItem("contact")}
            />
          </Link>
          <Menu.Item position="right" header>
            <h1 className="restaurant-title">Odin Sushi</h1>
          </Menu.Item>
        </Menu>
      </Segment>
    </>
  );
};

export default NavBar;
