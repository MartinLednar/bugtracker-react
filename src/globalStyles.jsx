import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --font-text: "Alegreya Sans", sans-serif;
    --font-heading: "Exo 2", sans-serif;
    --color-red: rgb(255, 25, 25);
    --color-green: rgb(60, 179, 30);
    --color-blue: rgb(39, 97, 255);
    --color-orange: rgb(255, 162, 0);
    --color-yellow: rgb(246, 255, 0);
  }

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
    margin: 0;
    padding: 0;
    background-color: rgb(255, 255, 255);
    font-family: var(--font-text);
    overflow-x: hidden;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
