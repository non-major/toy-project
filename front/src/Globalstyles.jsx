import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'S-CoreDream-4Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-4Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'S-CoreDream-4Regular';
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  section {
    display: flex;
    width: 550px;
    flex-direction: column;
justify-content: center;
align-items: center;
margin: 0 auto;
  }
`;

export default GlobalStyles;
// display: flex;

