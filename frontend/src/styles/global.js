import { createGlobalStyle } from 'styled-components';

import colors from './colors';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
    border: none;
    background: transparent;
    -webkit-tap-highlight-color: transparent;
    font-family: 'Montserrat', sans-serif;
  }
  body.light{
    background-color: #FFFFFF;

    --background: #FFFFFF;
    --background-light: #FFFFFF;
    --background-dark: #EFF1F3;

    --color: #333;
    --color-light: #555;
    --color-dark: #222;
    
    --error: ${colors.error_light};
    --info: ${colors.info_light};
    --warning: ${colors.warning_light};
    --success: ${colors.success_light};
  }
  body.dark{
    background-color: #24292E;

    --background: #24292E;
    --background-light: #333842;
    --background-dark: #1B1D23;

    --color: rgb(157, 165, 180);
    --color-light: rgb(214, 216, 218);
    --color-dark: #395B7D;
    
    --error: ${colors.error_dark};
    --info: ${colors.info_dark};
    --warning: ${colors.warning_dark};
    --success: ${colors.success_dark};
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
  }
  ::-webkit-scrollbar {
	  width: 6px;
	  background-color: #F5F5F5;
  }
  ::-webkit-scrollbar-thumb {
	  background-color: #000000;
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
