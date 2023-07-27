import { useState } from 'react'
import './App.css'

function App() {
  const [showSection, toggleShowSection] = useState(false)
  const [useTransitions, toggleUseTransitions] = useState(false)

  return (
    <section className={useTransitions ? 'UseTransitions' : ''}>
      <div>
        <label htmlFor="checkbox">
        <input id="checkbox" type="checkbox" checked={useTransitions} onChange={() => toggleUseTransitions(!useTransitions)} />
          Transitions Enabled
        </label>
      </div>
      <h1>Transitions</h1>
      <div className="card">
        <div className="hoverbox"><span>Hover Over Me</span></div>
        <button onClick={() => toggleShowSection(!showSection)}>
          Toggle Content
        </button>
      </div>
      <div className={`Docs ${showSection ? 'Docs--isVisible' : ''}`}>
        <h2 className={`Item1 ${showSection ? 'Item1--isVisible' : ''}`}>
          This
        </h2>
        <h2 className={`Item2 ${showSection ? 'Item2--isVisible' : ''}`}>
          is 
        </h2>
        <h2 className={`Item3 ${showSection ? 'Item3--isVisible' : ''}`}>
          hidden
        </h2>
        <h2 className={`Item4 ${showSection ? 'Item4--isVisible' : ''}`}>
          content
        </h2>
      </div>
    </section>
  )
}

export default App
