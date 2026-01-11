import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import './App.css'

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
const supabase = (supabaseUrl && supabaseAnonKey) ? createClient(supabaseUrl, supabaseAnonKey) : null

function App() {
  const [name, setName] = useState('')
  const [screen, setScreen] = useState('form') // 'form' or 'eating'
  const [history, setHistory] = useState([])
  const [loadingHistory, setLoadingHistory] = useState(false)

  // Fetch history from Supabase
  const fetchHistory = async () => {
    if (!supabase) return
    setLoadingHistory(true)
    const { data, error } = await supabase
      .from('history')
      .select('name, created_at')
      .order('created_at', { ascending: false })
      .limit(5)

    if (!error) {
      setHistory(data)
    }
    setLoadingHistory(false)
  }

  useEffect(() => {
    if (screen === 'eating') {
      fetchHistory()
    }
  }, [screen])

  const handleContinue = async (e) => {
    e.preventDefault()
    if (!name.trim()) return

    // Save to Supabase history
    if (supabase) {
      try {
        await supabase.from('history').insert([{ name: name.trim() }])
      } catch (err) {
        console.error('Error saving to history:', err)
      }
    }

    setScreen('eating')
  }

  const handleReset = () => {
    setScreen('form')
    setName('')
  }

  return (
    <div className="container">
      {screen === 'form' ? (
        <div className="card glass bounce-in">
          <img src="/logo.png" alt="Papa Logo" className="logo" />
          <h1>Proyecto картошка</h1>
          <form onSubmit={handleContinue}>
            <div className="input-group">
              <label htmlFor="name">¿Cómo te llamas?</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre aquí..."
                autoComplete="off"
                required
              />
            </div>
            <button type="submit" className="btn-primary">
              Continuar
            </button>
          </form>
          {(!supabaseUrl || !supabaseAnonKey) && (
            <p className="debug-notice">⚠️ Configura tu .env para usar la base de datos</p>
          )}
        </div>
      ) : (
        <div className="card action-screen fade-in">
          <div className="eating-animation">
            <div className="animation-container">
              <img src="/eat1.png" alt="Comiendo 1" className="eat-frame frame1" />
              <img src="/eat2.png" alt="Comiendo 2" className="eat-frame frame2" />
            </div>
          </div>
          <h2 className="phrase">
            <span>{name}</span> se come la картошка
          </h2>

          <div className="history-section">
            <h3>Últimos comedores:</h3>
            {loadingHistory ? (
              <p>Cargando...</p>
            ) : history.length > 0 ? (
              <ul className="history-list">
                {history.map((item, idx) => (
                  <li key={idx} className="history-item">
                    <span className="h-name">{item.name}</span>
                    <span className="h-time">{new Date(item.created_at).toLocaleString()}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="empty-history">¡Sé el primero en comer una papa!</p>
            )}
          </div>

          <button onClick={handleReset} className="btn-secondary">
            Probar otro nombre
          </button>
        </div>
      )}
    </div>
  )
}

export default App
