import React from 'react';
import { AboutSectionStyles } from './AboutSection.styles';
import codingPhoto from '../../../assets/images/codingPhoto.jpg';
import vilniusTechLogo from '../../../assets/images/vilniusTechLogo.png';
import codeAcademyLogo from '../../../assets/images/codeAcademyLogo.png';
export default function AboutSection() {
  return (
    <AboutSectionStyles id='about'>
      <div className='aboutImageContainer'>
        <img id='aboutMeImg' src={codingPhoto} alt='' />
      </div>
      <div className='aboutTextContainer'>
        <h3>ABOUT ME</h3>
        <h2>A passionate Front-End Developer based in Vilnius, Lithuania</h2>
        <p>
          Creative Multimedia and Computer Design graduate from Vilnius Tech
          with a passion for Front-End development. Top of the class student
          graduated from advanced (440h) Front-End courses at Code Academy.
          Eager to apply and expand my skills in a challenging role that fosters
          continuous learning and creative problem-solving.
        </p>
        <div className='educationContainer'>
          <h2 id='educationHeader'>Education</h2>
          <img src={vilniusTechLogo} alt='Vilnius Tech Logo' />
          <img src={codeAcademyLogo} alt='Code Academy Logo' />
        </div>
      </div>
    </AboutSectionStyles>
  );
}
