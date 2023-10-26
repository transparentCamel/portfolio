import React from 'react';
import { NavHeaderStyles } from './NavHeader.styles';

export default function NavHeader() {
  return (
    <NavHeaderStyles>
      <h2>arvii.dev</h2>
      <nav>
        <ul>
          <li>
            <a href=''>About</a>
          </li>
          <li>
            <a href=''>Projects</a>
          </li>
          <li>
            <a href=''>Contact</a>
          </li>
        </ul>
      </nav>
    </NavHeaderStyles>
  );
}
