import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  
  body {
    margin: 0;
    background-color: #f0f0f0;
    font-family: Roboto, Sans-Serif;
    font-size: 20px;
    color: black;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  h1, h2, h3 {
    font-family: Pacifico, Sans-Serif;
    padding: 0;
    margin: 0;
  }
  
  p {
    padding: 0;
    margin: 0;
  }
  button {
    cursor: pointer;
  }
  
  button, input {
    font: inherit;
  }
  
  input [type='number'] {
    -moz-appearance: textfield;
    -webkit-appearance: textfield;
  }
  input::-webkit-outer-spin-button, 
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  
  
  
`;