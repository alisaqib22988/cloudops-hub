import time

from fastapi import APIRouter, Query


router = APIRouter(prefix="/load-test", tags=["Load Testing"])


@router.get("")
def generate_cpu_load(
    duration: int = Query(default=5, ge=1, le=30)
):
    """
    Generate controlled CPU work for Kubernetes HPA demonstrations.
    """

    end_time = time.time() + duration
    result = 0

    while time.time() < end_time:
        result += sum(i * i for i in range(10000))

    return {
        "status": "completed",
        "duration_seconds": duration,
        "message": "Controlled CPU load generated for HPA testing",
        "result": result,
    }
