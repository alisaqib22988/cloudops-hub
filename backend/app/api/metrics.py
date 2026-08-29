from fastapi import APIRouter

from app.models.metric import Metric
from app.services.metric_store import get_metrics


router = APIRouter(prefix="/metrics", tags=["Metrics"])


@router.get("", response_model=list[Metric])
def list_metrics():
    return get_metrics()
