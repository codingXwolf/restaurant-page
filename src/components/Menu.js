import { Grid, Image, Header, Dimmer } from "semantic-ui-react";
import { useState } from "react";

const Menu = () => {
  const [active, setActive] = useState(false);

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

  // return sushiData.map((sushiItem) => {
  //   const dimmerContent = (
  //     <>
  //       <Header as="h2" inverted>
  //         {sushiItem.roll}
  //       </Header>

  //       <p>{sushiItem.description}</p>
  //       <p>{sushiItem.price}</p>
  //     </>
  //   );

    return (
      <>
        {
          <Grid centered fluid vertical columns={1}>
            <Grid.Row>
              <Dimmer.Dimmable
                as={Image}
                name="roll1"
                dimmed={active}
                dimmer={{ active }}
                onMouseEnter={(e) => {
                  console.log(e)
                }}
                onMouseLeave={() => setActive(false)}
                size="medium"
                src="http://2xs0so2vt22q1niww1rw0cm7.wpengine.netdna-cdn.com/wp-content/uploads/2014/10/Dragon-sushi-roll-amazing.jpg"
              />
            </Grid.Row>
            <Grid.Row>
              <Dimmer.Dimmable
                as={Image}
                name="roll2"
                dimmed={active}
                dimmer={{ active }}
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
                size="medium"
                src="http://hauteliving.com/wp-content/uploads/2014/01/NOBU-059-300DPI1.jpg"
              />
            </Grid.Row>
            <Grid.Row>
              <Dimmer.Dimmable
                as={Image}
                name="roll3"
                dimmed={active}
                dimmer={{ active }}
                onMouseEnter={() => setActive(true)}
                onMouseLeave={() => setActive(false)}
                size="medium"
                src="https://media-cdn.tripadvisor.com/media/photo-s/0d/36/34/15/spicy-spider-roll.jpg"
              />
            </Grid.Row>
          </Grid>
        }
      </>
    );
};

export default Menu;
