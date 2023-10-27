import React from 'react';
import { NavHeaderStyles } from './NavHeader.styles';
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';

export default function NavHeader() {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 800,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <NavHeaderStyles>
      <h2 onClick={scrollToTop}>arvii.dev</h2>
      <nav>
        <ul>
          <li>
            <Link to='about' smooth={true} duration={800}>
              About
            </Link>
          </li>
          <li>
            <Link to='projects' smooth={true} duration={800}>
              Projects
            </Link>
          </li>
          <li>
            <Link to='contacts' smooth={true} duration={800}>
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </NavHeaderStyles>
  );
}
