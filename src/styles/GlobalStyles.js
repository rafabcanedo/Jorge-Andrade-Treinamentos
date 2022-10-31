import { createGlobalStyle } from 'styled-components';
import "@fontsource/poppins";


const GlobalStyles = createGlobalStyle`

 :root {
  --background: #ecf0f3;

  --blue-dark: #010326;
  
  --green-light: #42b883;
  --green-dark: #347474;

  --yellow: #eaf205;

  --cinza-clean: #3c3e41;
 }

 * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
 }

 body {
  font-family: "Poppins", sans-serif;
  background-color: var(--background);
 }

 a {
  text-decoration: none;
  color: black;
}
`;

export default GlobalStyles;