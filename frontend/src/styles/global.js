import { createGlobalStyle } from 'styled-components';

import colors from './colors';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }
  body.light{
    background-color: #FFFFFF;

    --background: #FFFFFF;
    --background-light: #FFFFFF;
    --background-dark: #EFF1F3;

    --color: rgb(157, 165, 180);
    --color-light: rgb(214, 216, 218);
    --color-dark: #395B7D;
    
    --error: ${error_light};
    --info: ${info_light};
    --warning: ${warning_light};
    --success: ${success_light};
  }
  body.dark{
    background-color: #24292E;

    --background: #24292E;
    --background-light: #333842;
    --background-dark: #1B1D23;

    --color: rgb(157, 165, 180);
    --color-light: rgb(214, 216, 218);
    --color-dark: #395B7D;
    
    --error: ${error_dark};
    --info: ${info_dark};
    --warning: ${warning_dark};
    --success: ${success_dark};
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, textarea {
    font-family: 'Ubuntu', sans-serif !important;
  }
  a, button {
    outline: none;
  }

  /* Toast Notification */
  .toast-notification-error,
  .toast-notification-info,
  .toast-notification-success,
  .toast-notification-warning {
    display:flex;
    .toast-notification-body {
      padding: 8px 14px;
      font-size: 14px;

      &:before {
        display: block;
        font-weight: bold;
        margin-bottom: 5px;
      }
    }
  }
  .toast-notification-error {
    background-color: var(--error);
    .toast-notification-body:before {
      content: 'Error message:';
    }
  }
  .toast-notification-info {
    background-color: var(--info);
    .toast-notification-body:before {
      content: 'Info message:';
    }
  }
  .toast-notification-success {
    background-color: var(--success);
    .toast-notification-body:before {
      content: 'Success message:';
    }
  }
  .toast-notification-warning {
    background-color: var(--warning);
    .toast-notification-body:before {
      content: 'Warning message:';
    }
  }
`;

export default GlobalStyle;
