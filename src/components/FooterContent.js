import { Menu, Icon } from "semantic-ui-react";

const FooterContent = () => {
  return (
    <>
      <Menu className="footer-content" inverted size="massive" fixed="bottom" icon borderless>
        <Menu.Item>
          <Icon name="twitter" size="large" />
        </Menu.Item>
        <Menu.Item>
          <Icon name="instagram" size="large" />
        </Menu.Item>
        <Menu.Item>
          <Icon name="facebook" size="large" />
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item>
            <span>This is an assignment for The Odin Project. Made by Jaime Ortiz</span>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </>
  );
};

export default FooterContent;
