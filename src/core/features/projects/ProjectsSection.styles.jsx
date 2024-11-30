import styled from 'styled-components';

export const ProjectSectionStyles = styled.section`
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

    h2,
    h3 {
      text-align: center;
    }
  }

  h3 {
    color: #264de4;
  }
  h2 {
    margin-bottom: 64px;
  }

  .projectCardContainer {
    display: flex;
    flex-direction: column;
    gap: 64px;

    :first-child {
      .cardImgContainer {
        img {
          &:hover {
            transform: translateY(-84%);
          }
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    padding: 64px 8%;
  }
`;
