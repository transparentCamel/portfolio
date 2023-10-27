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
          Motivated 4th year Computer Science student with a passion for
          Front-End development and a strong desire to work in an innovative
          environment. Completed Code Academy advanced Front-End courses with
          highest grades! Eager to apply and expand my skills in a challenging
          role that fosters continuous learning and creative problem-solving.
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
