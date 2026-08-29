from fastapi import APIRouter

from app.models.incident import Incident
from app.services.incident_store import get_incidents


router = APIRouter(prefix="/incidents", tags=["Incidents"])


@router.get("", response_model=list[Incident])
def list_incidents():
    return get_incidents()
