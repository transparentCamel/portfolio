import styled from 'styled-components';

export const ContactStyles = styled.section`
  padding: 128px 24%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: #2d2e32;
  color: #ffff;
  @media screen and (max-width: 1740px) {
    padding: 128px 16%;
  }
  @media screen and (max-width: 1366px) {
    padding: 128px 12%;
  }
  @media screen and (max-width: 800px) {
    padding: 128px 8%;
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
    }
  }
  .contactIconsContainer {
    display: flex;
    gap: 32px;
    a {
      img {
        width: 32px;
      }
    }
    @media screen and (max-width: 800px) {
      justify-content: center;
    }
  }
`;
