# Demo 3: Environments, Secrets & Deployment Gates

**Duration: ~10 minutes**

## Overview
This demo showcases GitHub Actions' environment management, including secrets, variables, protection rules, and deployment approvals.

## Jenkins Comparison

| Feature | Jenkins | GitHub Actions |
|---------|---------|----------------|
| Environments | Environment Plugin | Native Environments |
| Secrets | Credentials Store | Environment Secrets |
| Approval Gates | Input Step / Manual Approval | Environment Protection Rules |
| Deployment URL | Manual tracking | Environment URL tracking |
| Variables | Environment Variables | Environment Variables |
| Access Control | Role-based plugins | Repository settings |

### Jenkins Example
```groovy
pipeline {
    agent any
    environment {
        DEPLOY_TOKEN = credentials('deploy-token')
    }
    stages {
        stage('Deploy to Dev') {
            environment {
                API_URL = 'https://dev.example.com'
            }
            steps {
                sh 'deploy.sh'
            }
        }
        stage('Deploy to Production') {
            input {
                message "Deploy to production?"
                ok "Deploy"
            }
            environment {
                API_URL = 'https://example.com'
            }
            steps {
                sh 'deploy.sh'
            }
        }
    }
}
```

## GitHub Actions Advantages

1. **Native Environment Support**: No plugins needed
2. **Built-in Approval Flow**: Configure in repository settings
3. **Environment URLs**: Track deployments with live URLs
4. **Scoped Secrets**: Secrets tied to specific environments
5. **Protection Rules**: Time delays, required reviewers, branch restrictions
6. **Deployment History**: Visual tracking of all deployments

## Environment Configuration

To fully experience this demo, configure environments in GitHub:

1. Go to **Settings → Environments**
2. Create three environments:

### Development Environment
- **Name**: `development`
- **Protection Rules**: None (auto-deploy)
- **Environment Variables**:
  - `ENVIRONMENT_NAME`: development
  - `API_URL`: https://dev.example.com
- **Deployment URL**: https://dev.example.com

### Staging Environment
- **Name**: `staging`
- **Protection Rules**:
  - Wait timer: 5 minutes (optional)
- **Environment Variables**:
  - `ENVIRONMENT_NAME`: staging
  - `API_URL`: https://staging.example.com
- **Deployment URL**: https://staging.example.com

### Production Environment
- **Name**: `production`
- **Protection Rules**:
  - Required reviewers: Add yourself or team members
  - Deployment branches: `main` only (optional)
- **Environment Variables**:
  - `ENVIRONMENT_NAME`: production
  - `API_URL`: https://example.com
- **Deployment URL**: https://example.com

## Demo Workflow Features

### 1. Build Stage
- Builds the application once
- Creates artifact for all environments
- No environment secrets needed

### 2. Development Deployment
- Automatically deploys after build
- Uses development environment variables
- No approval required

### 3. Staging Deployment
- Deploys after successful dev deployment
- Optional: Wait timer before deployment
- Runs smoke tests and integration tests

### 4. Production Deployment
- **Requires manual approval** (if configured)
- Only runs if input flag is true or on main branch
- Runs pre-deployment checks
- Includes post-deployment verification
- Sends notifications

### 5. Deployment Summary
- Runs regardless of previous job outcomes
- Shows status of all environment deployments

## Key Features Demonstrated

### Environment Protection
```yaml
environment:
  name: production
  url: https://example.com
```

### Environment Secrets & Variables
```yaml
steps:
  - name: Deploy
    run: |
      echo "Environment: ${{ vars.ENVIRONMENT_NAME }}"
      echo "API: ${{ vars.API_URL }}"
      echo "Token: ${{ secrets.DEPLOY_TOKEN }}"
```

### Conditional Deployment
```yaml
if: github.event.inputs.deploy-to-prod == 'true'
```

## Running the Demo

1. **Setup** (one-time):
   - Configure environments in repository settings
   - Add protection rules to production
   - Set environment variables

2. **Run Workflow**:
   - Navigate to Actions tab
   - Select "Demo 3 - Environments & Deployment Gates"
   - Click "Run workflow"
   - Check "Deploy to production" checkbox (optional)

3. **Observe**:
   - Build creates artifact
   - Dev deploys automatically
   - Staging deploys after dev
   - Production waits for approval (if configured)
   - Check deployment history in Environments tab

## Key Takeaways

1. **Environment Management**: Centralized configuration per environment
2. **Secret Scoping**: Different secrets for different environments
3. **Approval Gates**: Built-in without additional tools
4. **Deployment Tracking**: Visual history with URLs
5. **Branch Protection**: Restrict production deploys to specific branches
6. **No Jenkins Plugins**: Everything works out of the box

## Discussion Points

- How environment secrets provide better security than Jenkins credentials
- Approval process simplicity vs Jenkins input steps
- Deployment history and rollback capabilities
- Branch-based deployment strategies
- Integration with GitHub Deployments API
- How this eliminates the need for separate deployment tools

## Comparison Summary

**Jenkins Approach:**
- Requires plugins (Environment, Credentials)
- Manual approval via input steps
- Complex credential management
- No built-in deployment tracking

**GitHub Actions Approach:**
- Native environment support
- Repository settings-based approvals
- Scoped secrets per environment
- Built-in deployment tracking and history
- Visual deployment status
