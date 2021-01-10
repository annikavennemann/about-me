import Footer from './components/Footer'
import Header from './components/Header'
import Skills from './components/Skills'
import Welcome from './components/Welcome'

function App() {
  return (
    <div>
      <Header />
      <main>
        <Welcome />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}

export default App
