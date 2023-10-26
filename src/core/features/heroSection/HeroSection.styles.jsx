import styled from 'styled-components';

export const HeroSectionStyles = styled.section`
  padding: 128px 512px;
  background-color: #f5f5f5;
  div {
    display: flex;
    flex-direction: row;
    gap: 32px;
    .textContainer {
      width: 60%;
      flex-direction: column;
      justify-content: space-between;
      h1 {
        font-size: 64px;
        margin: 0px;
      }
      p {
        margin: 0px;
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
    align-items: center;
    margin-top: 32px;
    p {
      padding: 16px 32px 16px 0px;
      font-weight: bold;
      border-right: 1px solid #2d2e32;
    }
    ul {
      display: flex;
      gap: 32px;
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
