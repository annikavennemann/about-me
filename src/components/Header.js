import styled from 'styled-components/macro'
import { FiMenu } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <HeaderStyled>
      <HeaderHeadline>
        <NavLinkStyled to="/">
          <h1>HR meets TECH</h1>
          <h2>Annika Vennemann</h2>
        </NavLinkStyled>
      </HeaderHeadline>
      <FiMenu size="2em" color="#505050" />
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
  z-index: 10;

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
    margin: 0;
    padding: 0.5em 1em;
    border-left: 1px solid black;
    text-transform: uppercase;
    font-size: 0.8em;
    font-weight: 100;
  }
`

const NavLinkStyled = styled(NavLink)`
  margin: 0;
  padding: 1em;
  font-weight: normal;
  text-decoration: none;
  padding: 2.5em auto;
  display: flex;
  align-items: center;

  h1 {
    color: #505050;

    &:hover {
      color: var(--green-grey);
    }
  }

  h2 {
    color: #505050;

    &:hover {
      color: var(--green-grey);
    }
  }
`
