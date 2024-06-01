import React from "react";
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
        <h1>Warning</h1>
      </div>
      <div className="about-container">
        <div className="about-content">
          <h2 style={{ marginBottom: "2.5rem" }}>Important Disclaimer</h2>
          <h3 style={{ marginBottom: "1rem" }}>Profit and Loss Responsibility</h3>
          <p style={{ marginBottom: "2rem" }}>
            The Crypto Trades provides crypto signals and live rates for
            informational purposes only. We do not take responsibility for any
            profit or loss resulting from your trading activities. All trading
            decisions are made at your own risk, and we recommend conducting
            thorough research or consulting a financial advisor before making
            any trades.
          </p>

          <h3 style={{ marginBottom: "1rem" }}>No Legal Liability</h3>

          <p style={{ marginBottom: "1rem" }}>
            This website is not subject to legal regulations pertaining to
            financial advice. The information provided is not intended to
            constitute investment advice, and we do not endorse or assume
            liability for any trading activities conducted based on our signals
            or live rates.
          </p>

          <p >
            By using this website or our Apps, you acknowledge and agree to
            these terms and assume full responsibility for your
            trading outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
