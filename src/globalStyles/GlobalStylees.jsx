import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'Poppins';
    src: url('https://fonts.googleapis.com/css?family=Poppins');
    
  }
  ::-webkit-scrollbar {
    display:none;
  }
    body {       
      font-family: 'Poppins', Arial, sans-serif;
        margin:0px;
        padding:0px;
        color:#2d2e32;
        
        #root {
            display:flex;
            flex-direction:column;
        }
    }
`;
