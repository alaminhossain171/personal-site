import { Container } from "react-bootstrap";
import Banner from "../components/Banner";
import Skills from "./Skills";

function Home() {
  return (
    <Container>
      <Banner />
      <Skills />
    </Container>
  );
}

export default Home;
