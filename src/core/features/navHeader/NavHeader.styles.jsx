import styled from 'styled-components';

export const NavHeaderStyles = styled.header`
  position: sticky;
  top: 0;
  background-color: #ffff;
  z-index: 9999;
  display: flex;
  flex-direction: row;
  padding: 0px 64px;
  user-select: none;
  box-shadow: 0px 4px 8px #e5e4e2;

  .hamburger {
    display: flex;
    flex-direction: column;
    gap: 4px;
    justify-content: center;
    margin-left: auto;
    cursor: pointer;
    transition: background-color 0.2s;
    padding: 0px 16px;
    -webkit-tap-highlight-color: transparent;
    tap-highlight-color: transparent;
    outline: none;

    div {
      height: 4px;
      width: 28px;
      background-color: #2d2e32;
    }
    @media screen and (min-width: 800px) {
      display: none;
    }
  }
  .active {
    :nth-child(1) {
      transform: translateY(8px) rotate(45deg);
      transition: transform 0.2s;
      width: 32px;
    }

    :nth-child(2) {
      transform: scaleX(0);
    }

    :nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
      transition: transform 0.2s;
      width: 32px;
    }
  }

  @media screen and (max-width: 800px) {
    padding: 8px 16px 8px 32px;
  }

  h2 {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    tap-highlight-color: transparent;
    outline: none;
  }

  nav {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;

    ul,
    li {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
    ul {
      display: flex;
      gap: 32px;
    }

    a {
      font-size: 18px;
      font-weight: 640;
      text-decoration: none;
      transition: color 0.2s;
      transition: background-color 0.2s;

      &:hover {
        color: #264de4;
        cursor: pointer;
        @media screen and (max-width: 800px) {
          background-color: #2d2e32;
          color: white;
        }
      }
    }

    @media screen and (max-width: 800px) {
      position: fixed;
      background-color: #ffff;
      width: 100%;
      top: 85px;
      left: 0px;
      justify-content: center;
      transition: left 0.4s ease;
      box-shadow: 0px 4px 8px #e5e4e2;

      ul {
        flex-direction: column;
        width: 100%;
        gap: 0px;

        li {
          text-align: center;
          padding: 16px 0px;
        }
      }
    }
  }
  @media screen and (max-width: 800px) {
    .open {
      top: 85px;
    }
    .closed {
      left: 800px;
    }
  }
`;
