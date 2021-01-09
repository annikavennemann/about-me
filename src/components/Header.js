import styled from 'styled-components/macro'
import { FiMenu } from "react-icons/fi";

export default function Header() {
    return (

        <HeaderStyled>
            <HeaderHeadline>
                <h1>HR meets TECH</h1>
                <h2>Annika Vennemann</h2>
            </HeaderHeadline>
            <FiMenu size="2em" color="#505050"/>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    position: fixed;
    top: 0;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    background-color: white;

    svg {
        margin: 2em 2em 2em 0;
    }
`

const HeaderHeadline = styled.div`
    
    padding: 3em auto;
    display: flex;
    align-items: center;

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