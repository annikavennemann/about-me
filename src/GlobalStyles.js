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
        color: #505050
    }

    main {
        margin-top: 6em;
    }

    :root {
        --light-creme: #F4ECE6;
        --dark-creme: #E6DACE;
        --green-grey: #8AA399;
    }
`