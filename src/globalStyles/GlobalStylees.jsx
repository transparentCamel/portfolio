import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'Poppins';
    src: url('../assets/fonts/POPPINS-REGULAR.TTF');
    
  }
  ::-webkit-scrollbar {
    display:none;
  }
    body {        
        font-family: 'Poppins';
        margin:0px;
        padding:0px;
        color:#2d2e32;
        #root {
            display:flex;
            flex-direction:column;
        }
    }
`;
