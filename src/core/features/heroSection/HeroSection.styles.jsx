import styled from 'styled-components';

export const HeroSectionStyles = styled.section`
  padding: 96px 24%;
  background-color: #f5f5f5;

  @media screen and (max-width: 1740px) {
    padding: 96px 20%;
  }
  @media screen and (max-width: 1366px) {
    padding: 96px 16%;
  }
  @media screen and (max-width: 800px) {
    padding: 96px 12%;
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
      .paragraphBox {
        display: flex;
        flex-direction: row;
        gap: 16px;

        img {
          width: 32px;
          height: 100%;
        }
        :last-child {
          transform: rotate(180deg);
        }
      }
      p {
        margin: 0px;
        width: 100%;
        text-align: center;
      }
      .locationContainer {
        height: 32px;
        width: fit-content;

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
          position: relative;

          #linkedInHover {
            position: absolute;
            top: 8px;
            left: 8px;
            width: 48px;
            height: 48px;
            z-index: auto;
            background-color: #0077b5;
          }
          #gitHover {
            position: absolute;
            top: 8px;
            left: 8px;
            width: 48px;
            height: 48px;
            z-index: auto;
            background-color: #2dba4e;
          }
          img {
            z-index: 1;
            width: 64px;
            height: 64px;
          }
        }
      }
    }
    .heroImageContainer {
      display: flex;
      flex-direction: column;
      gap: 0px;
      width: 40%;
      @media screen and (max-width: 800px) {
        width: 100%;
      }
      .polaroidContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        #polaroid {
          width: 60%;
          bottom: 0px;
          z-index: 1;
        }
      }

      .flashContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        @media screen and (max-width: 800px) {
          width: 100%;
        }
        .trapezoidContainer {
          margin-top: 32px;
          border-radius: 100%;
          overflow: hidden;
          width: 60%;
          display: flex;
          flex-direction: row;
          gap: 0px;
          height: 256px;
          .trapezoid {
            height: 100%;
            width: 100%;
          }

          #trapezoidOne {
            background-color: #2ea9e0;
            clip-path: polygon(0 0, 20% 0, 100% 100%, 80% 100%);
          }

          #trapezoidTwo {
            background-color: #a1c935;
            clip-path: polygon(20% 0, 40% 0, 80% 100%, 60% 100%);
          }
          #trapezoidThree {
            background-color: #ffff00;
            clip-path: polygon(40% 0, 60% 0, 60% 100%, 40% 100%);
          }
          #trapezoidFour {
            background-color: #ff6201;
            clip-path: polygon(60% 0, 80% 0, 40% 100%, 20% 100%);
          }

          #trapezoidFive {
            background-color: #ec539f;
            clip-path: polygon(80% 0, 100% 0%, 20% 100%, 0% 100%);
          }
        }
      }

      #myPhotoContainer {
        height: 50%;
        border-radius: 32px;
        border: 4px solid #2d2e32;
        overflow: hidden;
        img {
          width: 100%;

          object-fit: cover;
        }
      }
    }
  }
  .skillsContainer {
    flex-direction: column;
    height: 100%;
    display: flex;
    align-items: center;
    justify-items: center;
    gap: 32px;

    p {
      font-weight: bold;
      text-align: center;
    }

    #line {
      height: 2px;
      width: 60%;

      background-color: #2d2e32;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      justify-content: space-between;
      width: 100%;
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
