from app.models.incident import Incident


INCIDENTS = [
    Incident(id=1, title="API response latency elevated", severity="medium", status="open", service="cloudops-api"),
    Incident(id=2, title="Database connection pool warning", severity="low", status="resolved", service="postgresql"),
]


def get_incidents() -> list[Incident]:
    return INCIDENTS
