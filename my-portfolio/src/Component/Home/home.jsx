import "./home.css";
import Me from "../../assets/avatar.jpg";
import Social from "./social";
import ScrollDown from "./scrolldown";
import Shapes from "./shapes";

const Home = () => {
  return (
    <>
      <section className="home container" id="home">
        <div className="intro">
          <img src={Me} alt="" className="home__img" />
          <h1 className="home__name">Pitou</h1>
          <span className="home__education">I&apos;m a Vietnamese Developer</span>
          <Social />
          <a href="#contact" className="btn">
            Hire me
          </a>
          <ScrollDown/>
        </div>
        <Shapes/>
      </section>
    </>
  );
};

export default Home;
