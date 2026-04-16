import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Especialidades from './components/Especialidades'
import Stats from './components/Stats'
import SobreClinica from './components/SobreClinica'
import ConsultaAvaliacao from './components/ConsultaAvaliacao'
import Equipa from './components/Equipa'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

import Implantologia from './components/Implantologia'
import Restauracao from './components/Restauracao'
import Branqueamento from './components/Branqueamento'
import Periodontologia from './components/Periodontologia'
import Ortodontia from './components/Ortodontia'
import PreenchimentoLabial from './components/PreenchimentoLabial'
import MedicinaDentaria from './components/MedicinaDentaria'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Admin from './components/Admin'

function ScrollToSection() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const scroll = () => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        } else {
          setTimeout(scroll, 100)
        }
      }
      scroll()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <SobreClinica />
      <Especialidades />
      <ConsultaAvaliacao />
      <Equipa />
      <Reviews />
    </>
  )
}

function Layout() {
  const { pathname } = useLocation()
  const hideLayout = pathname === '/admin'

  return (
    <>
      <ScrollToSection />
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/implantologia" element={<Implantologia />} />
        <Route path="/restauracao" element={<Restauracao />} />
        <Route path="/branqueamento" element={<Branqueamento />} />
        <Route path="/periodontologia" element={<Periodontologia />} />
        <Route path="/ortodontia" element={<Ortodontia />} />
        <Route path="/preenchimento-labial" element={<PreenchimentoLabial />} />
        <Route path="/medicina-dentaria" element={<MedicinaDentaria />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>

      {!hideLayout && <Footer />}
      {!hideLayout && <WhatsAppButton />}
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App