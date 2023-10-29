import styled from 'styled-components';

export const ProjectCardStyles = styled.div`
  padding: 16px;
  border-radius: 32px;
  background-color: #ffff;
  box-shadow: 0px 0px 8px #e5e4e2;
  display: flex;
  gap: 32px;
  flex-direction: row;
  align-items: center;

  .cardImgContainer {
    width: 50%;
    max-height: 256px;
    overflow: hidden;
    position: relative;
    border-radius: 16px;
    box-shadow: 0px 0px 8px #e5e4e2;
    flex: 1;
    cursor: none;

    img {
      width: 100%;
      object-fit: cover;
      position: relative;
      transition: transform 6s ease;
      &:hover {
        transform: translateY(-80%);
        @media screen and (max-width: 800px) {
          transform: translateY(-60%);
        }
      }
    }
  }
  .right {
    order: 1;
  }
  .cardTextContainer {
    flex: 1;
    header {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      h3 {
        color: #2d2e32;
      }
      p {
        font-weight: 600;
        color: #71797e;
      }
      img {
        width: 16px;
      }
      @media screen and (max-width: 440px) {
        flex-direction: column;
        margin-bottom: 8px;
        h3,
        p {
          margin: 0px;
        }
      }
    }
  }
  .technologyContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    div {
      font-weight: bold;
      padding: 16px;
      box-shadow: 0px 0px 8px #e5e4e2;
      border-radius: 16px;
    }
    @media screen and (max-width: 600px) {
      flex-wrap: wrap;
    }
  }
  .paragraph {
    text-align: center;
    margin-top: 0px;
    padding: 0px 32px;
  }
  .linksContainer {
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    & > :first-child:hover {
      transition: transform 0.3s;
      transform: scale(1.2);
    }
    & > :nth-child(2):hover {
      transition: transform 0.3s;
      transform: scale(1.2);
    }
    a {
      display: flex;
      gap: 8px;
      cursor: pointer;
      color: #2d2e32;
      text-decoration: none;
      -webkit-tap-highlight-color: transparent; /* For webkit-based browsers */
      tap-highlight-color: transparent; /* For non-webkit browsers */
      outline: none;

      p {
        font-weight: 600;
      }
      img {
        width: 24px;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    .cardImgContainer {
      order: 1;
      max-height: 256px;
    }
  }
`;
