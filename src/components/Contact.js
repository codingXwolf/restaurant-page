import { Header } from 'semantic-ui-react'

const Contact = () => {
    return (
      <>
        <Header size="huge" textAlign="center">
          Contact
        </Header>
        <hr style={{ maxWidth: "80%" }} />
        <Header size="medium" textAlign="center">
          Phone Number:
        </Header>
        <Header size="medium" textAlign="center">
          <a href="#">626-123-4567</a>
        </Header>
        <br/>
        <Header size="medium" textAlign="center">
          Address
        </Header>
        <Header size="medium" textAlign="center">
          <a href="#">1234 Rosemead Blvd <br/>
          Los Angeles, CA 91029
          </a>
        </Header>

      </>
    );
}

export default Contact

