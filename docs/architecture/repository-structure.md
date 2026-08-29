# CloudOps Hub — Repository Structure

## 1. Purpose

This document defines the baseline repository structure for CloudOps Hub.

The structure separates application source code, infrastructure, deployment configuration, CI/CD configuration, documentation and operational evidence.

The structure is designed to support local development, Kubernetes deployment, AWS infrastructure provisioning, CI/CD, GitOps and portfolio presentation.

## 2. Repository Layout

cloudops-hub/
|
+-- frontend/
|   +-- src/
|   +-- public/
|   +-- package.json
|   +-- Dockerfile
|   +-- .dockerignore
|
+-- backend/
|   +-- app/
|   +-- tests/
|   +-- requirements.txt
|   +-- Dockerfile
|   +-- .dockerignore
|
+-- database/
|   +-- migrations/
|   +-- seed/
|
+-- deploy/
|   +-- helm/
|   |   +-- cloudops-hub/
|   |       +-- Chart.yaml
|   |       +-- values.yaml
|   |       +-- templates/
|   |
|   +-- kubernetes/
|       +-- kind/
|       +-- base/
|
+-- gitops/
|   +-- environments/
|       +-- dev/
|       +-- staging/
|       +-- production/
|
+-- infrastructure/
|   +-- terraform/
|       +-- modules/
|       +-- environments/
|           +-- dev/
|           +-- staging/
|           +-- production/
|
+-- ci/
|   +-- Jenkinsfile
|
+-- monitoring/
|   +-- prometheus/
|   +-- grafana/
|
+-- docs/
|   +-- architecture/
|   +-- decisions/
|   +-- runbooks/
|   +-- security/
|   +-- disaster-recovery/
|   +-- evidence/
|
+-- scripts/
|
+-- .gitignore
+-- README.md

## 3. Application Separation

The application will be separated into frontend and backend components.

The frontend will contain the React application.

The backend will contain the FastAPI application, API routes, business logic and backend tests.

Database-related migration and seed information will be kept separate from application source code.

## 4. Deployment Separation

Kubernetes deployment configuration will be separated from application source code.

Helm will provide the primary reusable Kubernetes packaging mechanism.

Raw Kubernetes configuration may be retained for local Kind-specific configuration and supporting resources where appropriate.

## 5. GitOps Separation

The gitops directory will contain Kubernetes deployment desired state used by Argo CD.

Application source code will not be treated as the GitOps desired-state repository.

The GitOps structure must remain clearly separated from application development code.

## 6. Infrastructure Separation

Terraform configuration will be stored under infrastructure/terraform.

Terraform will manage AWS infrastructure rather than normal application deployment.

Infrastructure modules will be reusable where practical.

Environment-specific Terraform configuration will be separated from reusable modules.

## 7. CI/CD Separation

Jenkins configuration will be maintained separately from application deployment configuration.

Jenkins will perform continuous integration activities such as:

- Testing
- Application builds
- Docker image builds
- Security and quality checks
- Publishing images to Amazon ECR

Argo CD will perform normal Kubernetes application deployment through GitOps.

## 8. Monitoring Separation

Monitoring configuration will be maintained separately from application code.

Prometheus configuration will support metrics collection.

Grafana configuration will support dashboards and visualization.

AWS-specific monitoring configuration will be documented where applicable.

## 9. Documentation Structure

Documentation will be organized by purpose.

architecture/
contains system and infrastructure architecture documentation.

decisions/
contains Architecture Decision Records.

runbooks/
contains operational procedures and troubleshooting instructions.

security/
contains security architecture, controls and procedures.

disaster-recovery/
contains backup, restore, recovery and RTO/RPO documentation.

evidence/
contains references and captured evidence demonstrating project capabilities.

## 10. Scripts

Reusable development, testing, deployment and operational helper scripts will be placed under scripts/.

Scripts must avoid embedding credentials.

## 11. Environment Files

Environment-specific configuration must not expose real credentials.

Local secret files such as .env files containing credentials must be excluded through .gitignore.

Example configuration files may be committed when they contain only safe placeholder values.

## 12. Repository Rules

The repository must maintain a clear separation between:

- Application
- Deployment
- GitOps
- Infrastructure
- CI
- Monitoring
- Documentation

Major architectural changes to this structure must be intentional and documented.

## 13. Status

APPROVED

This document establishes the baseline repository structure for CloudOps Hub.

The structure may evolve as implementation requirements become clearer, but major structural changes must preserve the separation of application, infrastructure, deployment, CI/CD, observability and documentation responsibilities.
