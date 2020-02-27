import { createGlobalStyle } from "styled-components";
export default createGlobalStyle(
  () => `
  
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap');
  
  * {
    font-family: 'IBM Plex Sans', sans-serif;
    box-sizing: border-box;
  }

  html, body {
    display: flex;
    margin:0;
    padding:0;
    flex-direction: column;
  }

  #root {
    min-height: 100vh;
    display: grid;
    overflow: hidden;
  }

  a, a:hover {
    text-decoration: none;
  }

  input, textarea, select {
    box-sizing: border-box;
  }

  input[type="text"],
  input[type="search"],
  textarea, {
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
  }

  h1, h2, h3, h4, h5, h6 {
    padding: 0;
    margin: 0;
  }

  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  .container {
    padding: 20px;
  }

  .hidden {
    display: none !important;
  }

  .djs-palette {
    left: 0;
  }

  `
);
