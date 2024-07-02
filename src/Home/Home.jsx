/* eslint-disable react/no-unescaped-entities */
import Skills from "../Skills/Skills";
import About from "./About/About";
import Hero from "./Hero/Hero";
import YouAndMe from "./YouAndMe/YouAndMe";
import "./home.scss";

const Home = () => {
  return <main>
    <Hero />
    <About />
    <Skills />
    <YouAndMe />

  </main>;
};

export default Home;
