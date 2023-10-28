import styled from 'styled-components';

export const ContactMarkerStyles = styled.div`
  cursor: pointer;

  a {
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #ffff;
    .svgBubble {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      box-shadow: 0px 0px 8px #e5e4e2;
      padding: 12px;
      width: 32px;
      height: 32px;
      background-color: #ffff;

      img {
      }
    }
    .contactTextContainer {
      display: flex;
      flex-direction: column;
      h4,
      p {
        margin: 0px;
      }
    }
    @media screen and (max-width: 800px) {
      flex-direction: column;

      .contactTextContainer {
        h4,
        p {
          text-align: center;
        }
      }
    }
  }
`;
