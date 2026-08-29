from app.models.service import Service


SERVICES = [
    Service(
        name="cloudops-api",
        status="healthy",
        description="CloudOps Hub backend API",
    ),
    Service(
        name="postgresql",
        status="healthy",
        description="CloudOps Hub database",
    ),
]


def get_services() -> list[Service]:
    return SERVICES
