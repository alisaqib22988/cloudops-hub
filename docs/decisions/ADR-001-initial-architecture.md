# ADR-001: Initial CloudOps Hub Architecture

- Status: Accepted
- Date: 2026-08-28

## Context

CloudOps Hub is being designed as an enterprise-oriented cloud-native DevOps portfolio project.

The architecture must demonstrate practical experience across application development, Git, Docker, Kubernetes, Helm, Terraform, AWS, CI/CD, GitOps, observability, security, reliability, and disaster recovery.

The local development environment has limited memory, so the local Kubernetes platform must remain lightweight while preserving portability to AWS EKS.

## Decision

CloudOps Hub will use:

- React for the frontend.
- Python FastAPI for the backend.
- PostgreSQL for application data.
- Docker for containerization.
- Kind for local Kubernetes.
- Helm for Kubernetes packaging.
- Terraform for AWS infrastructure as code.
- Jenkins for continuous integration.
- Amazon ECR for container image storage.
- Argo CD for GitOps-based continuous delivery.
- Amazon EKS as the AWS Kubernetes target.
- Amazon RDS for managed PostgreSQL.
- S3 for object storage where required.
- Prometheus and Grafana for Kubernetes/application observability.
- CloudWatch for AWS-native monitoring and logging.

GitHub will remain the primary source-code and documentation platform.

Terraform and Argo CD will have deliberately separate responsibilities:

```text
Terraform
   |
   +-- AWS infrastructure
   |
   +-- VPC
   +-- IAM
   +-- ECR
   +-- EKS
   +-- RDS
   +-- S3

---

## Status

**ACCEPTED**

This ADR establishes the baseline CloudOps Hub architecture. Future architectural changes must be documented and justified through a new ADR.
