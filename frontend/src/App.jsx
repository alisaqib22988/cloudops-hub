import './App.css'

function App() {
  return (
    <main className="app">
      <header className="header">
        <p className="eyebrow">CLOUD-NATIVE DEVOPS PLATFORM</p>
        <h1>CloudOps Hub</h1>
        <p className="subtitle">
          Enterprise cloud-native DevOps platform for managing services,
          deployments, environments, incidents, and infrastructure.
        </p>
      </header>

      <section className="status-card">
        <div>
          <p className="label">PLATFORM STATUS</p>
          <h2>Development Environment</h2>
        </div>

        <span className="status">
          <span className="status-dot"></span>
          Operational
        </span>
      </section>
    </main>
  )
}

export default App
