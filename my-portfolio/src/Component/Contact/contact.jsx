import "./contact.css";
const Contact = () => {
  return (
    <>
      <section className="contact container section" id="contact">
        <h2 className="section__title">Get in touch</h2>

        <div className="contact__container grid">
          <div className="contact__info">
            <h3 className="contact__title">
              Let&apos;s talk about everything!
            </h3>
            <p className="contact__details">
              Contact me via email address, you can send me a message immediately
            </p>
          </div>
          <form action="" className="contact__form">
            <div className="contact__form-group">
              <div className="contact__form-div">
                <input
                  type="text"
                  className="contact__form-input"
                  placeholder="Username"
                />
              </div>

              <div className="contact__form-div">
                <input
                  type="email"
                  className="contact__form-input"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Address"
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Message"
              ></textarea>
            </div>
            <button className="btn">Send me</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
