import React, { useState } from 'react';
import { useGSAP } from "@gsap/react";
import { gsap } from 'gsap';
import robot from '../images/robot.png'
import google from '../images/google.svg'
import apple from '../images/apple.svg'

const Landing = () => {

  const timeline = gsap.timeline({});

  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useGSAP(() => {
    const handleMouseMove = (e) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    document.addEventListener('mousemove', handleMouseMove);

    const updatePosition = () => {
      setPosX((prevPosX) => prevPosX + (mouseX - prevPosX) / 5);
      setPosY((prevPosY) => prevPosY + (mouseY - prevPosY) / 5);

      gsap.set('.cursor-example', {
        css: {
          left: posX - 200,
          top: posY - 200,
        },
      });
    };

    const animation = gsap.to({}, {
      duration: 0.008,
      repeat: -1,
      onRepeat: updatePosition,
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      animation.kill();
    };
  }, [mouseX, mouseY, posX, posY]);

  useGSAP(() => {
    timeline.fromTo('.hero__text', {
      opacity: 0
    }, {
      opacity: 1,
      ease: 'power1.inOut',
      duration: 1
    })


    timeline.fromTo('.hero__install-images', {
      opacity: 0
    }, {
      opacity: 1,
      ease: 'power1.inOut',
      duration: 1
    })

    timeline.fromTo('.hero__image', {
      opacity: 0
    }, {
      opacity: 1,
      ease: 'power1.inOut',
      duration: 1
    })
  }, [])

  return (
    <section className='landing__page pattern'>
      <div className="container landing__page-container">
        <div className="hero__text">
          <h1>
            THE NEXT <br/>{" "}
            <span>
              GENERATION
            </span><br/>{" "}
            CRYPTO APP.
          </h1>
        </div>

        <div className="hero__install-images">
          <img src={google} alt="Google" />
          <img src={apple} alt="Apple" />
        </div>
      </div>   

      <div className="hero__image">
        <img src={robot} alt="Robot" />
      </div>
          
      <div class="cursor-example"></div>

    </section>
  )
}

export default Landing
