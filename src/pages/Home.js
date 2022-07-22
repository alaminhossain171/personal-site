import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Banner from "../components/Banner";
import DevStatus from "../components/DevStatus";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";

function Home({ title }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Container>
      <Banner />
      <Skills />
      <DevStatus />
      <Timeline />
    </Container>
  );
}

export default Home;
