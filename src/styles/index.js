import { createGlobalStyle } from "styled-components";

import colors from "./colors";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        -webkit-tap-highlight-color: transparent;
        border: none;
        background: transparent;
        font-family: 'Montserrat', sans-serif;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar-track {
        border-radius: 6px;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 6px;
    }

    body{
        --transition: all .2s ease-in-out;
        --border-radius: 4px;
        
        --font-small: max(12px, 0.75vw);
        --font-normal: max(18px, 1vw);
        --font-big: max(25px, 2vw);
    }
    body.dark{
        background-color: #24292E;
        --background: #24292E;
        --background-light: #333842;
        --background-dark: #1B1D23;
        --ripple: rgba(255,255,255,0.2);

        --color: rgb(157, 165, 180);
        --color-light: rgb(214, 216, 218);
        --color-dark: #395B7D;
        
        --box-shadow: none;

        --error: ${colors.error_dark};
        --info: ${colors.info_dark};
        --warning: ${colors.warning_dark};
        --success: ${colors.success_dark};

        ::-webkit-scrollbar-track {
            background: #333842; 
        }
        ::-webkit-scrollbar-thumb {
            background: #4E5154; 
        }
    }
    
    body.light{
        background-color: #f1f1f1;
        --background: #f1f1f1;
        --background-light: #FFFFFF;
        --background-dark: #EFF1F3;

        --ripple: rgba(0,0,0,0.2);

        --color: #333;
        --color-light: #555;
        --color-dark: #222;
        
        --box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.05);

        --error: ${colors.error_light};
        --info: ${colors.info_light};
        --warning: ${colors.warning_light};
        --success: ${colors.success_light};

        ::-webkit-scrollbar-track {
            background: #f1f1f1; 
        }
        ::-webkit-scrollbar-thumb {
            background: #999; 
        }
    }

    *.font-small{
        font-size: max(12px, 0.75vw);
    }
    *.font-normal{
        font-size: max(18px, 1vw);
    }
    *.font-big{
        font-size: max(25px, 2vw);
    }

    button{
        user-select: none;
        cursor: pointer;
    }
`;

export default GlobalStyle;
