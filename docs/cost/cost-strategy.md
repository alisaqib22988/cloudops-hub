# CloudOps Hub — Cost Strategy

## 1. Purpose

This document defines the cost-management strategy for CloudOps Hub.

The project is intended to demonstrate production-oriented cloud engineering without creating unnecessary AWS expenditure.

The architecture will therefore use local infrastructure wherever AWS is not required and will use AWS resources selectively for cloud-specific demonstrations.

## 2. Cost Principles

CloudOps Hub will follow these principles:

1. Avoid unnecessary AWS resources.
2. Prefer local development for routine development and testing.
3. Use AWS when it provides meaningful engineering demonstration value.
4. Destroy temporary AWS resources when they are no longer required.
5. Avoid leaving expensive infrastructure running unnecessarily.
6. Monitor AWS usage and estimated costs.
7. Document cost-related architectural decisions.
8. Never sacrifice security or reliability solely to minimize cost.

## 3. Local Development

The following components will primarily be used locally during development:

- Docker
- Docker Compose
- Kind
- Local Kubernetes workloads
- Local PostgreSQL where practical
- Local Prometheus
- Local Grafana
- Jenkins where practical
- Argo CD in the Kind environment

Local development reduces unnecessary AWS usage while allowing the majority of the platform to be developed and tested without cloud expenditure.

## 4. AWS Usage

AWS will be introduced when it provides meaningful portfolio or engineering value.

Potential AWS components include:

- Amazon ECR
- Amazon EKS
- VPC
- IAM
- Security Groups
- RDS PostgreSQL
- S3
- CloudWatch
- Route 53
- Load Balancing

Not every component must remain continuously deployed.

## 5. ECR Cost Strategy

Amazon ECR will be used as the container image registry for AWS deployment demonstrations.

Old or unnecessary images should be removed periodically.

Where appropriate, an ECR lifecycle policy should automatically remove older images.

## 6. EKS Cost Strategy

Amazon EKS is a significant AWS cost consideration.

EKS will not be treated as a permanently running free resource.

The project will use Kind for routine Kubernetes development.

EKS will be created for AWS demonstrations, testing or portfolio evidence when required and destroyed when continuous operation is not necessary.

## 7. RDS Cost Strategy

RDS PostgreSQL may be used to demonstrate managed database architecture.

During periods when RDS is not required for testing or demonstration, the environment should be stopped or destroyed where the selected configuration permits and where doing so is appropriate.

Important data must be backed up before destructive operations.

## 8. S3 Cost Strategy

S3 will be used where object storage provides meaningful architectural value.

Storage should remain limited to required project data, backups and demonstration artifacts.

Unnecessary objects should be removed.

## 9. CloudWatch Cost Strategy

CloudWatch will be used for AWS-native monitoring and logging.

Log retention should be configured intentionally rather than allowing logs to accumulate indefinitely.

Only useful monitoring data should be retained for the portfolio environment.

## 10. Load Balancing and Networking

Load balancers and associated networking resources can generate charges even when application traffic is low.

These resources should therefore be created only when required for AWS demonstrations.

Unused load balancers and associated resources should be removed.

## 11. Route 53

Route 53 resources will be used only when DNS demonstration provides meaningful value.

A domain will not be required for routine local development.

## 12. Terraform and Cost Control

Terraform will be the primary mechanism for creating and destroying AWS infrastructure.

The intended workflow is:

Terraform Plan
|
v
Review
|
v
Terraform Apply
|
v
AWS Environment
|
v
Demonstration / Testing
|
v
Terraform Destroy when appropriate

Terraform configuration should make it clear which resources are intended for temporary demonstration environments.

## 13. Environment Strategy

The project will distinguish between:

### Local

Used for routine development and testing.

Primary platform:

- Docker
- Kind

### AWS Development

Used for validating AWS infrastructure and cloud integration.

Resources should remain limited and cost-conscious.

### AWS Demonstration

Used for portfolio demonstrations, screenshots, testing and evidence collection.

Resources should be deployed only for the required demonstration period.

## 14. Cost Monitoring

AWS usage should be periodically reviewed.

Where appropriate, the project will use:

- AWS Cost Explorer
- AWS Budgets
- AWS billing alerts
- Resource tagging

Resources should use meaningful tags such as:

- Project
- Environment
- Owner
- ManagedBy

## 15. Resource Cleanup

Temporary environments must have an explicit cleanup procedure.

Before destroying an environment:

1. Identify required data.
2. Back up required persistent data.
3. Verify no required demonstration resources remain.
4. Run the appropriate Terraform destroy operation.
5. Verify that unnecessary AWS resources have been removed.
6. Review AWS costs afterward.

## 16. Free-Tier and Pricing Limitations

AWS free-tier eligibility and pricing vary by account, service, region and time.

The project must never assume that a resource is permanently free.

Before deploying potentially chargeable services, current AWS pricing and account-specific free-tier conditions should be checked.

## 17. Cost vs Engineering Value

Cost optimization must be balanced against portfolio value.

A technically important AWS capability may be justified temporarily when it demonstrates:

- Infrastructure as Code
- Kubernetes on AWS
- Managed databases
- IAM
- Networking
- Observability
- High availability
- Cloud-native deployment

The objective is not to eliminate every AWS cost.

The objective is to obtain meaningful engineering evidence while avoiding unnecessary recurring expenditure.

## 18. Status

APPROVED

This document establishes the baseline cost-management strategy for CloudOps Hub.

AWS resources will be deployed deliberately, monitored and removed when they are no longer required.
