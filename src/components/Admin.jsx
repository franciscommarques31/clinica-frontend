import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Admin.css'

export default function Admin() {
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('dashboard')

  // Estados
  const [appointments, setAppointments] = useState([])
  const [patients, setPatients] = useState([])
  const [invites, setInvites] = useState([])
  const [consultations, setConsultations] = useState([])
  const [invoices, setInvoices] = useState([])
  const [staff, setStaff] = useState([])

  // Formulários
  const [inviteEmail, setInviteEmail] = useState('')
  const [newStaff, setNewStaff] = useState({ name: '', specialty: '', photo: '' })
  const [newConsultation, setNewConsultation] = useState({ patientId: '', date: '', description: '', status: '' })
  const [newInvoice, setNewInvoice] = useState({ patientId: '', file: '' })

  const token = localStorage.getItem('token')
  const headers = { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }

  useEffect(() => {
    if (!token) { navigate('/login'); return }
    fetchAll()
  }, [])

  const fetchAll = async () => {
    fetchAppointments()
    fetchPatients()
    fetchInvites()
    fetchStaff()
  }

  const fetchAppointments = async () => {
    const res = await fetch('http://localhost:5000/api/appointment-requests', { headers })
    setAppointments(await res.json())
  }

  const fetchPatients = async () => {
    const res = await fetch('http://localhost:5000/api/patients', { headers })
    setPatients(await res.json())
  }

  const fetchInvites = async () => {
    const res = await fetch('http://localhost:5000/api/invites', { headers })
    setInvites(await res.json())
  }

  const fetchStaff = async () => {
    const res = await fetch('http://localhost:5000/api/staff', { headers })
    setStaff(await res.json())
  }

  const fetchConsultations = async (patientId) => {
    const res = await fetch(`http://localhost:5000/api/consultations/patient/${patientId}`, { headers })
    setConsultations(await res.json())
  }

  const fetchInvoices = async (patientId) => {
    const res = await fetch(`http://localhost:5000/api/invoices/patient/${patientId}`, { headers })
    setInvoices(await res.json())
  }

  const createInvite = async () => {
    if (!inviteEmail) return alert('Insira um email')
    await fetch('http://localhost:5000/api/invites', {
      method: 'POST', headers,
      body: JSON.stringify({ email: inviteEmail })
    })
    setInviteEmail('')
    fetchInvites()
  }

  const deleteInvite = async (id) => {
    await fetch(`http://localhost:5000/api/invites/${id}`, { method: 'DELETE', headers })
    fetchInvites()
  }

  const createStaff = async () => {
    await fetch('http://localhost:5000/api/staff', {
      method: 'POST', headers,
      body: JSON.stringify(newStaff)
    })
    setNewStaff({ name: '', specialty: '', photo: '' })
    fetchStaff()
  }

  const deleteStaff = async (id) => {
    await fetch(`http://localhost:5000/api/staff/${id}`, { method: 'DELETE', headers })
    fetchStaff()
  }

  const createConsultation = async () => {
    await fetch('http://localhost:5000/api/consultations', {
      method: 'POST', headers,
      body: JSON.stringify(newConsultation)
    })
    setNewConsultation({ patientId: '', date: '', description: '', status: '' })
    if (newConsultation.patientId) fetchConsultations(newConsultation.patientId)
  }

  const createInvoice = async () => {
    await fetch('http://localhost:5000/api/invoices', {
      method: 'POST', headers,
      body: JSON.stringify(newInvoice)
    })
    setNewInvoice({ patientId: '', file: '' })
    if (newInvoice.patientId) fetchInvoices(newInvoice.patientId)
  }

  const logout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  const navItems = [
    { section: 'geral', label: null },
    { section: 'dashboard', label: 'Dashboard', icon: '▦' },
    { section: 'appointments', label: 'Pedidos de Consulta', icon: '📅' },
    { section: 'pacientes', label: null },
    { section: 'patients', label: 'Pacientes', icon: '👤' },
    { section: 'invites', label: 'Convites', icon: '✉️' },
    { section: 'consultations', label: 'Consultas', icon: '🩺' },
    { section: 'invoices', label: 'Faturas', icon: '🧾' },
    { section: 'clinica', label: null },
    { section: 'staff', label: 'Equipa / Staff', icon: '👥' },
  ]

  const sectionTitles = {
    dashboard: 'Dashboard',
    appointments: 'Pedidos de Consulta',
    patients: 'Pacientes',
    invites: 'Convites',
    consultations: 'Consultas',
    invoices: 'Faturas',
    staff: 'Equipa / Staff',
  }

  const groupLabels = { geral: 'Geral', pacientes: 'Pacientes', clinica: 'Clínica' }

  return (
    <div className="admin-layout">

      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="sidebar-brand">
          <span className="sidebar-brand-icon">✦</span>
          <span className="sidebar-brand-main">CLÍNICA</span>
          <span className="sidebar-brand-sub">Painel de Administração</span>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item, i) => {
            if (!item.label) return (
              <div className="sidebar-group-label" key={i}>
                {groupLabels[item.section]}
              </div>
            )
            return (
              <div
                key={item.section}
                className={`nav-item ${activeSection === item.section ? 'active' : ''}`}
                onClick={() => {
                  setActiveSection(item.section)
                  if (item.section === 'consultations') fetchConsultations('')
                  if (item.section === 'invoices') fetchInvoices('')
                }}
              >
                <span className="nav-icon">{item.icon}</span>
                {item.label}
              </div>
            )
          })}
        </nav>

        <div className="sidebar-footer">
          <p>Admin · Sessão ativa</p>
          <button className="sidebar-logout" onClick={logout}>Sair</button>
        </div>
      </aside>

      {/* Main */}
      <div className="admin-main">
        <header className="admin-topbar">
          <h1 className="topbar-title">{sectionTitles[activeSection]}</h1>
          <div className="topbar-right">
            {appointments.length > 0 && (
              <span className="topbar-badge">{appointments.length} pedidos</span>
            )}
            <div className="topbar-avatar">A</div>
          </div>
        </header>

        <div className="admin-content">

          {/* DASHBOARD */}
          {activeSection === 'dashboard' && (
            <>
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-label">Pacientes</div>
                  <div className="stat-val">{patients.length}</div>
                  <div className="stat-sub">registados</div>
                </div>
                <div className="stat-card">
                  <div className="stat-label">Pedidos</div>
                  <div className="stat-val">{appointments.length}</div>
                  <div className="stat-sub">por responder</div>
                </div>
                <div className="stat-card">
                  <div className="stat-label">Convites</div>
                  <div className="stat-val">{invites.length}</div>
                  <div className="stat-sub">pendentes</div>
                </div>
                <div className="stat-card">
                  <div className="stat-label">Staff</div>
                  <div className="stat-val">{staff.length}</div>
                  <div className="stat-sub">membros</div>
                </div>
              </div>

              <h2 className="section-title">Últimos pedidos de consulta</h2>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr><th>Nome</th><th>Email</th><th>Telefone</th><th>Mensagem</th></tr>
                  </thead>
                  <tbody>
                    {appointments.slice(0, 5).map((a, i) => (
                      <tr key={i}>
                        <td>{a.name}</td>
                        <td>{a.email}</td>
                        <td>{a.phone}</td>
                        <td>{a.message}</td>
                      </tr>
                    ))}
                    {appointments.length === 0 && (
                      <tr><td colSpan={4} className="empty">Sem pedidos</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* PEDIDOS DE CONSULTA */}
          {activeSection === 'appointments' && (
            <>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr><th>Nome</th><th>Email</th><th>Telefone</th><th>Mensagem</th></tr>
                  </thead>
                  <tbody>
                    {appointments.map((a, i) => (
                      <tr key={i}>
                        <td>{a.name}</td>
                        <td>{a.email}</td>
                        <td>{a.phone}</td>
                        <td>{a.message}</td>
                      </tr>
                    ))}
                    {appointments.length === 0 && (
                      <tr><td colSpan={4} className="empty">Sem pedidos</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* PACIENTES */}
          {activeSection === 'patients' && (
            <>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr><th>Nome</th><th>Email</th><th>ID</th></tr>
                  </thead>
                  <tbody>
                    {patients.map((p, i) => (
                      <tr key={i}>
                        <td>{p.name}</td>
                        <td>{p.email}</td>
                        <td className="mono">{p._id}</td>
                      </tr>
                    ))}
                    {patients.length === 0 && (
                      <tr><td colSpan={3} className="empty">Sem pacientes</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* CONVITES */}
          {activeSection === 'invites' && (
            <>
              <div className="form-card">
                <h3 className="form-title">Criar convite</h3>
                <div className="form-row">
                  <input
                    className="admin-input"
                    type="email"
                    placeholder="Email do paciente"
                    value={inviteEmail}
                    onChange={(e) => setInviteEmail(e.target.value)}
                  />
                  <button className="admin-btn" onClick={createInvite}>Enviar convite</button>
                </div>
              </div>

              <div className="table-wrap">
                <table>
                  <thead>
                    <tr><th>Email</th><th>Token</th><th>Data</th><th></th></tr>
                  </thead>
                  <tbody>
                    {invites.map((inv, i) => (
                      <tr key={i}>
                        <td>{inv.email}</td>
                        <td className="mono">{inv.token}</td>
                        <td>{new Date(inv.createdAt).toLocaleDateString('pt-PT')}</td>
                        <td>
                          <button className="btn-danger" onClick={() => deleteInvite(inv._id)}>Apagar</button>
                        </td>
                      </tr>
                    ))}
                    {invites.length === 0 && (
                      <tr><td colSpan={4} className="empty">Sem convites</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* CONSULTAS */}
          {activeSection === 'consultations' && (
            <>
              <div className="form-card">
                <h3 className="form-title">Nova consulta</h3>
                <div className="form-grid">
                  <input className="admin-input" placeholder="ID do paciente" value={newConsultation.patientId}
                    onChange={(e) => setNewConsultation({ ...newConsultation, patientId: e.target.value })} />
                  <input className="admin-input" type="date" value={newConsultation.date}
                    onChange={(e) => setNewConsultation({ ...newConsultation, date: e.target.value })} />
                  <input className="admin-input" placeholder="Descrição" value={newConsultation.description}
                    onChange={(e) => setNewConsultation({ ...newConsultation, description: e.target.value })} />
                  <input className="admin-input" placeholder="Estado (ex: agendada)" value={newConsultation.status}
                    onChange={(e) => setNewConsultation({ ...newConsultation, status: e.target.value })} />
                </div>
                <button className="admin-btn" onClick={createConsultation}>Criar consulta</button>
              </div>

              <div className="form-card" style={{ marginBottom: 20 }}>
                <h3 className="form-title">Ver consultas por paciente</h3>
                <div className="form-row">
                  <input className="admin-input" placeholder="ID do paciente"
                    onChange={(e) => fetchConsultations(e.target.value)} />
                </div>
              </div>

              <div className="table-wrap">
                <table>
                  <thead>
                    <tr><th>Paciente ID</th><th>Data</th><th>Descrição</th><th>Estado</th></tr>
                  </thead>
                  <tbody>
                    {consultations.map((c, i) => (
                      <tr key={i}>
                        <td className="mono">{c.patientId}</td>
                        <td>{new Date(c.date).toLocaleDateString('pt-PT')}</td>
                        <td>{c.description}</td>
                        <td><span className="badge badge-blue">{c.status}</span></td>
                      </tr>
                    ))}
                    {consultations.length === 0 && (
                      <tr><td colSpan={4} className="empty">Sem consultas</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* FATURAS */}
          {activeSection === 'invoices' && (
            <>
              <div className="form-card">
                <h3 className="form-title">Nova fatura</h3>
                <div className="form-grid">
                  <input className="admin-input" placeholder="ID do paciente" value={newInvoice.patientId}
                    onChange={(e) => setNewInvoice({ ...newInvoice, patientId: e.target.value })} />
                  <input className="admin-input" placeholder="Nome do ficheiro (ex: fatura.pdf)" value={newInvoice.file}
                    onChange={(e) => setNewInvoice({ ...newInvoice, file: e.target.value })} />
                </div>
                <button className="admin-btn" onClick={createInvoice}>Criar fatura</button>
              </div>

              <div className="form-card" style={{ marginBottom: 20 }}>
                <h3 className="form-title">Ver faturas por paciente</h3>
                <div className="form-row">
                  <input className="admin-input" placeholder="ID do paciente"
                    onChange={(e) => fetchInvoices(e.target.value)} />
                </div>
              </div>

              <div className="table-wrap">
                <table>
                  <thead>
                    <tr><th>Paciente ID</th><th>Ficheiro</th><th>Data</th></tr>
                  </thead>
                  <tbody>
                    {invoices.map((inv, i) => (
                      <tr key={i}>
                        <td className="mono">{inv.patientId}</td>
                        <td>{inv.file}</td>
                        <td>{new Date(inv.createdAt).toLocaleDateString('pt-PT')}</td>
                      </tr>
                    ))}
                    {invoices.length === 0 && (
                      <tr><td colSpan={3} className="empty">Sem faturas</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* STAFF */}
          {activeSection === 'staff' && (
            <>
              <div className="form-card">
                <h3 className="form-title">Adicionar membro</h3>
                <div className="form-grid">
                  <input className="admin-input" placeholder="Nome" value={newStaff.name}
                    onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })} />
                  <input className="admin-input" placeholder="Especialidade" value={newStaff.specialty}
                    onChange={(e) => setNewStaff({ ...newStaff, specialty: e.target.value })} />
                  <input className="admin-input" placeholder="URL da foto" value={newStaff.photo}
                    onChange={(e) => setNewStaff({ ...newStaff, photo: e.target.value })} />
                </div>
                <button className="admin-btn" onClick={createStaff}>Adicionar</button>
              </div>

              <div className="table-wrap">
                <table>
                  <thead>
                    <tr><th>Nome</th><th>Especialidade</th><th>Foto</th><th></th></tr>
                  </thead>
                  <tbody>
                    {staff.map((s, i) => (
                      <tr key={i}>
                        <td>{s.name}</td>
                        <td>{s.specialty}</td>
                        <td>{s.photo || '—'}</td>
                        <td>
                          <button className="btn-danger" onClick={() => deleteStaff(s._id)}>Apagar</button>
                        </td>
                      </tr>
                    ))}
                    {staff.length === 0 && (
                      <tr><td colSpan={4} className="empty">Sem membros</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  )
}