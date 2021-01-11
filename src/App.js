
import { Route, Switch } from 'react-router-dom'
import CV from './components/CV'
import Footer from './components/Footer'
import Header from './components/Header'
import Impressum from './components/Impressum'
import Interests from './components/Interests'
import Privacy from './components/Privacy'
import Skills from './components/Skills'
import Welcome from './components/Welcome'

function App() {
  return (
    <>
        <Header />

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
