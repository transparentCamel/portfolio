import styled from 'styled-components';

export const NavHeaderStyles = styled.header`
  position: sticky;
  top: 0;
  background-color: #ffff;
  z-index: 9999;
  display: flex;
  flex-direction: row;
  padding: 8px 64px;
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

    &:hover {
      div {
        background-color: #264de4;
      }
    }

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
    padding: 8px 32px;
  }

  h2 {
    cursor: pointer;
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
      position: absolute;
      background-color: #ffff;
      width: 100%;
      left: 0px;
      justify-content: center;
      transition: transform 0.6s ease;
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
      transform: translateY(83px);
    }
    .closed {
      transform: translateX(100%) translateY(83px);
    }
  }
`;
