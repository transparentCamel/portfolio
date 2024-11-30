import React, { useState } from 'react';
import { NavHeaderStyles } from './NavHeader.styles';
import { Link } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';

export default function NavHeader() {
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);

  const scrollToTop = () => {
    setIsHamburgerClicked(false);
    scroll.scrollToTop({
      duration: 800,
      smooth: 'easeInOutQuart',
    });
  };

  const toggleHamburger = () => {
    setIsHamburgerClicked(!isHamburgerClicked);
  };

  const closeMenu = () => {
    setIsHamburgerClicked(false);
  };

  return (
    <NavHeaderStyles
      className={isHamburgerClicked ? 'openHeader' : 'closedHeader'}
    >
      <h2 onClick={scrollToTop}>arvii.web</h2>
      <span
        className={`hamburger ${isHamburgerClicked ? 'active' : ''}`}
        onClick={toggleHamburger}
      >
        <div></div>
        <div></div>
        <div></div>
      </span>
      <nav className={isHamburgerClicked ? 'open' : 'closed'}>
        <ul>
          <Link to='about' smooth={true} duration={800} onClick={closeMenu}>
            <li>About</li>
          </Link>
          <Link to='projects' smooth={true} duration={800} onClick={closeMenu}>
            <li>Projects</li>
          </Link>
          <Link to='contacts' smooth={true} duration={800} onClick={closeMenu}>
            <li>Contacts</li>
          </Link>
        </ul>
      </nav>
    </NavHeaderStyles>
  );
}
