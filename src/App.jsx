import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [screen, setScreen] = useState('form') // 'form' or 'eating'

  const handleContinue = (e) => {
    e.preventDefault()
    if (name.trim()) {
      setScreen('eating')
    }
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
          <button onClick={handleReset} className="btn-secondary">
            Probar otro nombre
          </button>
        </div>
      )}
    </div>
  )
}

export default App
