import { Container } from "reactstrap";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";

function Landing() {
  return (
    <>
      <Container fluid>
        <Row1 />
      </Container>
      <Row2 />
      <Row3 />
    </>
  );
}

export default Landing;
