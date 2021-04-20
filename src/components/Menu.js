import { Grid, Image, Reveal } from "semantic-ui-react";

const Menu = () => {
  return (
    <>
      <Grid centered fluid vertical columns={1}>
        <Reveal animated="small fade">
          <Reveal.Content>
            <Grid.Row visable>
              <Image
                size="medium"
                src="https://i.pinimg.com/originals/b6/66/17/b66617aa96d478a4bbae6035dd97f308.jpg"
              />
            </Grid.Row>
          </Reveal.Content>
          <Reveal.Content hidden>
            <Grid.Row>
              <Image
                size="medium"
                src="https://react.semantic-ui.com/images/wireframe/image.png"
              />
            </Grid.Row>
          </Reveal.Content>
        </Reveal>
        <Grid.Row>
          <Image
            size="medium"
            src="https://react.semantic-ui.com/images/wireframe/image.png"
          />
        </Grid.Row>
        <Grid.Row>
          <Image
            size="medium"
            src="https://react.semantic-ui.com/images/wireframe/image.png"
          />
        </Grid.Row>
        <Grid.Row>
          <Image
            size="medium"
            src="https://react.semantic-ui.com/images/wireframe/image.png"
          />
        </Grid.Row>
      </Grid>
    </>
  );
};

export default Menu;
