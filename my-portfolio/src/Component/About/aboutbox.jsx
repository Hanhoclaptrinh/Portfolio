const AboutBox = () => {
  return (
    <>
      <div className="about__boxes grid">
        <div className="about__box">
          <i className="about__icon icon-fire"></i>
          <div>
            <h3 className="about__title">2000</h3>
            <span className="about__subtitle">Project Completed</span>
          </div>
        </div>

        <div className="about__box">
          <i className="about__icon icon-cup"></i>
          <div>
            <h3 className="about__title">10000</h3>
            <span className="about__subtitle">Cup of coffee</span>
          </div>
        </div>

        <div className="about__box">
          <i className="about__icon icon-notebook"></i>
          <div>
            <h3 className="about__title">7</h3>
            <span className="about__subtitle">PhD Degree</span>
          </div>
        </div>

        <div className="about__box">
          <i className="about__icon icon-heart"></i>
          <div>
            <h3 className="about__title">0</h3>
            <span className="about__subtitle">Times Take Her Hands</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutBox;
