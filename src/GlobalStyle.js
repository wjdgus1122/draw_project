import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainStyle = {
  mainBgColor: "#ECF2FF",
};

export const GlobalStyle = createGlobalStyle`
    ${reset}

    a{
        text-decoration: none;
        color: #1d1d1d;
    }

    body{
        box-sizing: border-box;
    }
`;
