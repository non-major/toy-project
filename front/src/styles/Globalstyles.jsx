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

  main {
    min-height: 100vh;
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  section {
    display: flex;
    width: 50vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding-bottom: 200px;
  }
`;

export default GlobalStyles;
