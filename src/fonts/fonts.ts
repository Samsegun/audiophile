import { createGlobalStyle } from "styled-components";
import ManropeRegular from "./Manrope-Regular.ttf";
import ManropeMedium from "./Manrope-Medium.ttf";
import ManropeBold from "./Manrope-Bold.ttf";

export default createGlobalStyle`

    @font-face {
    font-family: 'Manrope';
    src:  url(${ManropeRegular}) format('truetype'), 
          url(${ManropeMedium}) format('truetype'),
          url(${ManropeBold}) format('truetype');
    font-style: normal;
    }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Manrope";
    }

    body {
        position: relative;
    }
`;
