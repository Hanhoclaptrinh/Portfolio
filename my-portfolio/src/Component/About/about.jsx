import "./about.css";
import AboutMe from "../../assets/loopy.jpg";
import AboutBox from "./aboutbox";

const About = () => {
  return (
    <>
      <section className="about container section" id="about">
        <h2 className="section__title">About me</h2>
        <div className="about__container grid">
          <img src={AboutMe} alt="" className="about__img"/>
          <div className="about__data grid">
            <div className="about__info">
              <p className="about__description">
                Anh Han dep trai <br/>
                Deo biet noi gi
              </p>
              <a href="#about" className="btn">
                Download CV
              </a>
            </div>
            <div className="about__skills grid">
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Java</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skill-1"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">C++</h3>
                  <span className="skills__number">75%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skill-2"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Python</h3>
                  <span className="skills__number">50%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skill-3"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AboutBox />
      </section>
    </>
  );
};

export default About;
