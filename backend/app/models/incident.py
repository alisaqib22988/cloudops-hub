from pydantic import BaseModel


class Incident(BaseModel):
    id: int
    title: str
    severity: str
    status: str
    service: str
