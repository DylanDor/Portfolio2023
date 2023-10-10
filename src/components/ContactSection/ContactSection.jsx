import "./ContactSection.scss";

export const ContactSection = () => {
  return (
    <section className="contact_section">
      <div></div>
      <div className="contact_center_container">
        <h2 >Let's connect</h2>
        <a className="email_link serif_font" href="mailto:">
          SEND ME AN E-MAIL
        </a>
      </div>
      <footer>
        <div className="footer_left_container">
          <div className="thanks_text">
            <p>Thanks for your visit!</p>
            <p>Fell free to connect with me on social</p>
          </div>
        </div>
        <div>
          <div className="social_list">
            <a className="social_link" href="">
              Linkedin
            </a>
            <a className="social_link" href="">
              Github
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};
