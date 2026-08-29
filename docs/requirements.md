# CloudOps Hub — Project Requirements

## 1. Purpose

CloudOps Hub is a cloud-native service and operations management platform designed to demonstrate practical DevOps, cloud engineering, Kubernetes, CI/CD, GitOps, observability, security, reliability and disaster recovery capabilities.

The application itself will remain intentionally focused. The engineering platform surrounding it will demonstrate enterprise-oriented practices.

## 2. Primary Users

### Operations User

The operations user can:

- View available services
- View service health and status
- View operational information
- Create incidents
- View incidents
- Track incident status
- View deployment information
- View environment information

### DevOps Engineer

The DevOps engineer operates the platform and requires:

- Health endpoints
- Metrics endpoints
- Application logs
- Deployment information
- Kubernetes health checks
- Monitoring dashboards
- Automated CI
- GitOps-based CD
- Infrastructure as Code

## 3. Functional Requirements

### FR-001 — Service Listing

The application must provide a service listing showing registered services.

Each service should provide relevant information such as:

- Service name
- Description
- Environment
- Current status
- Version
- Health state

### FR-002 — Service Health

The backend must provide health information for the application and its dependencies.

At minimum, the platform must expose an application health endpoint.

### FR-003 — Incident Management

Users must be able to:

- Create an incident
- View incidents
- View incident details
- Update incident status

Initial incident states should include:

- Open
- Investigating
- Resolved

### FR-004 — Metrics

The backend must expose application metrics suitable for collection by Prometheus.

Metrics should provide useful operational information such as:

- Request count
- Request latency
- Error count
- Application/process metrics

### FR-005 — Deployment Information

The application must expose deployment information such as:

- Application version
- Environment
- Deployment identifier where appropriate

### FR-006 — Environment Information

The platform should display safe environment information useful for operations.

Sensitive information must never be exposed.

### FR-007 — Frontend

The React frontend must provide a usable interface for:

- Dashboard
- Services
- Incidents
- Deployments
- Environment information

The initial UI should prioritize clarity and operational usefulness over visual complexity.

## 4. Non-Functional Requirements

### NFR-001 — Containerization

Frontend and backend components must be containerized using Docker.

### NFR-002 — Kubernetes

The application must be deployable to Kubernetes.

Local Kubernetes deployment will use Kind.

The architecture must remain portable to AWS EKS where practical.

### NFR-003 — Helm

Kubernetes deployment configuration must be packaged using Helm.

Environment-specific configuration should be supported through Helm values.

### NFR-004 — Infrastructure as Code

AWS infrastructure must be reproducible using Terraform.

### NFR-005 — CI

Jenkins must automate the primary CI workflow.

The CI pipeline should include:

- Source checkout
- Testing
- Build
- Container image creation
- Security and quality checks where practical
- Image publishing

### NFR-006 — Container Registry

Amazon ECR will store container images used by AWS deployments.

### NFR-007 — GitOps

Argo CD must manage Kubernetes application deployment from the GitOps repository.

### NFR-008 — Observability

The platform must provide:

- Application metrics
- Kubernetes metrics
- Dashboards
- Application logs
- AWS monitoring where applicable

Prometheus and Grafana will be used for Kubernetes and application observability.

CloudWatch will be used for AWS-native monitoring and logging.

### NFR-009 — Security

The platform must follow:

- Least privilege
- Secure secret handling
- Kubernetes RBAC
- AWS IAM controls
- Network segmentation
- Container security practices

Real credentials must never be committed to GitHub.

### NFR-010 — Reliability

The platform must demonstrate Kubernetes self-healing and application recovery.

Failure testing must be performed rather than merely documented.

### NFR-011 — Disaster Recovery

The project must define and demonstrate appropriate backup and restore procedures.

RTO and RPO considerations must be documented.

### NFR-012 — Cost

The project must be designed with AWS cost awareness.

Local infrastructure should be used whenever AWS is not required.

Unnecessary AWS resources should be destroyed or scaled down.

## 5. Development Requirements

The application must be runnable locally.

The local development workflow must support Docker-based development and Kind-based Kubernetes development.

## 6. Deployment Requirements

The target application delivery workflow is:

GitHub
  |
  v
Jenkins
  |
  v
Docker Image
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
Kubernetes / EKS

Infrastructure provisioning is separate:

Terraform
  |
  v
AWS Infrastructure

## 7. Evidence Requirements

The project must produce demonstrable evidence of major capabilities.

Evidence may include:

- Git history
- CI pipeline results
- Docker images
- Kubernetes deployments
- Helm releases
- Terraform plans and applies
- Argo CD synchronization
- Grafana dashboards
- CloudWatch metrics and logs
- Security configuration
- Failure testing
- Recovery testing
- Architecture diagrams
- Documentation

## 8. Portfolio Requirements

The final project must be suitable for presentation to recruiters.

The repository should demonstrate:

- Clean structure
- Meaningful commits
- Clear documentation
- Architecture diagrams
- Infrastructure code
- CI/CD configuration
- Kubernetes configuration
- Observability evidence
- Security practices
- Reliability testing

## 9. Scope Control

The project will prioritize engineering depth over unnecessary application complexity.

Features that do not strengthen the DevOps and cloud engineering objective should not be added merely to make the application larger.

Any significant scope change should be intentional and documented.

## 10. Acceptance Criteria

CloudOps Hub will be considered complete when:

1. The application works locally.
2. The application runs in Docker.
3. The application runs on Kind Kubernetes.
4. Helm manages the Kubernetes deployment.
5. AWS infrastructure is reproducible through Terraform.
6. Jenkins performs CI.
7. Images are stored in ECR.
8. Argo CD performs GitOps deployment.
9. The architecture supports EKS.
10. Monitoring and observability are implemented.
11. Security controls are implemented.
12. Failure scenarios are tested.
13. Disaster recovery procedures are documented and tested where practical.
14. Documentation is complete.
15. The project is presented professionally as a public portfolio project.
