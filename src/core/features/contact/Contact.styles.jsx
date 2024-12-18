import styled from 'styled-components';

export const ContactStyles = styled.section`
  padding: 128px 256px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: #2d2e32;
  color: #ffff;
  @media screen and (max-width: 1740px) {
    padding: 96px 128px;
  }
  @media screen and (max-width: 1366px) {
    padding: 64px 64px;
  }

  @media screen and (max-width: 600px) {
    padding: 32px 32px;
  }
  h2,
  h3 {
    margin: 0px;
    @media screen and (max-width: 800px) {
      text-align: center;
    }
  }
  h3 {
    color: #71797e;
  }
  .markerContainer {
    display: flex;
    gap: 64px;
    margin-top: 64px;
    margin-bottom: 32px;
    align-items: center;
    @media screen and (max-width: 800px) {
      justify-content: center;
      flex-direction: column;
      gap: 32px;
    }
  }
  .contactIconsContainer {
    display: flex;
    gap: 32px;
    a {
      -webkit-tap-highlight-color: transparent;
      tap-highlight-color: transparent;
      outline: none;
      img {
        width: 32px;
      }
    }
    @media screen and (max-width: 800px) {
      justify-content: center;
    }
  }
`;
