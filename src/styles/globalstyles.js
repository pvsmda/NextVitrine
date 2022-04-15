import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }
body{
    background-color: var(--dark);
 }
:root {
  /* cores */
  --purple: #873EFF;
  --green: #04D361;
  
  /* cores neutras*/
  --dark: #0E091B;
  --dark-200: #171228;
  --gray: #AEAEAE;
  --light: #F9f9f9;
  
  /* Fonts */
    --font-ibm: IBM Plex Mono, monospace;
    --font-dm: DM Sans, sans-serif
}`;