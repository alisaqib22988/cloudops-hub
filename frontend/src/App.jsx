import { useEffect, useState } from 'react'
import './App.css'
import {
  getDeployments,
  getEnvironments,
  getHealth,
  getIncidents,
  getMetrics,
  getServices,
} from './api'

function App() {
  const [health, setHealth] = useState(null)
  const [services, setServices] = useState([])
  const [incidents, setIncidents] = useState([])
  const [deployments, setDeployments] = useState([])
  const [metrics, setMetrics] = useState([])
  const [environments, setEnvironments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadDashboard() {
      try {
        setLoading(true)
        setError('')

        const [
          healthData,
          servicesData,
          incidentsData,
          deploymentsData,
          metricsData,
          environmentsData,
        ] = await Promise.all([
          getHealth(),
          getServices(),
          getIncidents(),
          getDeployments(),
          getMetrics(),
          getEnvironments(),
        ])

        setHealth(healthData)
        setServices(servicesData)
        setIncidents(incidentsData)
        setDeployments(deploymentsData)
        setMetrics(metricsData)
        setEnvironments(environmentsData)
      } catch (requestError) {
        setError(requestError.message)
      } finally {
        setLoading(false)
      }
    }

    loadDashboard()
  }, [])

  if (loading) {
    return (
      <main className="app">
        <header className="header">
          <p className="eyebrow">CLOUD-NATIVE DEVOPS PLATFORM</p>
          <h1>CloudOps Hub</h1>
          <p className="subtitle">Loading platform data...</p>
        </header>
      </main>
    )
  }

  if (error) {
    return (
      <main className="app">
        <header className="header">
          <p className="eyebrow">CLOUD-NATIVE DEVOPS PLATFORM</p>
          <h1>CloudOps Hub</h1>
          <p className="subtitle">
            Unable to connect to the CloudOps Hub API.
          </p>
        </header>

        <section className="status-card">
          <div>
            <p className="label">PLATFORM STATUS</p>
            <h2>API Unavailable</h2>
            <p>{error}</p>
          </div>
        </section>
      </main>
    )
  }

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
          <h2>{health?.status === 'healthy' ? 'Operational' : 'Degraded'}</h2>
        </div>

        <span className="status">
          <span className="status-dot"></span>
          {health?.status === 'healthy' ? 'Operational' : 'Degraded'}
        </span>
      </section>

      <section className="dashboard-grid">
        <article className="dashboard-card">
          <p className="label">SERVICES</p>
          <h2>{services.length}</h2>
          <ul>
            {services.map((service) => (
              <li key={service.name}>
                <strong>{service.name}</strong>
                <span>{service.status}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="dashboard-card">
          <p className="label">ENVIRONMENTS</p>
          <h2>{environments.length}</h2>
          <ul>
            {environments.map((environment) => (
              <li key={environment.name}>
                <strong>{environment.name}</strong>
                <span>{environment.status}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="dashboard-card">
          <p className="label">DEPLOYMENTS</p>
          <h2>{deployments.length}</h2>
          <ul>
            {deployments.map((deployment) => (
              <li key={deployment.id}>
                <strong>{deployment.service}</strong>
                <span>{deployment.status}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="dashboard-card">
          <p className="label">INCIDENTS</p>
          <h2>{incidents.length}</h2>
          <ul>
            {incidents.map((incident) => (
              <li key={incident.id}>
                <strong>{incident.title}</strong>
                <span>{incident.severity}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="dashboard-card metrics-card">
          <p className="label">METRICS</p>
          <ul>
            {metrics.map((metric) => (
              <li key={metric.name}>
                <strong>{metric.name}</strong>
                <span>
                  {metric.value} {metric.unit}
                </span>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  )
}

export default App
