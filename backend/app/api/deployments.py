from fastapi import APIRouter

from app.models.deployment import Deployment
from app.services.deployment_store import get_deployments


router = APIRouter(prefix="/deployments", tags=["Deployments"])


@router.get("", response_model=list[Deployment])
def list_deployments():
    return get_deployments()
