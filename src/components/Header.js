import { Menu, Segment } from "semantic-ui-react";
import{ useState, useEffect } from 'react'

const Header = () => {

  // Decalring a new state variable called activeItem
  const [activeItem, setActiveItem ] = useState('menu');



  return (
    <>
      <Segment inverted>
        <Menu inverted pointing secondary stackable>
          <Menu.Item
            name="menu"
            active={activeItem === "menu"}
            onClick={() => setActiveItem('menu')}
          />
          <Menu.Item
            name="about"
            active={activeItem === "about"}
            onClick={() => setActiveItem('about')}
          />

          <Menu.Item
            name="contact"
            active={activeItem === "contact"}
            onClick={() => setActiveItem('contact')}
          />

          <Menu.Item position="right" header>
            <h1 className="restaurant-title">Odin Sushi</h1>
          </Menu.Item>
        </Menu>
      </Segment>
    </>
  );
};

export default Header;
