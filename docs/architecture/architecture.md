# CloudOps Hub — Architecture

## 1. Project Overview

CloudOps Hub is an enterprise-oriented cloud operations and service-management platform designed to demonstrate modern cloud-native DevOps engineering practices.

The platform consists of:

- React frontend
- Python FastAPI backend
- PostgreSQL database
- Docker containerization
- Kubernetes orchestration
- Helm packaging
- Terraform-managed AWS infrastructure
- Jenkins CI
- Argo CD GitOps-based CD
- Amazon ECR container registry
- Prometheus and Grafana observability
- AWS CloudWatch monitoring
- Security, reliability, and disaster recovery practices

The project is designed to run locally using Docker and Kind and to be portable to AWS EKS.

---

## 2. Architecture Principles

The following principles govern the project:

1. Infrastructure must be reproducible through Infrastructure as Code.
2. Application source code and deployment desired state are separated.
3. CI and CD responsibilities are separated.
4. Secrets and credentials must never be committed to Git.
5. Kubernetes workloads should remain portable between Kind and EKS where practical.
6. Security follows least-privilege principles.
7. Reliability must be demonstrated through actual failure testing.
8. AWS resources must be designed with cost awareness.
9. Architecture should remain as simple as reasonably possible while demonstrating production-oriented engineering practices.
10. Every major engineering capability should have demonstrable evidence.

---

## 3. Application Architecture

```text
User
 |
 v
React Frontend
 |
 | HTTP/HTTPS
 v
FastAPI Backend
 |
 +-- Health API
 +-- Services API
 +-- Incidents API
 +-- Metrics API
 +-- Deployments API
 +-- Environment API
 |
 v
PostgreSQL
## 4. Local Development Architecture

Local development uses Docker and Kind.

```text
Developer
 |
 v
Docker
 |
 +-- Frontend
 +-- Backend
 +-- PostgreSQL
 |
 v
Kind Kubernetes Cluster
 |
 +-- Frontend
 +-- Backend
 +-- Supporting workloads
## 10. Observability Architecture

The platform will provide application, Kubernetes, and AWS observability.

```text
Application / Kubernetes
 |
 +-- Metrics --> Prometheus --> Grafana
 |
 +-- Logs
 |
 +-- Health Status

AWS Resources
 |
 v
CloudWatch
 |
 +-- Metrics
 +-- Logs
 +-- Alarms
## 16. Technology Stack

| Layer | Technology |
|---|---|
| Frontend | React |
| Backend | Python / FastAPI |
| Database | PostgreSQL |
| Source Control | Git / GitHub |
| Containers | Docker |
| Local Kubernetes | Kind |
| Kubernetes Packaging | Helm |
| Infrastructure as Code | Terraform |
| CI | Jenkins |
| Container Registry | Amazon ECR |
| GitOps / CD | Argo CD |
| AWS Kubernetes | Amazon EKS |
| AWS Database | Amazon RDS PostgreSQL |
| Object Storage | Amazon S3 |
| Metrics | Prometheus |
| Dashboards | Grafana |
| AWS Observability | CloudWatch |

---

## 17. Architecture Ownership

Each technology has a defined responsibility.

| Technology | Responsibility |
|---|---|
| GitHub | Source code and project documentation |
| Terraform | AWS infrastructure |
| Docker | Containerization |
| Amazon ECR | Container image storage |
| Kind | Local Kubernetes |
| Helm | Kubernetes application packaging |
| Jenkins | Continuous Integration |
| GitOps Repository | Desired deployment state |
| Argo CD | GitOps-based Continuous Delivery |
| EKS | AWS Kubernetes platform |
| Prometheus | Metrics collection |
| Grafana | Metrics visualization |
| CloudWatch | AWS monitoring and logging |

This separation is intentional and should be preserved throughout the project.

---

## 18. Project Evolution

The implementation will follow the fixed project phases:

- PHASE 0 — Architecture & Planning
- PHASE 1 — Application Development
- PHASE 2 — Git & GitHub
- PHASE 3 — Docker / Containerization
- PHASE 4 — Kind Kubernetes
- PHASE 5 — Helm
- PHASE 6 — Terraform / AWS Infrastructure
- PHASE 7 — Jenkins CI/CD
- PHASE 8 — Argo CD / GitOps
- PHASE 9 — HA / Auto Scaling / AWS Architecture
- PHASE 10 — Monitoring & Observability
- PHASE 11 — Security
- PHASE 12 — Reliability / Failure Testing
- PHASE 13 — Disaster Recovery
- PHASE 14 — Documentation
- PHASE 15 — Public Portfolio / LinkedIn

The project will not randomly skip between phases.

---

## 19. Final Architecture Goal

The final platform will demonstrate the complete lifecycle:

```text
Developer
   |
   v
GitHub
   |
   +----------------------+
   |                      |
   v                      v
Jenkins               Terraform
   |                      |
   v                      v
Docker                   AWS
   |                      |
   v                      +-- VPC
ECR                      +-- EKS
   |                      +-- RDS
   |                      +-- S3
   |                      +-- IAM
   |                      +-- Security
   |
   v
GitOps Repository
   |
   v
Argo CD
   |
   v
Kubernetes / EKS
   |
   +-- Frontend
   +-- Backend
   +-- Supporting Services
   |
   +-- Prometheus
   +-- Grafana
   +-- CloudWatch
---

## 20. Architecture Status

**Status: APPROVED**

This document represents the baseline architecture for CloudOps Hub.

Future architectural changes must be intentional, documented, and justified through an Architecture Decision Record.
