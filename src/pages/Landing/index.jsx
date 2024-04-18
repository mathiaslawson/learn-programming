import { Container } from "reactstrap";
import Row1 from "./Row1";
import Row2 from "./Row2";

function Landing() {
  return (
    <>
      <Container fluid>
        <Row1 />
      </Container>
      <Row2 />
    </>
  );
}

export default Landing;
