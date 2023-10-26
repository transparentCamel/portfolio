import React from 'react';
import { HeroSectionStyles } from './HeroSection.styles';
import linkedin from '../../../assets/svg/square-linkedin.svg';
import github from '../../../assets/svg/square-github.svg';
import myPhoto from '../../../assets/images/MyPhoto.jpg';
import htmlLogo from '../../../assets/svg/html5.svg';
import cssLogo from '../../../assets/svg/css3.svg';
import sass from '../../../assets/svg/sass.svg';
import react from '../../../assets/svg/react.svg';
import node from '../../../assets/svg/node.svg';
import location from '../../../assets/svg/location.svg';
export default function HeroSection() {
  return (
    <HeroSectionStyles>
      <div>
        <div className='textContainer'>
          <h1>Front-End React Developer</h1>
          <span className='locationContainer'>
            <p>Vilnius, Lithuania</p>
            <img src={location} alt='Location pin svg' />
          </span>
          <p>
            Hi, I'm a passionate front-end developer who specializes in
            utilizing React to create dynamic and user-friendly web
            applications. With a strong focus on modern web technologies and a
            keen eye for design.
          </p>
          <span>
            <a
              href='https://www.linkedin.com/in/arvydas-pe%C4%8Diulis-2a7560213/'
              target='_blank'
            >
              <img src={linkedin} alt='LinkedIn svg' />
            </a>
            <a href='https://github.com/transparentCamel' target='_blank'>
              <img src={github} alt='GitHub svg' />
            </a>
          </span>
        </div>
        <div className='heroImageContainer'>
          <img src={myPhoto} alt='Photo of me' />
        </div>
      </div>
      <div className='skillsContainer'>
        <p>Tech Stack</p>
        <ul>
          <li>
            <img src={htmlLogo} alt='Html5 Logo' />
          </li>
          <li>
            <img src={cssLogo} alt='CSS3 Logo' />
          </li>
          <li>
            <img src={sass} alt='Sass Logo' />
          </li>
          <li>
            <img src={react} alt='React Logo' />
          </li>
          <li>
            <img src={node} alt='Node Logo' />
          </li>
        </ul>
      </div>
    </HeroSectionStyles>
  );
}
