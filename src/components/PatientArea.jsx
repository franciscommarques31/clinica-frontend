import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './PatientArea.css'

const API_URL = import.meta.env.VITE_API_URL

export default function PatientArea() {
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('marcar')

  const token = localStorage.getItem('token')
  const patientId = localStorage.getItem('patientId')
  const patientName = localStorage.getItem('patientName')

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  }

  const [consultations, setConsultations] = useState([])
  const [invoices, setInvoices] = useState([])
  const [availableSlots, setAvailableSlots] = useState([])

  const [formData, setFormData] = useState({
    appointmentDate: '',
    appointmentTime: '',
    message: ''
  })

  useEffect(() => {
    if (!token || !patientId) {
      navigate('/login')
      return
    }
    fetchConsultations()
    fetchInvoices()
  }, [])

  const fetchConsultations = async () => {
    try {
      const res = await fetch(`${API_URL}/api/consultations/patient/${patientId}`, { headers })
      if (res.ok) setConsultations(await res.json())
    } catch (err) {
      console.error(err)
    }
  }

  const fetchInvoices = async () => {
    try {
      const res = await fetch(`${API_URL}/api/invoices/patient/${patientId}`, { headers })
      if (res.ok) setInvoices(await res.json())
    } catch (err) {
      console.error(err)
    }
  }

  const fetchSlots = async (date) => {
    try {
      const res = await fetch(`${API_URL}/api/appointment-requests/available-slots/${date}`)
      if (res.ok) setAvailableSlots(await res.json())
    } catch (err) {
      console.error(err)
    }
  }

  const submitAppointment = async () => {
    if (!formData.appointmentDate || !formData.appointmentTime) {
      alert('Escolha uma data e hora')
      return
    }

    try {
      const res = await fetch(`${API_URL}/api/appointment-requests`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          name: patientName,
          email: '',
          phone: '',
          message: formData.message,
          appointmentDate: formData.appointmentDate,
          appointmentTime: formData.appointmentTime
        })
      })

      if (res.ok) {
        alert('Consulta marcada com sucesso!')
        setFormData({ appointmentDate: '', appointmentTime: '', message: '' })
        setAvailableSlots([])
      }
    } catch (err) {
      console.error(err)
      alert('Erro ao marcar consulta')
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('patientId')
    localStorage.removeItem('patientName')
    localStorage.removeItem('role')
    navigate('/login')
  }

  const navItems = [
    { section: 'marcar', label: 'Marcar Consulta', icon: '📅' },
    { section: 'consultas', label: 'As Minhas Consultas', icon: '🩺' },
    { section: 'faturas', label: 'As Minhas Faturas', icon: '🧾' },
  ]

  const sectionTitles = {
    marcar: 'Marcar Consulta',
    consultas: 'As Minhas Consultas',
    faturas: 'As Minhas Faturas',
  }

  return (
    <div className="patient-layout">

      <aside className="patient-sidebar">
        <div className="sidebar-brand">
          <span className="sidebar-brand-icon">✦</span>
          <span className="sidebar-brand-main">CLÍNICA</span>
          <span className="sidebar-brand-sub">Área do Paciente</span>
        </div>

        <nav className="patient-nav">
          {navItems.map((item) => (
            <div
              key={item.section}
              className={`patient-nav-item ${activeSection === item.section ? 'active' : ''}`}
              onClick={() => setActiveSection(item.section)}
            >
              <span className="patient-nav-icon">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </nav>

        <div className="patient-sidebar-footer">
          <p>{patientName} · Paciente</p>
          <button className="patient-sidebar-logout" onClick={logout}>Sair</button>
        </div>
      </aside>

      <div className="patient-main">
        <header className="patient-topbar">
          <h1 className="patient-topbar-title">{sectionTitles[activeSection]}</h1>
          <div className="patient-topbar-avatar">
            {patientName ? patientName[0].toUpperCase() : 'P'}
          </div>
        </header>

        <div className="patient-content">

          {/* MARCAR CONSULTA */}
          {activeSection === 'marcar' && (
            <div className="patient-form-card">
              <h3 className="patient-form-title">Nova marcação</h3>

              <div className="patient-form-grid">
                <div>
                  <label style={{ fontSize: 11, color: '#888', display: 'block', marginBottom: 6 }}>Data</label>
                  <input
                    className="patient-input"
                    type="date"
                    value={formData.appointmentDate}
                    onChange={(e) => {
                      const date = e.target.value
                      setFormData({ ...formData, appointmentDate: date, appointmentTime: '' })
                      fetchSlots(date)
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: 11, color: '#888', display: 'block', marginBottom: 6 }}>Mensagem (opcional)</label>
                  <input
                    className="patient-input"
                    placeholder="Ex: consulta de rotina"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
              </div>

              {availableSlots.length > 0 && (
                <div>
                  <label style={{ fontSize: 11, color: '#888', display: 'block', marginBottom: 8 }}>Escolha a hora</label>
                  <div className="slots-wrap">
                    {availableSlots.map((slot) => (
                      <button
                        key={slot}
                        className={`slot-btn ${formData.appointmentTime === slot ? 'selected' : ''}`}
                        onClick={() => setFormData({ ...formData, appointmentTime: slot })}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <button
                className="patient-btn"
                style={{ marginTop: 16 }}
                onClick={submitAppointment}
              >
                Marcar consulta
              </button>
            </div>
          )}

          {/* CONSULTAS */}
          {activeSection === 'consultas' && (
            <div className="patient-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {consultations.map((c, i) => (
                    <tr key={i}>
                      <td>{new Date(c.date).toLocaleDateString('pt-PT')}</td>
                      <td>{c.description}</td>
                      <td>
                        <span className="patient-badge patient-badge-blue">{c.status}</span>
                      </td>
                    </tr>
                  ))}
                  {consultations.length === 0 && (
                    <tr><td colSpan={3} className="patient-empty">Sem consultas</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* FATURAS */}
          {activeSection === 'faturas' && (
            <div className="patient-table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Ficheiro</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((inv, i) => (
                    <tr key={i}>
                      <td>{new Date(inv.createdAt).toLocaleDateString('pt-PT')}</td>
                      <td>{inv.file}</td>
                    </tr>
                  ))}
                  {invoices.length === 0 && (
                    <tr><td colSpan={2} className="patient-empty">Sem faturas</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}