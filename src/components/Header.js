import styled from 'styled-components/macro'

export default function Header() {
    return (
        <HeaderStyled>
            <h1>HR meets TECH</h1>
            <h2>Annika Vennemann</h2>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    position: fixed;
    top: 0;
    padding: 3em auto;
    display: flex;
    align-items: center;
    background-color: white;

    h1 {
        margin: 0;
        padding: 1em;
        font-size: 1.5em;
        font-weight: normal;
    }

    h2 {
        margin:0;
        padding: 0.5em 1em;
        border-left: 1px solid black;
        text-transform: uppercase;
        font-size: 0.8em;
        font-weight: 100;
    }
`