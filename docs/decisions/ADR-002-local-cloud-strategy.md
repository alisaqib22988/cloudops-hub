# ADR-002: Local Development and Cloud Deployment Strategy

- Status: Accepted
- Date: 2026-08-29

## Context

CloudOps Hub must support practical local development while also demonstrating a production-oriented AWS deployment model.

The development environment has limited memory, making a full cloud environment unsuitable for continuous development.

The project therefore requires a local Kubernetes environment that closely follows the deployment model used in AWS.

The architecture must avoid creating one implementation for local development and an unrelated implementation for AWS.

## Decision

CloudOps Hub will use Docker and Kind for local development and testing.

AWS EKS will be the cloud Kubernetes target.

The same fundamental application containers and Kubernetes deployment concepts will be used in both environments wherever practical.

The environments will follow:

LOCAL DEVELOPMENT

Developer
   |
   v
GitHub
   |
   v
Docker
   |
   v
Kind
   |
   v
Kubernetes

AWS DEPLOYMENT

Developer
   |
   v
GitHub
   +--------------------+
   |                    |
   v                    v
Jenkins             Terraform
   |                    |
   v                    v
Docker          AWS Infrastructure
   |                    |
   v                    v
Amazon ECR             EKS
                           |
                           v
                     Kubernetes

Application deployment in AWS will use:

GitOps Repository
       |
       v
    Argo CD
       |
       v
      EKS

## Local Environment

The local environment will provide:

- Docker
- Docker Compose where appropriate
- Kind
- Kubernetes
- Helm
- Local PostgreSQL
- Local application testing
- Local observability components where practical

The local environment is intended for development, testing and demonstration.

## Cloud Environment

The AWS environment will provide the production-oriented target architecture.

Expected components include:

- VPC
- Networking
- IAM
- Security Groups
- ECR
- EKS
- RDS
- S3 where required
- AWS monitoring services

Terraform will provision and manage the AWS infrastructure.

Argo CD will manage application deployment into Kubernetes.

## Portability Principle

Application Kubernetes resources should remain portable between Kind and EKS wherever practical.

Cloud-specific integrations may be introduced where they provide genuine AWS functionality.

Cloud-specific functionality must not unnecessarily couple the entire application to AWS.

## Database Strategy

Local development will use PostgreSQL running locally, initially through Docker.

AWS deployment will use Amazon RDS for PostgreSQL.

The application will use configuration to select the appropriate database endpoint rather than changing application code between environments.

## Configuration Strategy

Environment-specific configuration will be separated from application source code.

Configuration will use:

- Kubernetes ConfigMaps for non-sensitive configuration
- Kubernetes Secrets for sensitive runtime configuration
- Environment-specific Helm values where appropriate
- AWS-native mechanisms where appropriate

Credentials must never be committed to GitHub.

## Cost Strategy

Local infrastructure will be preferred whenever AWS infrastructure is not required.

AWS resources will be created for implementation, integration testing, portfolio demonstrations and production-oriented testing.

Resources that are not required will be destroyed or scaled down to control costs.

The project does not assume that a permanently running EKS environment is free.

## Alternatives Considered

### Local-only Kubernetes

Rejected because the project must demonstrate AWS cloud engineering and EKS deployment.

### AWS-only development

Rejected because continuously running AWS infrastructure increases cost and slows local experimentation.

### Separate local and AWS application implementations

Rejected because maintaining two substantially different deployment models reduces portability and increases maintenance.

### Minikube

Rejected in favor of Kind because Kind integrates directly with Docker and is appropriate for the project's lightweight local Kubernetes requirement.

## Consequences

### Positive

- Low-cost local development
- Practical Kubernetes experience
- Clear local-to-cloud progression
- EKS-ready architecture
- Reusable container images
- Reusable Kubernetes concepts
- Strong Terraform demonstration
- Reduced AWS costs during development

### Negative

- Some AWS-specific functionality cannot be perfectly reproduced locally.
- Local and AWS environments require environment-specific configuration.
- Maintaining portability requires architectural discipline.
- The project must test both local and cloud-specific behavior where appropriate.

## Status

ACCEPTED

This ADR establishes the baseline local-development and cloud-deployment strategy for CloudOps Hub.
