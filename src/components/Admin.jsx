import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Admin.css'

const API_URL = import.meta.env.VITE_API_URL

export default function Admin() {
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('dashboard')

  // Estados
  const [appointments, setAppointments] = useState([])
  const [availableSlots, setAvailableSlots] = useState([])
  const [patients, setPatients] = useState([])
  const [invites, setInvites] = useState([])
  const [consultations, setConsultations] = useState([])
  const [invoices, setInvoices] = useState([])
  const [staff, setStaff] = useState([])

  // Formulários
  const [inviteEmail, setInviteEmail] = useState('')
  const [newStaff, setNewStaff] = useState({
    name: '',
    specialty: '',
    file: null,
    role: 'medico'
  })

  const [editStaffId, setEditStaffId] = useState(null)

  const [editStaff, setEditStaff] = useState({
    name: '',
    specialty: '',
    role: 'medico'
  })

  const [newConsultation, setNewConsultation] = useState({
    patientId: '',
    date: '',
    description: '',
    status: ''
  })

  const [newInvoice, setNewInvoice] = useState({
    patientId: '',
    file: ''
  })

  const token = localStorage.getItem('token')
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  }

  useEffect(() => {
    if (!token) {
      navigate('/login')
      return
    }
    fetchAll()
  }, [])

  const fetchAll = async () => {
    fetchAppointments()
    fetchPatients()
    fetchInvites()
    fetchStaff()
  }

  const fetchAppointments = async () => {
    const res = await fetch(`${API_URL}/api/appointment-requests`, { headers })
    setAppointments(await res.json())
  }

  const fetchPatients = async () => {
    const res = await fetch(`${API_URL}/api/patients`, { headers })
    setPatients(await res.json())
  }

  const fetchInvites = async () => {
    const res = await fetch(`${API_URL}/api/invites`, { headers })
    setInvites(await res.json())
  }

  const fetchStaff = async () => {
    const res = await fetch(`${API_URL}/api/staff`, { headers })
    setStaff(await res.json())
  }

  const fetchConsultations = async (patientId) => {
    if (!patientId) {
      setConsultations([])
      return
    }

    try {
      const res = await fetch(`${API_URL}/api/consultations/patient/${patientId}`, { headers })

      if (!res.ok) {
        setConsultations([])
        return
      }

      const data = await res.json()
      setConsultations(data)
    } catch (err) {
      console.error('Erro consultations:', err)
      setConsultations([])
    }
  }

  const fetchInvoices = async (patientId) => {
    if (!patientId) {
      setInvoices([])
      return
    }

    try {
      const res = await fetch(`${API_URL}/api/invoices/patient/${patientId}`, { headers })

      if (!res.ok) {
        setInvoices([])
        return
      }

      const data = await res.json()
      setInvoices(data)
    } catch (err) {
      console.error('Erro invoices:', err)
      setInvoices([])
    }
  }

  const createInvite = async () => {
    if (!inviteEmail) return alert('Insira um email')

    await fetch(`${API_URL}/api/invites`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ email: inviteEmail })
    })

    setInviteEmail('')
    fetchInvites()
  }

  const deleteInvite = async (id) => {
    await fetch(`${API_URL}/api/invites/${id}`, {
      method: 'DELETE',
      headers
    })

    fetchInvites()
  }

  const deleteAppointment = async (id) => {
    await fetch(`${API_URL}/api/appointment-requests/${id}`, {
      method: 'DELETE',
      headers
    })

    fetchAppointments()
  }


  const createStaff = async () => {
    const formData = new FormData()
    formData.append('name', newStaff.name)
    formData.append('specialty', newStaff.specialty)
    formData.append('role', newStaff.role || 'medico')

    if (newStaff.file) {
      formData.append('photo', newStaff.file)
    }

    await fetch(`${API_URL}/api/staff`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData
    })

    setNewStaff({
      name: '',
      specialty: '',
      file: null,
      role: 'medico'
    })

    fetchStaff()
  }

  const deleteStaff = async (id) => {
    await fetch(`${API_URL}/api/staff/${id}`, {
      method: 'DELETE',
      headers
    })

    fetchStaff()
  }

  const startEditStaff = (member) => {
    setEditStaffId(member._id)

    setEditStaff({
      name: member.name,
      specialty: member.specialty,
      role: member.role
    })
  }

  const saveEditStaff = async () => {
    await fetch(`${API_URL}/api/staff/${editStaffId}`, {
      method: 'PUT',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editStaff)
    })

    setEditStaffId(null)

    setEditStaff({
      name: '',
      specialty: '',
      role: 'medico'
    })

    fetchStaff()
  }

  const createConsultation = async () => {
    await fetch(`${API_URL}/api/consultations`, {
      method: 'POST',
      headers,
      body: JSON.stringify(newConsultation)
    })

    setNewConsultation({
      patientId: '',
      date: '',
      description: '',
      status: ''
    })

    if (newConsultation.patientId) {
      fetchConsultations(newConsultation.patientId)
    }
  }

  const createInvoice = async () => {
    await fetch(`${API_URL}/api/invoices`, {
      method: 'POST',
      headers,
      body: JSON.stringify(newInvoice)
    })

    setNewInvoice({
      patientId: '',
      file: ''
    })

    if (newInvoice.patientId) {
      fetchInvoices(newInvoice.patientId)
    }
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
<div className="stat-val">{appointments.filter(a => a.status === 'pending').length}</div>
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
                    <tr><th>Nome</th><th>Email</th><th>Telefone</th><th>Mensagem</th><th>Data</th><th>Hora</th><th>Estado</th></tr>
                  </thead>
                      <tbody>
                    {appointments.filter(a => a.status === 'pending').slice(0, 5).map((a, i) => (

                      <tr key={i}>
                        <td>{a.name}</td>
                        <td>{a.email}</td>
                        <td>{a.phone}</td>
                        <td>{a.message}</td>

                        {/* DATA */}
                        <td>
                          {a.appointmentDate
                            ? new Date(a.appointmentDate).toLocaleDateString('pt-PT')
                            : '—'}
                        </td>

                        {/* HORA */}
                        <td>{a.appointmentTime || '—'}</td>

                        {/* ESTADO */}
                        <td>
                          <span
                            className={
                              a.status === 'confirmed'
                                ? 'badge badge-green'
                                : 'badge badge-orange'
                            }
                          >
                            {a.status || 'pending'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* PEDIDOS DE CONSULTA */}
          {activeSection === 'appointments' && (
            <>
    <div className="form-card">
      <h3 className="form-title">Ver horários disponíveis</h3>

        <input
          className="admin-input"
          type="date"
          onChange={async (e) => {
            const date = e.target.value
            if (!date) return

            const res = await fetch(
              `${API_URL}/api/appointment-requests/available-slots/${date}`,
              { headers }
            )

            const data = await res.json()
            setAvailableSlots(data)
          }}
        />

        <div style={{ marginTop: 10, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {availableSlots.map((slot, i) => (
          <span
            key={i}
            style={{
              padding: '6px 10px',
              border: '1px solid #0192bc',
              borderRadius: 6,
              fontSize: 12,
              color: '#000',
              background: '#fff'
            }}
          >
            {slot}
          </span>
          ))}
      </div>
    </div>

    {/* 👇 TABELA JÁ EXISTENTE */}
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Mensagem</th>
            <th>Data</th>
            <th>Hora</th>
            <th>Estado</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {appointments.map((a, i) => (
            <tr key={i}>
              <td>{a.name}</td>
              <td>{a.email}</td>
              <td>{a.phone}</td>
              <td>{a.message}</td>
              <td>
                {a.appointmentDate
                  ? new Date(a.appointmentDate).toLocaleDateString('pt-PT')
                  : '—'}
              </td>
                <td>{a.appointmentTime}</td>

                <td>
                  <span
                    className={
                      a.status === 'confirmed'
                        ? 'badge badge-green'
                        : 'badge badge-orange'
                    }
                  >
                    {a.status || 'pending'}
                  </span>
                </td>

                <td style={{ display: 'flex', gap: 8 }}>
                {a.status !== 'confirmed' && (
                <button
                  className="admin-btn"
                  onClick={async () => {
                    await fetch(`${API_URL}/api/appointment-requests/${a._id}/confirm`, {
                      method: 'PUT',
                      headers
                    })
                    fetchAppointments()
                  }}
                >
                  Confirmar
                </button>
              )}

                <button
                  className="btn-danger"
                  onClick={() => deleteAppointment(a._id)}
                >
                  Apagar
                </button>
              </td>
            </tr>
          ))}
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
    {/* ➜ FORM ADICIONAR */}
    <div className="form-card">
      <h3 className="form-title">Adicionar membro</h3>

      <div className="form-grid">
        <input
          className="admin-input"
          placeholder="Nome"
          value={newStaff.name}
          onChange={(e) => setNewStaff({ ...newStaff, name: e.target.value })}
        />

        <input
          className="admin-input"
          placeholder="Especialidade"
          value={newStaff.specialty}
          onChange={(e) => setNewStaff({ ...newStaff, specialty: e.target.value })}
        />

        <select
          className="admin-input"
          value={newStaff.role}
          onChange={(e) => setNewStaff({ ...newStaff, role: e.target.value })}
        >
          <option value="medico">Médico</option>
          <option value="assistente">Assistente</option>
        </select>

        <input
          className="admin-input"
          type="file"
          onChange={(e) =>
            setNewStaff({ ...newStaff, file: e.target.files[0] })
          }
        />
      </div>

      <button className="admin-btn" onClick={createStaff}>
        Adicionar
      </button>
    </div>

    {/* ➜ FORM EDITAR */}
    {editStaffId && (
      <div className="form-card">
        <h3 className="form-title">Editar membro da equipa</h3>

        <div className="form-grid">
          <input
            className="admin-input"
            placeholder="Nome"
            value={editStaff.name}
            onChange={(e) =>
              setEditStaff({ ...editStaff, name: e.target.value })
            }
          />

          <input
            className="admin-input"
            placeholder="Especialidade"
            value={editStaff.specialty}
            onChange={(e) =>
              setEditStaff({ ...editStaff, specialty: e.target.value })
            }
          />

          <select
            className="admin-input"
            value={editStaff.role}
            onChange={(e) =>
              setEditStaff({ ...editStaff, role: e.target.value })
            }
          >
            <option value="medico">Médico</option>
            <option value="assistente">Assistente</option>
          </select>
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          <button className="admin-btn" onClick={saveEditStaff}>
            Guardar
          </button>

          <button
            className="btn-danger"
            onClick={() => setEditStaffId(null)}
          >
            Cancelar
          </button>
        </div>
      </div>
    )}

    {/* ➜ TABELA */}
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Especialidade</th>
            <th>Foto</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {staff.map((s, i) => (
            <tr key={i}>
              <td>{s.name}</td>
              <td>{s.specialty}</td>

              <td>
                {s.photo ? (
                  <img
                    src={s.photo}
                    alt={s.name}
                    style={{
                      width: '45px',
                      height: '45px',
                      objectFit: 'cover',
                      borderRadius: '50%'
                    }}
                  />
                ) : (
                  '—'
                )}
              </td>

              <td>
                <button
                  type="button"
                  className="admin-btn"
                  style={{ marginRight: 8, background: '#555' }}
                  onClick={() => startEditStaff(s)}
                >
                  Editar
                </button>

                <button
                  className="btn-danger"
                  onClick={() => deleteStaff(s._id)}
                >
                  Apagar
                </button>
              </td>
            </tr>
          ))}

          {staff.length === 0 && (
            <tr>
              <td colSpan={4} className="empty">
                Sem membros
              </td>
            </tr>
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