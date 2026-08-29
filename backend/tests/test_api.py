from fastapi.testclient import TestClient

from app.main import app


client = TestClient(app)


def test_health():
    response = client.get("/health")

    assert response.status_code == 200
    assert response.json()["status"] == "healthy"


def test_services():
    response = client.get("/services")

    assert response.status_code == 200
    assert len(response.json()) >= 1


def test_incidents():
    response = client.get("/incidents")

    assert response.status_code == 200
    assert len(response.json()) >= 1


def test_deployments():
    response = client.get("/deployments")

    assert response.status_code == 200
    assert len(response.json()) >= 1


def test_metrics():
    response = client.get("/metrics")

    assert response.status_code == 200
    assert len(response.json()) >= 1


def test_environments():
    response = client.get("/environments")

    assert response.status_code == 200
    assert len(response.json()) == 3
