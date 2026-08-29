from pydantic import BaseModel


class Service(BaseModel):
    name: str
    status: str
    description: str
