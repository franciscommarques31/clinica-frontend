import { useState } from 'react'
import './Hero.css'

const API_URL = import.meta.env.VITE_API_URL

export default function Hero() {
  const [showForm, setShowForm] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch(`${API_URL}/api/appointment-requests`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (!res.ok) {
        alert('Erro ao enviar pedido')
        return
      }

      alert('Pedido enviado com sucesso!')

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })

      setShowForm(false)

    } catch (err) {
      console.error(err)
      alert('Erro no servidor')
    }
  }

  return (
    <section className="hero">

      <video
        className="hero-bg-video"
        src="/video_clinica.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="hero-overlay" />

      <div className="hero-content">
        <h1>Clínica <span>Dentária de São Francisco</span></h1>

        <p>A saúde começa na sua boca.</p>

        <button
          className="btn-gold-fill"
          onClick={() => setShowForm(true)}
        >
          Agendar consulta
        </button>
      </div>

      {showForm && (
        <div className="appointment-modal">

          <div className="appointment-box">

            <button
              className="close-btn"
              onClick={() => setShowForm(false)}
            >
              ×
            </button>

            <h2>Agendar Consulta</h2>

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                name="name"
                placeholder="Nome"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="phone"
                placeholder="Telefone"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                placeholder="Mensagem"
                value={formData.message}
                onChange={handleChange}
                rows="4"
              />

              <button type="submit" className="btn-gold-fill">
                Enviar pedido
              </button>

            </form>

          </div>

        </div>
      )}
    </section>
  )
}