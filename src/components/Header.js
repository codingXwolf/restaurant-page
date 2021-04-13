import { Menu, Segment } from "semantic-ui-react";

const Header = () => {

  return (
    <>
      <Segment inverted>
        <Menu inverted pointing secondary stackable>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />
          <Menu.Item name="friends" />

          <Menu.Item position="right">
            <h1 className="restaurant-title">Odin Sushi</h1>
          </Menu.Item>
        </Menu>
      </Segment>
    </>
  );
};

export default Header;
