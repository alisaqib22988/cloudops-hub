from app.models.metric import Metric


METRICS = [
    Metric(name="api_requests_total", value=1250, unit="requests"),
    Metric(name="api_response_time_ms", value=42.5, unit="milliseconds"),
    Metric(name="active_incidents", value=1, unit="incidents"),
]


def get_metrics() -> list[Metric]:
    return METRICS
