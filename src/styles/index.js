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
            
        ::-webkit-scrollbar-track {
            background: #333842; 
        }
        ::-webkit-scrollbar-thumb {
            background: #4E5154; 
        }
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

        ::-webkit-scrollbar-track {
            background: #f1f1f1; 
        }
        ::-webkit-scrollbar-thumb {
            background: #999; 
        }
    }

    body{
        height: 400vh;

    }
`;

export default GlobalStyle;
