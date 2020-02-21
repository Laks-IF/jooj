import { createGlobalStyle } from 'styled-components';

import 'react-tiger-transition/styles/main.min.css';

const GlobalStyle = createGlobalStyle`
  /* Default */
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
    font-family: 'Ubuntu', sans-serif !important;
    text-decoration: none;
  }
  html, body, #root{
    width: 100%;
    height: 100%;
  }
  body {
    background-color: rgb(38, 50, 56);
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;

    --primary: #FF9F00;
    --primary-dark: #FF5821;
    --background: rgb(38, 50, 56);
    --content: rgb(68, 80, 86);
    --color: #f9f9f9;
    --color-light: #d9d9d9;
  }
  ::-webkit-scrollbar { display: none; }
  /* Toast Notification */
  .toast-notification-error,
  .toast-notification-info,
  .toast-notification-success,
  .toast-notification-warning {
    display:flex;
    .toast-notification-body {
      padding: 15px 30px;
      font-size: 14px;

      &:before {
        display: block;
        font-weight: bold;
        margin-bottom: 5px;
      }
    }
  }
  .toast-notification-error {
    background-color: red;
    .toast-notification-body:before {
      content: 'Error message:';
    }
  }
  .toast-notification-info {
    background-color: deepskyblue;
    .toast-notification-body:before {
      content: 'Info message:';
    }
  }
  .toast-notification-success {
    background-color: green;
    .toast-notification-body:before {
      content: 'Success message:';
    }
  }
  .toast-notification-warning {
    background-color: gold;
    .toast-notification-body:before {
      content: 'Warning message:';
    }
  }
`;

export default GlobalStyle;
