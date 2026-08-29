from pydantic import BaseModel


class Deployment(BaseModel):
    id: int
    service: str
    version: str
    environment: str
    status: str
