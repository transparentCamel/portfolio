import React, { useEffect, useRef, useState } from 'react';
import { HeroSectionStyles } from './HeroSection.styles';
import linkedin from '../../../assets/svg/square-linkedin.svg';
import github from '../../../assets/svg/square-github.svg';
import myPhoto from '../../../assets/images/MyPicture.png';
import htmlLogo from '../../../assets/svg/html5.svg';
import cssLogo from '../../../assets/svg/css3.svg';
import sass from '../../../assets/svg/sass.svg';
import react from '../../../assets/svg/react.svg';
import node from '../../../assets/svg/node.svg';
import location from '../../../assets/svg/location.svg';
import tailwindIcon from '../../../assets/svg/tailwind-css.svg';
import sign from '../../../assets/svg/less-than.svg';
import polaroid from '../../../assets/images/polaroidTop.png';
import gsapIcon from '../../../assets/svg/GSAP.svg';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { gsap } from 'gsap';

export default function HeroSection() {
  const headerRef = useRef();
  const paragraphRef = useRef();
  const leftBracketRef = useRef();
  const rightBracketRef = useRef();
  const locationTextRef = useRef();
  const pinRef = useRef();
  const linkedInRef = useRef();
  const githubRef = useRef();
  const techTextRef = useRef();
  const lineRef = useRef();
  const iconContainerRef = useRef();
  const polaroidRef = useRef();
  const myPhotoRef = useRef();
  const myPhotoContainerRef = useRef();
  const linkWrapperRef = useRef();
  const gitRef = useRef();
  const flashRef = useRef();
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();
    gsap.registerPlugin(ScrollTrigger);

    gsap.set([linkWrapperRef.current, gitRef.current], {
      clipPath: 'inset(100% 0 0 0)',
    });

    tl.fromTo(
      headerRef.current,
      { clipPath: 'inset(0 0 100% 0)' },
      {
        clipPath: 'inset(0 0 0% 0)',
        duration: 1,
        ease: 'power2.out',
      }
    )

      .fromTo(
        locationTextRef.current,
        {
          clipPath: 'inset(0 100% 0 0)',
        },
        {
          clipPath: 'inset(0 0% 0 0)',
          duration: 1,
          ease: 'power2.out',
        }
      )

      .fromTo(
        pinRef.current,
        {
          x: 100,
          y: -50,
          opacity: 0,
          rotation: 90,
          transformOrigin: 'bottom center',
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          rotation: 0,
          duration: 0.5,
          ease: 'power2.out',
        },
        '<'
      )

      .fromTo(
        pinRef.current,
        {
          rotation: 0,
        },
        {
          rotation: '-=15',
          repeat: 3,
          yoyo: true,
          duration: 0.1,
          ease: 'sine.inOut',
        }
      )

      .fromTo(
        leftBracketRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 },
        '<'
      )

      .fromTo(
        rightBracketRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 },
        '<'
      )

      .fromTo(
        paragraphRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }
      )

      .fromTo(
        linkedInRef.current,
        {
          scale: 0,
        },
        {
          scale: 1,
          duration: 1,
        }
      )
      .fromTo(
        githubRef.current,
        { x: 100, rotation: 360, opacity: 0 },
        {
          x: 0,
          rotation: 0,
          opacity: 1,
          duration: 1,
          onComplete: () => setAnimationFinished(true),
        },

        '<'
      )
      .fromTo(
        techTextRef.current,
        {
          clipPath: 'inset(0 100% 0 0)',
        },
        {
          clipPath: 'inset(0 0% 0 0)',
          duration: 1,
          ease: 'power2.out',
        }
      )
      .fromTo(
        lineRef.current,
        {
          clipPath: 'inset(0 0 0 100%)',
        },
        {
          clipPath: 'inset(0 0 0 0%)',
          duration: 1,
        },
        '<'
      )
      .fromTo(
        polaroidRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
        },
        '<'
      )

      .fromTo(
        iconContainerRef.current,
        {
          clipPath: 'inset(0 0 100% 0)',
        },
        {
          clipPath: 'inset(0 0 0% 0)',
          duration: 0.8,
        }
      )

      .fromTo(
        flashRef.current,
        {
          opacity: 0,
          clipPath: 'inset(100% 0 0 0)',
        },
        {
          opacity: 1,
          clipPath: 'inset(0% 0 0 0)',
          duration: 0.5,
          ease: 'power2.out',
        },
        '<'
      )
      .fromTo(
        myPhotoContainerRef.current,
        {
          opacity: 0,
          clipPath: 'inset(100% 0 0 0)',
        },
        {
          opacity: 1,
          clipPath: 'inset(0% 0 0 0)',
          duration: 1,
        },
        '<'
      );

    gsap.to(flashRef.current, {
      opacity: 0.8,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });
  }, []);

  const handleMouseEnterLinkedIn = () => {
    if (animationFinished) {
      gsap.to(linkWrapperRef.current, {
        clipPath: 'inset(0% 0 0 0)',
        duration: 0.5,
        ease: 'power3.out',
      });
    }
  };

  const handleMouseLeaveLinkedIn = () => {
    gsap.to(linkWrapperRef.current, {
      clipPath: 'inset(100% 0 0 0)',
      duration: 0.5,
      ease: 'power3.out',
    });
  };

  const handleMouseEnterGit = () => {
    if (animationFinished) {
      gsap.to(gitRef.current, {
        clipPath: 'inset(0% 0 0 0)',
        duration: 0.5,
        ease: 'power3.out',
      });
    }
  };

  const handleMouseLeaveGit = () => {
    gsap.to(gitRef.current, {
      clipPath: 'inset(100% 0 0 0)',
      duration: 0.5,
      ease: 'power3.out',
    });
  };
  return (
    <HeroSectionStyles>
      <div>
        <div className='mainContainer'>
          <div className='textContainer'>
            <h1 ref={headerRef}>Front-End Developer</h1>

            <span className='locationContainer'>
              <h2 ref={locationTextRef}>Vilnius, Lithuania</h2>
              <img src={location} ref={pinRef} alt='Location pin svg' />
            </span>
            <div className='paragraphBox'>
              <img ref={leftBracketRef} src={sign} alt='Bracket' />
              <p ref={paragraphRef}>
                Hi, I'm a passionate front-end developer who specializes in
                utilizing React to create dynamic and user-friendly web
                applications. With a strong focus on modern web technologies and
                a keen eye for design.
              </p>
              <img ref={rightBracketRef} src={sign} alt='Bracket' />
            </div>

            <span className='socialContainer'>
              <a
                href='https://www.linkedin.com/in/arvydas-pe%C4%8Diulis-2a7560213/'
                target='_blank'
                onMouseEnter={handleMouseEnterLinkedIn}
                onMouseLeave={handleMouseLeaveLinkedIn}
              >
                <img ref={linkedInRef} src={linkedin} alt='LinkedIn svg' />
                <div ref={linkWrapperRef} id='linkedInHover'></div>
              </a>
              <a
                href='https://github.com/transparentCamel'
                target='_blank'
                onMouseEnter={handleMouseEnterGit}
                onMouseLeave={handleMouseLeaveGit}
              >
                <img ref={githubRef} src={github} alt='GitHub svg' />
                <div ref={gitRef} id='gitHover'></div>
              </a>
            </span>
          </div>
          <div className='skillsContainer'>
            <h2 ref={techTextRef}>Tech Stack</h2>

            <div ref={lineRef} id='line'></div>

            <ul ref={iconContainerRef}>
              <li>
                <img src={htmlLogo} alt='Html5 Logo' />
              </li>
              <li>
                <img src={cssLogo} alt='CSS3 Logo' />
              </li>
              <li>
                <img src={react} alt='React Logo' />
              </li>
              <li>
                <img src={node} alt='Node Logo' />
              </li>
              <li>
                <img src={tailwindIcon} alt='Tailwind Logo' />
              </li>
              <li>
                <img src={sass} alt='Sass Logo' />
              </li>
              <li>
                <img src={gsapIcon} alt='GSAP Logo' />
              </li>
            </ul>
          </div>
        </div>
        <div ref={myPhotoRef} className='heroImageContainer'>
          <div id='myPhotoContainer' ref={myPhotoContainerRef}>
            <img src={myPhoto} alt='Photo of me' />
          </div>
          <div className='flashContainer' ref={flashRef}>
            <div className='trapezoidContainer'>
              <div id='trapezoidOne' className='trapezoid'></div>
              <div id='trapezoidTwo' className='trapezoid'></div>
              <div id='trapezoidThree' className='trapezoid'></div>
              <div id='trapezoidFour' className='trapezoid'></div>
              <div id='trapezoidFive' className='trapezoid'></div>
            </div>
          </div>
          <div className='polaroidContainer'>
            <img
              id='polaroid'
              ref={polaroidRef}
              src={polaroid}
              alt='Polaroid Camera'
            />
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}
