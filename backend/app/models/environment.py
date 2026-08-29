from pydantic import BaseModel


class Environment(BaseModel):
    name: str
    status: str
    description: str
