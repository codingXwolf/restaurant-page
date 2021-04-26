import { Item } from "semantic-ui-react";
import Menuitem from './MenuItem'

const Menu = () => {
  

  let sushiData = [
    {
      roll: "Dragon Roll",
      price: "12.50",
      description: " lorem upsum dragon roll",
      photo:
        "http://2xs0so2vt22q1niww1rw0cm7.wpengine.netdna-cdn.com/wp-content/uploads/2014/10/Dragon-sushi-roll-amazing.jpg",
    },
    {
      roll: "Tuna Roll",
      price: "9.50",
      description: " lorem upsum tuna roll",
      photo:
        "http://hauteliving.com/wp-content/uploads/2014/01/NOBU-059-300DPI1.jpg",
    },
    {
      roll: "Spider Roll",
      price: "14.50",
      description: " lorem upsum spider roll",
      photo:
        "https://media-cdn.tripadvisor.com/media/photo-s/0d/36/34/15/spicy-spider-roll.jpg",
    },
  ];


    return (
      <>
        <Item.Group style={{ textAlign: "center" }}>
          {sushiData.map((sushi) => (
            <Menuitem sushi={sushi} />
          ))}
        </Item.Group>
      </>
    );
};

export default Menu;
