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
      li {
        a {
          font-size: 18px;
          font-weight: 640;
          text-decoration: none;
          transition: color 0.3s;
          &:hover {
            color: #264de4;
            cursor: pointer;
          }
        }
      }
    }
  }
`;
