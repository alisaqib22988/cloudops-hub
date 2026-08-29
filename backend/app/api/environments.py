from fastapi import APIRouter

from app.models.environment import Environment
from app.services.environment_store import get_environments


router = APIRouter(prefix="/environments", tags=["Environments"])


@router.get("", response_model=list[Environment])
def list_environments():
    return get_environments()
