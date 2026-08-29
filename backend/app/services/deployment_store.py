from app.models.deployment import Deployment


DEPLOYMENTS = [
    Deployment(id=1, service="cloudops-api", version="0.1.0", environment="development", status="successful"),
    Deployment(id=2, service="cloudops-api", version="0.1.0", environment="production", status="pending"),
]


def get_deployments() -> list[Deployment]:
    return DEPLOYMENTS
