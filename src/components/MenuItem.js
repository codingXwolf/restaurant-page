import { Item, Image, Header, Dimmer } from "semantic-ui-react";
import { useState } from "react";

const MenuItem = ({ sushi }) => {
  const [active, setActive] = useState(false);

  const content = (
    <div>
      <Header as="h2" inverted>
        {sushi.roll}
      </Header>

      <p>{sushi.price}</p>
      <p>{sushi.description}</p>
    </div>
  );

  const handleShow = () => {
    setActive(true);
  };

  const handleHide = () => {
    setActive(false);
  };

  return (
    <>
      <Item>
        <Dimmer.Dimmable
          as={Image}
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={handleShow}
          onMouseLeave={handleHide}
          size="medium"
          src={sushi.photo}
        />
      </Item>
    </>
  );
};

export default MenuItem;
