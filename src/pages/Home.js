import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Banner from "../components/Banner";
import DevStatus from "../components/DevStatus";
import HomeProjects from "../components/HomeProjects";
import Skills from "../components/Skills";
import Thoughts from "../components/Thoughts";
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
      <Thoughts />
    </Container>
  );
}

export default Home;
