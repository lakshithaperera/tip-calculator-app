import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Space Mono', monospace;
   }


   body{
    background: ${({theme}) => theme.colors.body};
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
   }

   svg{
     
     width: 9px;
     height: 16px;
     position: absolute;
     left: 10px;
 
    

   }
   h5{
    line-height: 1.5;
   }

`
   export default GlobalStyles
