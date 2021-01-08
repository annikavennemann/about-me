import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        padding:0;
        font-family: 'Lato', sans-serif;
        font-weight: 300;
    }

    main {
        margin-top: 7em;
    }

    :root {
        --light-creme: #F4ECE6;
        --dark-creme: #E6DACE;
    }
`