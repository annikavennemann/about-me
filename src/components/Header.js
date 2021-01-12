import styled from 'styled-components/macro'
import Logo from '../images/logo-green.png'
// import { FiMenu } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
// import Menu from './Menu'
// import { useState } from 'react'
// import ToggleButton from './ToggleButton'

export default function Header() {
  // const [showMenu, setShowMenu] = useState(false)

  return (
    <HeaderStyled>
      <HeaderHeadline>
        <NavLinkStyled to="/">
          <h1>HR meets TECH</h1>
          <img src={Logo} alt="" />
          <h2>Annika Vennemann</h2>
        </NavLinkStyled>
      </HeaderHeadline>
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

  img {
    padding-left: 1em;
    height: 2em;
    width: auto;
    border-left: 0.5px solid #505050;
  }

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
    font-size: 1.2em;
    font-weight: normal;
  }

  h2 {
    margin: 0;
    padding: 0.5em 1em;
    text-transform: uppercase;
    font-size: 0.6em;
    font-weight: 100;
  }
`

const NavLinkStyled = styled(NavLink)`
  width: 270px;
  margin: 0;
  font-weight: normal;
  text-decoration: none;
  padding: 1.5em auto;
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

  @media only screen and (min-width: 600px) {
    width: 500px;

    h1 {
      font-size: 1.5em;
    }

    h2 {
      font-size: 1.2em;
    }
  }
`
