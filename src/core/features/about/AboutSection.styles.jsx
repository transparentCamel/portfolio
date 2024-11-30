import styled from 'styled-components';

export const AboutSectionStyles = styled.section`
  display: flex;
  flex-direction: row;
  padding: 128px 24%;
  gap: 64px;

  @media screen and (max-width: 1740px) {
    padding: 128px 16%;
  }
  @media screen and (max-width: 1366px) {
    padding: 128px 12%;
  }
  @media screen and (max-width: 800px) {
    padding: 128px 8%;
  }
  @media screen and (max-width: 600px) {
    padding: 64px 8%;
  }

  .aboutImageContainer {
    display: flex;
    width: 40%;
    @media screen and (max-width: 1366px) {
      display: none;
    }

    #aboutMeImg {
      width: 100%;
      border-radius: 32px;
      object-fit: cover;
    }
  }
  .aboutTextContainer {
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex: 1;

    @media screen and (max-width: 1366px) {
      align-items: center;
      justify-content: center;
    }

    h2,
    h3,
    p {
      margin: 0px;
      @media screen and (max-width: 1366px) {
        text-align: center;
      }
    }

    h3 {
      color: #264de4;
    }
    .educationContainer {
      width: 100%;
      margin: 32px 0px;
      gap: 32px;
      display: flex;
      @media screen and (max-width: 1366px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 64px;
      }

      h2 {
        height: 48px;
        padding-right: 32px;
        border-right: 2px solid #2d2e32;
        display: flex;
        align-items: center;
        @media screen and (max-width: 1366px) {
          border-bottom: 2px solid #2d2e32;
          border-right: none;
          padding-right: 0px;
          padding-bottom: 32px;
        }
      }

      img {
        max-height: 48px;
        @media screen and (max-width: 1366px) {
          max-height: 64px;
        }
      }
    }
  }
`;
