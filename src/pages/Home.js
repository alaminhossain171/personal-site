import { Container } from "react-bootstrap";
import Banner from "../components/Banner";
import DevStatus from "../components/DevStatus";
import Skills from "../components/Skills";

function Home() {
  return (
    <Container>
      <Banner />
      <Skills />
      <DevStatus />
    </Container>
  );
}

export default Home;
