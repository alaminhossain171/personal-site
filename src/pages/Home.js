import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Banner from "../components/Banner";
import DevStatus from "../components/DevStatus";
import HomeProjects from "../components/HomeProjects";
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
      <HomeProjects />
    </Container>
  );
}

export default Home;
