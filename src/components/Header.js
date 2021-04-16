import { Menu, Segment } from "semantic-ui-react";
import{ useState, useEffect } from 'react'

const Header = () => {

  // Decalring a new state variable called activeItem
  const [activeItem, setActiveItem ] = useState('home');



  return (
    <>
      <Segment inverted>
        <Menu inverted pointing secondary stackable>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={() => setActiveItem('home')}
          />
          <Menu.Item
            name="messages"
            active={activeItem === "messages"}
            onClick={() => setActiveItem('messages')}
          />

          <Menu.Item
            name="friends"
            active={activeItem === "friends"}
            onClick={() => setActiveItem('friends')}
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
