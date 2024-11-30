import React from 'react';
import { ContactMarkerStyles } from './ContactMarker.styles';

export default function ContactMarker({ svg, header, text, email }) {
  const handleLinkClick = (e) => {
    e.preventDefault();
    if (email) {
      window.location.href = `mailto:${email}`;
    }
  };
  return (
    <ContactMarkerStyles>
      <a href='#' onClick={handleLinkClick}>
        <span className='svgBubble'>
          <img src={svg} alt='Svg' />
        </span>

        <span className='contactTextContainer'>
          <h4>{header}</h4>
          <p>{text}</p>
        </span>
      </a>
    </ContactMarkerStyles>
  );
}
