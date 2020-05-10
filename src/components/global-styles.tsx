import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    :root {

        --background:#292f36;
        --content:#353940;
        --text:#dcdfe4;

        --primary:#7cb7e1;

        --corner:5px;
        --shadow:0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

        --padding:1rem;
    }
    body {
        color: var(--text);
        background: var(--background);
        font-family: -apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,"Helvetica Neue",Arial,sans-serif;
        font-weight: 400;
        line-height: 1.5em;
        -moz-osx-font-smoothing: grayscale;
    }
`

export default GlobalStyles
