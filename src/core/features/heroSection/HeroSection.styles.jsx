import styled from 'styled-components';

export const HeroSectionStyles = styled.section`
  padding: 128px 24%;
  background-color: #f5f5f5;

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

  div {
    display: flex;
    flex-direction: row;
    gap: 64px;
    @media screen and (max-width: 800px) {
      flex-direction: column;
      align-items: center;
    }
    .textContainer {
      width: 60%;
      flex-direction: column;
      gap: 32px;
      @media screen and (max-width: 800px) {
        width: 100%;
      }
      h1 {
        font-size: 64px;
        margin: 0px;
        @media screen and (max-width: 1366px) {
          font-size: 48px;
        }
        @media screen and (max-width: 800px) {
          text-align: center;
        }
      }
      p {
        margin: 0px;
        max-width: 512px;
        @media screen and (max-width: 800px) {
          text-align: center;
        }
      }
      .locationContainer {
        height: 32px;
        p {
          display: flex;
          align-items: center;
          height: 100%;
          font-weight: bold;
          font-size: 24px;
          margin: 0px;
        }
        img {
          width: 24px;
          height: 24px;
          transform: translateY(-2px);
        }
      }
      span {
        display: flex;
        gap: 16px;
        align-items: center;
        -webkit-tap-highlight-color: transparent;
        tap-highlight-color: transparent;
        outline: none;

        a {
          display: flex;

          img {
            width: 64px;
            height: 64px;
          }
        }
      }
    }
    .heroImageContainer {
      width: 40%;
      img {
        width: 100%;
        border-radius: 32px;
        border: 4px solid #2d2e32;
        object-fit: cover;
      }
    }
  }
  .skillsContainer {
    margin-top: 32px;
    display: flex;
    align-items: center;
    gap: 32px;
    p {
      padding: 16px 32px 16px 0px;
      font-weight: bold;
      border-right: 2px solid #2d2e32;
      @media screen and (max-width: 800px) {
        border-right: none;
        border-bottom: 2px solid #2d2e32;
        text-align: center;
        padding: 16px 0px 32px 0px;
      }
    }
    ul {
      display: flex;
      gap: 32px;

      @media screen and (max-width: 800px) {
        justify-content: space-between;
        flex-wrap: wrap;
      }
    }
    ul,
    li {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;

      img {
        width: 64px;
        height: 64px;
      }
    }
  }
`;
