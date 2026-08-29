from app.models.environment import Environment


ENVIRONMENTS = [
    Environment(name="development", status="active", description="Local development environment"),
    Environment(name="staging", status="active", description="Pre-production validation environment"),
    Environment(name="production", status="planned", description="AWS production environment"),
]


def get_environments() -> list[Environment]:
    return ENVIRONMENTS
