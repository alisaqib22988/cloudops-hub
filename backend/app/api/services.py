from fastapi import APIRouter

from app.models.service import Service
from app.services.service_store import get_services


router = APIRouter(prefix="/services", tags=["Services"])


@router.get("", response_model=list[Service])
def list_services():
    return get_services()
