import { useState, useEffect, useRef } from "react";
import { DateTime } from "luxon";
import gsap from "gsap";

export const Footer = () => {
  const [currentTime, setCurrentTime] = useState(
    DateTime.now().setZone("Europe/Paris").toFormat("HH:mm")
  );

  const tl = useRef()
  const availableCircleRef = useRef()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(DateTime.now().setZone("Europe/Paris").toFormat("HH:mm"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    tl.current = gsap.timeline()
    gsap.to(availableCircleRef.current, {
      opacity: 0,
      yoyo: true,
      repeat: -1,
      repeatDelay: 1,
      delay: 2,
    });
  }, []);


  return (
    <div className="home_section_footer">
      {/* <div className="separator"></div> */}
      <div className="footer_text_container">
        <div className="footer_left_container">
          <p className="footer_date">
            Based in Toulouse, FRANCE • {currentTime}
          </p>
        </div>
        <div className="footer_right_container">
          <p className="footer_available">
          <span className="circle" ref={availableCircleRef}></span> Available worldwide for your project
          </p>
        </div>
      </div>
    </div>
  );
};
