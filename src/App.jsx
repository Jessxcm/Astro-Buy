import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Astro ⭐  Buy 🛒</h1>
      <p className="read-the-docs">
        Buy you favorite Star
      </p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Buy Stars
        </button>
      </div>
      <h2 className="read-the-docs">{count} ⭐</h2>
    </>
  )
}

export default App
