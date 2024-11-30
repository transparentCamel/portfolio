import React from 'react';
import { ContactStyles } from './Contact.styles';
import ContactMarker from '../../components/contactMarker/ContactMarker';
import mapLocationSvg from '../../../assets/svg/map-locatio.svg';
import mailSvg from '../../../assets/svg/envelope.svg';
import linkedinSvg from '../../../assets/svg/linkedin-in.svg';
import gitHubSvg from '../../../assets/svg/github.svg';

export default function Contact() {
  return (
    <ContactStyles id='contacts'>
      <h3>CONTACTS</h3>
      <h2>Feel free to message me!</h2>
      <div className='markerContainer'>
        <ContactMarker
          svg={mapLocationSvg}
          header={'Location'}
          text={'Vilnius, Lithuania'}
        />
        <ContactMarker
          svg={mailSvg}
          header={'Mail'}
          text={'arvydas.peciulis23@gmail.com'}
          email={'arvydas.peciulis23@gmail.com'}
        />
      </div>
      <span className='contactIconsContainer'>
        <a
          href='https://www.linkedin.com/in/arvydas-pe%C4%8Diulis-2a7560213/'
          target='_blank'
        >
          <img src={linkedinSvg} alt='LinkedIn Icon' />
        </a>
        <a href='https://github.com/transparentCamel' target='_blank'>
          <img src={gitHubSvg} alt='GitHub Icon' />
        </a>
      </span>
    </ContactStyles>
  );
}
