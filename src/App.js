import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import CV from './components/CV'
import Footer from './components/Footer'
import Header from './components/Header'
import Impressum from './components/Impressum'
import Interests from './components/Interests'
import Privacy from './components/Privacy'
import Skills from './components/Skills'
import Welcome from './components/Welcome'
import { FiMenu } from 'react-icons/fi'
import Menu from './components/Menu'
import ToggleButton from './components/ToggleButton'
import { useState } from 'react'

function App() {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <Header />
      <DropdownMenu>
        <ToggleButton
          hideMenu={<FiMenu size="2.3em" color="#505050" />}
          showMenu={<Menu />}
          isActive={showMenu}
          onClick={() => setShowMenu(!showMenu)}
        />
      </DropdownMenu>

      <Switch>
        <Route path="/impressum">
          <Impressum />
        </Route>

        <Route path="/datenschutz">
          <Privacy />
        </Route>

        <Route path="/">
          <main>
            <Welcome />
            <Skills />
            <CV />
            <Interests />
          </main>
        </Route>
      </Switch>

      <Footer />
    </>
  )
}

export default App

const DropdownMenu = styled.nav`
  position: fixed;
  z-index: 10;

  button {
    right: 0;
    top: 0;
    position: fixed;
    background-color: transparent;
    color: #505050;
    border: none;

    svg {
      margin-top: 2em;
      margin-right: 1em;
    }
  }
`
