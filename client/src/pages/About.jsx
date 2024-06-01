import React from "react";
import about from "../images/about.jpg";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const About = () => {
  const timeline = gsap.timeline({});

  useGSAP(() => {
    timeline.fromTo(
      ".about-content",
      {
        opacity: 0,
        y: 23,
      },
      {
        opacity: 1,
        y: 1,
        ease: "power1.inOut",
        duration: 1,
      }
    );

    timeline.fromTo(
      ".about-image",
      {
        opacity: 0,
        x: 23,
      },
      {
        opacity: 1,
        x: 1,
        ease: "power1.inOut",
        duration: 1,
      }
    );
  });

  return (
    <section className="about">
      <div className="about-heading">
        <h1>About Us</h1>
      </div>
      <div className="about-container">
        <div className="about-content">
          <h3>Welcome to The Crypto Trades</h3>
          <p style={{marginBottom: '1rem'}}>
            At The Crypto Trades, we are your go-to source for everything
            crypto. Whether you're an experienced trader or just getting
            started, our platform provides live crypto rates directly through
            our applications, keeping you updated with the latest market
            movements.
          </p>
          <h3>Live Crypto Rates at Your Fingertips:</h3>
          <p style={{marginBottom: '1rem'}}>
            Stay ahead of the market with our real-time crypto rates. Our
            applications are designed to provide you with instant access to live
            data, ensuring you never miss a beat in the fast-paced world of
            cryptocurrency trading.
          </p>
          <h3>Why Choose The Crypto Trades?</h3>
          <p>
            Choosing The Crypto Trades means opting for reliability, accuracy,
            and a user-friendly experience. Our team is passionate about crypto
            and committed to providing the best tools and resources to help you
            succeed in the crypto market.
          </p>
        </div>
        <div className="about-image">
          <img src={about} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
