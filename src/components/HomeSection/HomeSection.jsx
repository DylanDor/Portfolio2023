import { useRef, useLayoutEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { gsap } from "gsap";
import "./HomeSection.scss";

export const HomeSection = () => {
  const tl = useRef();

  useLayoutEffect(() => {
    const context = gsap.context(
      () =>
        (tl.current = gsap
          .timeline()
          .eventCallback('onComplete', () => {

          })
          .from(".logo", {
            scale: 5,
            top: "50%",
            left: "50%",
            xPercent: -50,
            yPercent: -50,
            delay: 0.4,
            ease: "back.in(1.5)",
          })
          .from(".logo_text", {
            translateX: -10,
            opacity: 0,
            ease: "power1.out",
            duration: 1,
          })
          .from(
            ".nav_right_container, .home_section_footer, .landing_centered_content",
            {
              opacity: 0,
              duration: 0.5,
            },
            0.8
          )
          .to(
            ".landing_centered_content_2",
            {
              translateX: "-15vw",
              ease: "power3.out",
              duration: 1,
            },
            ">-0.6"
          )
          .to(
            ".landing_centered_content_3",
            {
              translateX: "4vw",
              ease: "power3.out",
              duration: 1,
            },
            "<"
          ))
    );

    return () => {
      context.revert();
    };
  }, []);

  return (
    <section className="home_section">
      <Navbar />
      <div className="landing_centered_content">
        <h2>Independent</h2>
        <h2 className="landing_centered_content_2">Front-End</h2>
        <h2 className="landing_centered_content_3">Web Developer</h2>
      </div>
      <Footer />
    </section>
  );
};
