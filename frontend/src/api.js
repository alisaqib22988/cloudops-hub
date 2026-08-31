const API_BASE_URL = 'http://127.0.0.1:8000'

async function fetchJson(endpoint) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`)

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`)
  }

  return response.json()
}

export function getHealth() {
  return fetchJson('/health')
}

export function getServices() {
  return fetchJson('/services')
}

export function getIncidents() {
  return fetchJson('/incidents')
}

export function getDeployments() {
  return fetchJson('/deployments')
}

export function getMetrics() {
  return fetchJson('/metrics')
}

export function getEnvironments() {
  return fetchJson('/environments')
}
