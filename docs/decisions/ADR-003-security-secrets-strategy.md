# ADR-003: Security and Secrets Strategy

- Status: Accepted
- Date: 2026-08-29

## Context

CloudOps Hub uses multiple systems that require authentication and authorization, including AWS, GitHub, Jenkins, Kubernetes, PostgreSQL, ECR and Argo CD.

The project must demonstrate secure engineering practices while remaining practical for local development and portfolio demonstration.

Credentials must never be exposed through source code, container images, Git history or public documentation.

## Decision

CloudOps Hub will follow least-privilege security principles across application, infrastructure and deployment layers.

Secrets will be separated from normal configuration.

The project will distinguish between:

- Source code
- Non-sensitive configuration
- Runtime secrets
- Infrastructure credentials
- Deployment credentials

## GitHub Security

GitHub will contain application source code, documentation, Kubernetes configuration, Helm charts and Terraform configuration where appropriate.

The following must never be committed:

- AWS access keys
- AWS secret keys
- Database passwords
- API tokens
- Private keys
- Kubernetes secret values containing real credentials
- Jenkins credentials
- Argo CD credentials

Example or placeholder values may be committed when clearly identified as non-sensitive.

## AWS IAM

AWS access will use IAM identities and roles following least-privilege principles.

Long-lived access keys will be avoided where practical.

Permissions will be separated according to responsibility.

Infrastructure provisioning, CI operations and runtime workloads should not unnecessarily share the same permissions.

## Terraform Security

Terraform configuration will not contain hard-coded credentials.

Terraform state may contain sensitive infrastructure information and therefore must not be treated as ordinary source code.

When remote state is introduced, appropriate access controls and encryption will be used.

Terraform variables containing sensitive values will be marked sensitive where appropriate.

## Kubernetes Security

Kubernetes namespaces will provide logical separation of workloads.

RBAC will control access to Kubernetes resources.

Service accounts will receive only the permissions required by their workloads.

Sensitive runtime configuration will be provided through Kubernetes Secrets or an appropriate external secret mechanism.

Secrets must not be embedded into Docker images.

## Application Security

The FastAPI backend will validate incoming requests and avoid exposing sensitive internal information.

Health and metrics endpoints will expose only information appropriate for their intended use.

Database credentials will be supplied through runtime configuration rather than application source code.

The frontend will not contain private credentials or server-side secrets.

## Container Security

Container images will be built from appropriate base images.

Images will be scanned for known vulnerabilities as part of the CI process where practical.

Containers should run with the minimum privileges required.

Secrets must never be baked into container layers.

## Jenkins Security

Jenkins credentials will be stored using Jenkins credential management rather than inside pipeline source code.

Pipeline configuration must not print secrets into build logs.

Jenkins will receive only the permissions necessary to perform its CI responsibilities.

## Argo CD Security

Argo CD will use controlled access to Kubernetes.

Argo CD credentials will not be committed to Git.

GitOps repositories will contain desired deployment state but not plaintext production secrets.

## Network Security

AWS networking will use controlled security groups and subnet placement.

Public access will be limited to components that genuinely require it.

Database services should not be directly exposed to the public internet.

Kubernetes and AWS network policies will be introduced where appropriate.

## Local Development

Local development may use environment files or local secret mechanisms for development-only credentials.

Local secret files must be excluded through .gitignore.

Development credentials must never be reused as production credentials.

## Secret Rotation

Credentials should be replaceable without requiring application source-code changes.

Where practical, credentials will be rotated and old credentials revoked.

## Security Evidence

The project will demonstrate security through evidence such as:

- IAM policies
- Kubernetes RBAC configuration
- Secret handling
- Security groups
- Container scan results
- Git secret-scanning practices
- Secure CI configuration
- Documentation of security decisions

## Alternatives Considered

### Hard-coded credentials

Rejected because this creates an unacceptable security risk.

### Credentials stored directly in GitHub

Rejected because the repository is intended to be publicly inspectable.

### Kubernetes Secrets committed to Git

Rejected because Kubernetes Secret manifests can contain sensitive values and should not expose real credentials.

### One shared AWS identity

Rejected because it violates least-privilege principles and makes auditing and access control weaker.

## Consequences

### Positive

- Reduced credential exposure
- Clear security boundaries
- Demonstrable IAM knowledge
- Demonstrable Kubernetes security knowledge
- Safer public GitHub repository
- Better production-oriented design

### Negative

- Secret management adds configuration complexity.
- IAM permissions require careful design.
- Secure CI/CD requires additional setup.
- Local and cloud environments require separate credential handling.

These trade-offs are accepted because security is a fundamental requirement of the platform.

## Status

ACCEPTED

This ADR establishes the baseline security and secrets strategy for CloudOps Hub.
