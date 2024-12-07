import styled from 'styled-components';

export const HeroSectionStyles = styled.section`
  padding: 128px 256px;
  background-color: #f5f5f5;

  @media screen and (max-width: 1740px) {
    padding: 96px 128px;
  }
  @media screen and (max-width: 1366px) {
    padding: 64px 64px;
    height: auto;
  }

  @media screen and (max-width: 600px) {
    padding: 32px 32px;
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 64px;

    @media screen and (max-width: 1366px) {
      flex-direction: column;
      align-items: center;
    }
    .mainContainer {
      width: 60%;
      flex-direction: column;
      gap: 32px;

      @media screen and (max-width: 1366px) {
        width: 100%;
      }
      .textContainer {
        display: flex;
        flex-direction: column;
        gap: 32px;

        h1 {
          margin: 0px;
          @media screen and (max-width: 1366px) {
            text-align: center;
          }
        }
        .paragraphBox {
          display: flex;
          flex-direction: row;
          gap: 16px;
          justify-content: center;
          width: 100%;
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
          width: fit-content;
          margin-bottom: 32px;
          display: flex;
          align-items: center;
          gap: 16px;
          justify-content: center;
          @media screen and (max-width: 1366px) {
            width: 100%;
          }

          h2 {
            display: flex;
            align-items: center;
            height: 100%;
            font-weight: bold;

            margin: 0px;
          }
          img {
            width: 24px;
            height: 24px;
            transform: translateY(-2px);
          }
        }
        .socialContainer {
          display: flex;
          gap: 16px;
          align-items: center;
          -webkit-tap-highlight-color: transparent;
          tap-highlight-color: transparent;
          outline: none;
          margin-top: 32px;
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
    }
    .heroImageContainer {
      display: flex;
      flex-direction: column;
      gap: 0px;
      margin-left: auto;
      width: 20%;
      max-width: 384px;
      @media screen and (max-width: 1920px) {
        width: 100%;
      }
      @media screen and (max-width: 1366px) {
        margin-left: 0px;
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
        @media screen and (max-width: 1366px) {
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
      #myPhotoContainer,
      #myPhotoContainer #myPhoto {
        box-sizing: border-box;
      }

      #myPhotoContainer {
        padding: 24px 24px 64px 24px;
        border: 4px solid #2d2e32;

        overflow: hidden;
        #photoCOntainerChild {
          position: relative;
          overflow: hidden;
          .waves {
            position: absolute;
            width: 512px;
            height: 384px;
            top: 128px;
          }
          #myPhoto {
            border: 4px solid #2d2e32;
            width: 100%;
            overflow: hidden;
            object-fit: cover;
            z-index: 2;
          }
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

    h2 {
      font-weight: bold;
      text-align: center;
      margin: 0px;
    }

    #line {
      height: 2px;
      width: 40%;
      background-color: #2d2e32;
      @media screen and (max-width: 600px) {
        width: 60%;
      }
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 32px;
      justify-content: center;
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
