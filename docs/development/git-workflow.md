# CloudOps Hub Git Workflow

## 1. Purpose

CloudOps Hub uses Git and GitHub to provide version control, traceable changes, collaboration, and controlled software delivery.

The repository uses separate branches for stable releases and ongoing development.

## 2. Branch Strategy

### main

`main` represents the stable project state.

Changes should reach `main` only after validation and review.

### develop

`develop` is the integration branch for ongoing development.

Features are developed independently and merged into `develop` before being promoted to `main`.

### Feature Branches

Feature branches are created from `develop`.

Recommended naming:

`feature/<short-description>`

Examples:

`feature/frontend-dashboard`

`feature/service-api`

`feature/terraform-aws`

## 3. Development Flow

The standard workflow is:

`develop` → `feature branch` → development and tests → `develop` → validation → `main`

A developer should avoid making feature changes directly on `main`.

## 4. Commit Practices

Commits should be small, focused, and clearly described.

CloudOps Hub uses Conventional Commit-style prefixes where appropriate.

Examples:

`feat: add service health endpoint`

`fix: correct incident response validation`

`docs: update architecture documentation`

`test: add deployment API tests`

## 5. Pull Requests

Feature branches should be reviewed before being merged into `develop`.

Pull requests should describe:

- What changed
- Why the change was needed
- How it was tested
- Any infrastructure or security impact

## 6. Development Principles

CloudOps Hub follows a controlled development process covering application code, containerization, Kubernetes, Terraform, AWS, security, and observability.

Changes should remain traceable through Git history and should be validated before promotion to the stable branch.
