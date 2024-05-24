import React from 'react'
import about from '../images/about.jpg'
import { useGSAP } from "@gsap/react";
import { gsap } from 'gsap';

const About = () => {
    const timeline = gsap.timeline({});

    useGSAP(() => {
        timeline.fromTo('.about-content', {
          opacity: 0,
          y: 23
        }, {
          opacity: 1,
          y: 1,
          ease: 'power1.inOut',
          duration: 1
        })
    
    
        timeline.fromTo('.about-image', {
          opacity: 0,
          x: 23
        }, {
          opacity: 1,
          x:1,
          ease: 'power1.inOut',
          duration: 1
        })
    })

  return (
    <section className='about'>
        <div className="about-heading">
            <h1>About Us</h1>
        </div>
        <div className="about-container">
            <div className="about-content">
                <h2>Welcome To Our Website</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum quis exercitationem molestias, excepturi nulla quas. Iste, quo. Magnam, ipsum facere tempore quod repellendus, quo quisquam nemo quasi quis cumque exercitationem!
                Enim et accusantium aliquid sed officiis labore ut facere, voluptate eum, velit molestias iure eos magni quidem quo illum distinctio hic odio blanditiis obcaecati omnis repellendus eligendi facilis! Non, numquam?
                A impedit, explicabo ullam cum facilis aut quod provident neque illo quasi esse inventore ad magnam expedita voluptates fugiat qui cupiditate. Ad magnam quibusdam veniam sunt quia asperiores nulla libero!
                Praesentium minima enim magnam ipsa ducimus amet dolor harum! Accusamus corporis consequatur in, enim similique praesentium cumque modi distinctio autem non laborum excepturi neque repellat dignissimos, iusto quo voluptatum aliquid.
                </p>
            </div>
            <div className="about-image">
                <img src={about} alt="" />
            </div>
        </div>
    </section>
  )
}

export default About
