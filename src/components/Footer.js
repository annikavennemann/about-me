import styled from 'styled-components/macro'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaXing } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { BsFillEnvelopeFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <FooterStyled>
      <Copyright>
        <p>&copy; 2021 Annika Vennemann</p>
        <ul>
          <li>
            <NavLinkStyled to="/impressum">
              <span>Impressum</span>
            </NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/datenschutz">
              <span>Datenschutz</span>
            </NavLinkStyled>
          </li>
        </ul>
        <nav>
          <Wrapper>
            <Write>Write</Write>
            <a href="mailto:annikavennemann@aol.com">
              <BsFillEnvelopeFill size="1em" color="#505050" padding="0.3em" />
            </a>
          </Wrapper>
          <Wrapper>
            <Follow>Follow</Follow>
            <SocialMediaWrapper>
              <a href="https://www.linkedin.com/in/annikavennemann/">
                <FaLinkedinIn size="1.5em" color="#505050" />
              </a>
              <a href="https://www.xing.com/profile/Annika_Vennemann/cv">
                <FaXing size="1.5em" color="#505050" />
              </a>
              <a href="https://github.com/annikavennemann">
                <FaGithub size="1.5em" color="#505050" />
              </a>
            </SocialMediaWrapper>
          </Wrapper>
        </nav>
      </Copyright>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  bottom: 0;
  margin-top: 1px;
  width: 100%;
  z-index: 10;
  background-color: white;

  nav {
    display: flex;
  }
`

const Wrapper = styled.div`
  padding: 0.5em 1.7em 0.5em 0.4em;
  margin: 0;
  list-style: none;
  justify-content: space-between;
  align-items: center;
`

const Copyright = styled.div`
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 600px) {
      flex-direction: row;
    }
  }

  li {
    list-style: none;
    margin-left: -1.8em;
    padding-right: 1em;

    @media screen and (min-width: 600px) {
      padding: 0 1.5em;
    }
  }

  p {
    margin: 0;
    padding: 1em;
    display: flex;
    align-items: flex-end;
    font-size: 0.7em;
    font-weight: lighter;
  }
`

const NavLinkStyled = styled(NavLink)`
  margin: 0;
  padding: 0.3em;
  display: flex;
  align-items: flex-end;
  font-size: 0.7em;
  font-weight: lighter;
  color: #505050;
  text-decoration: none;

  &:hover {
    color: var(--green-grey);
  }

  &:visited {
    color: #505050;
  }
`

const Write = styled.h4`
  margin: 0;
  padding: 0.3em 0 0.7em 0;
  font-size: 0.8em;
  font-weight: normal;
  text-transform: uppercase;
`

const Follow = styled.h4`
  margin: 0;
  padding: 0.3em;
  font-size: 0.8em;
  font-weight: normal;
  text-transform: uppercase;
`

const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;

  svg {
    padding: 0.3em;
  }
`
