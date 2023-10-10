import { SectionHeader } from "../SectionHeader/SectionHeader";
import "./AboutSection.scss";

export const AboutSection = () => {
  return (
    <section className="about_section">
      <SectionHeader title={"ABOUT"} />
      <div className="about_introduction_container">
        <div className="about_introduction_title">
          <h2><span className="serif_font italic">Hi!</span> I'm Dylan,</h2>
          <h2>a twenty-six years old</h2>
          <h2><span className="serif_font italic">front-end</span> developer.</h2>
          <h2>Currently based in <span className="serif_font italic">France</span></h2>
        </div>
        <div className="about_introduction_content">
          <p className="about_content_left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit eos
            praesentium voluptatem illum voluptas facilis dignissimos labore
            commodi quaerat! Ipsam veniam dolor architecto quam quibusdam,
            voluptas voluptatibus ipsum ea pariatur.
          </p>
          <div className="about_content_right">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              ducimus vitae molestias inventore corporis quaerat hic iusto,
              debitis minus excepturi non delectus sed mollitia dignissimos
              officiis, dolorum porro quis quas! Aut non nam unde, nisi at quod
              exercitationem beatae.
            </p>
            <p>
              Dolorem possimus ipsa numquam nemo vero consectetur, at deserunt
              maxime sed libero et cupiditate aliquam animi aspernatur harum
              quas fugit.
            </p>
          </div>
        </div>
        <img className="about_img" src="Blossom-min.a7fcec75.jpg" alt="" />
      </div>
    </section>
  );
};
