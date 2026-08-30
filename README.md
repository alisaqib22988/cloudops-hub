# CloudOps Hub

## Enterprise Cloud-Native DevOps Platform

CloudOps Hub is a portfolio-grade cloud-native platform built to demonstrate an end-to-end DevOps and platform engineering workflow.

The project is being developed incrementally through application development, version control, containerization, Kubernetes, infrastructure as code, CI/CD, GitOps, observability, security, reliability, disaster recovery, and documentation.

> **Project status:** Active development. Features are documented and marked as they are actually implemented and tested.

## Architecture

The target platform follows this delivery model:

```text
Developer
   |
   v
GitHub
   |
   v
Jenkins CI
   |
   v
Docker Images
   |
   v
Amazon ECR
   |
   v
GitOps Repository
   |
   v
Argo CD
   |
   v
Kubernetes
   |
   +-------------------+
   |                   |
   v                   v
CloudOps Hub       PostgreSQL
Application
```

The project uses Kind for local Kubernetes development and Amazon EKS for the AWS deployment architecture.

## Technology Stack

| Area | Technology |
|---|---|
| Frontend | React |
| Backend | FastAPI / Python |
| Database | PostgreSQL |
| Version Control | Git / GitHub |
| Containers | Docker |
| Local Kubernetes | Kind |
| Kubernetes Packaging | Helm |
| Infrastructure as Code | Terraform |
| AWS Container Registry | Amazon ECR |
| AWS Kubernetes | Amazon EKS |
| AWS Database | Amazon RDS PostgreSQL |
| CI | Jenkins |
| GitOps / CD | Argo CD |
| Metrics | Prometheus |
| Dashboards | Grafana |
| AWS Monitoring | CloudWatch |

## Repository Structure

```text
cloudops-hub/
├── backend/
├── database/
├── docs/
├── .gitignore
└── README.md
```

The repository structure will expand as the remaining project phases are implemented.

## Development Workflow

The repository uses a controlled Git workflow.

- `main` represents the stable project state.
- `develop` is the integration branch for ongoing development.
- Feature branches are created from `develop`.
- Changes are validated before promotion to `main`.
- Secrets and local environment files must never be committed.

Recommended feature branch naming:

```text
feature/<short-description>
```

Examples:

```text
feature/frontend-dashboard
feature/service-api
feature/terraform-aws
```

## Project Roadmap

CloudOps Hub is being built through **Phase 0 through Phase 15**, following the master project tracker.

1. Architecture & Planning
2. Application Development
3. Git & GitHub
4. Docker / Containerization
5. Kind Kubernetes
6. Terraform / AWS Infrastructure
7. Jenkins CI/CD
8. Argo CD / GitOps
9. HA / Auto Scaling / AWS Architecture
10. Monitoring & Observability
11. Security
12. Reliability / Failure Testing
13. Disaster Recovery
14. Documentation
15. Public Portfolio / LinkedIn

Phase 0 is the planning phase, so implementation phases begin with Phase 1.

## Engineering Principles

CoudsOps Hub follows these rules throughout development:

- Build before claiming.
- Test before declaring complete.
- Keep changes traceable in Git.
- Never commit credentials or secrets.
- Prefer reproducible automation.
- Validate infrastructure before deployment.
- Document operational procedures.
- Test failure and recovery paths.
- Keep the implementation aligned with the defined architecture.

## Current Status

The project is currently in **Phase 2 — Git & GitHub**.

Completed in this phase so far:

- Git repository initialized
- GitHub repository connected
- Professional project foundation committed
- `.gitignore` configured
- `main` and `develop` branches established
- Git workflow documented
- Secret-protection checks performed

The remaining Phase 2 tasks will be completed and verified before Phase 3 begins.

## License

This project is intended as a professional DevOps and cloud-native portfolio project.
