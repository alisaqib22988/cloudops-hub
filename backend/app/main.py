from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.services import router as services_router
from app.api.incidents import router as incidents_router
from app.api.deployments import router as deployments_router
from app.api.metrics import router as metrics_router
from app.api.environments import router as environments_router


app = FastAPI(
    title="CloudOps Hub API",
    version="0.1.0",
    description="Backend API for CloudOps Hub",
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



app.include_router(services_router)
app.include_router(incidents_router)
app.include_router(deployments_router)
app.include_router(metrics_router)
app.include_router(environments_router)


@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "service": "cloudops-hub-api",
        "version": "0.1.0",
    }
