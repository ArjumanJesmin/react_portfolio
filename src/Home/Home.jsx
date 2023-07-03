import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Projects from "../components/Projects/Projects";

const Home = () => {
  return (
    <div >
      <Hero/>
      <About />
      <Experience />
      <Projects/>
      <Contact/>
    </div>
  );
};

export default Home;