import './App.css'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {

  return (
    <div className="container mx-auto">
      <Header />
      <Hero />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
