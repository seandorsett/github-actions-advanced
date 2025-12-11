# Demo 2: Reusable Workflows & Composite Actions

**Duration: ~10 minutes**

## Overview
This demo showcases GitHub Actions' reusable workflows and composite actions - powerful features for DRY (Don't Repeat Yourself) principles in CI/CD.

## Jenkins Comparison

| Feature | Jenkins | GitHub Actions |
|---------|---------|----------------|
| Code Reuse | Shared Libraries (Groovy) | Reusable Workflows (YAML) |
| Custom Steps | Global Pipeline Libraries | Composite Actions |
| Parameters | Library parameters | Workflow inputs |
| Secrets | Credentials binding | Workflow secrets |
| Outputs | Return values | Workflow outputs |

### Jenkins Shared Library Example
```groovy
// vars/buildAndTest.groovy
def call(Map config) {
    pipeline {
        agent any
        stages {
            stage('Build') {
                steps {
                    sh "npm install"
                    sh "npm run build"
                }
            }
            stage('Test') {
                when { expression { config.runTests } }
                steps {
                    sh "npm test"
                }
            }
        }
    }
}

// Usage in Jenkinsfile
@Library('my-shared-library') _
buildAndTest(environment: 'dev', runTests: true)
```

## GitHub Actions Advantages

1. **No Groovy Required**: Pure YAML configuration
2. **Native Support**: Built into GitHub Actions, no setup needed
3. **Versioning**: Can reference specific versions/tags
4. **Type Safety**: Strong typing for inputs/outputs
5. **Marketplace**: Share composite actions publicly

## Demo Components

### 1. Reusable Workflow (`demo2-reusable-workflow.yml`)
- **Inputs**: Environment, Node version, test flag
- **Outputs**: Build status, test results
- **Secrets**: Optional deployment token
- **Jobs**: Build and test with artifact handling

### 2. Caller Workflow (`demo2-caller.yml`)
- Calls reusable workflow for 3 environments (dev → staging → production)
- Demonstrates different parameters per environment
- Shows job dependencies and output usage

### 3. Composite Action (`setup-and-lint`)
- Encapsulates common setup steps
- Setup Node.js with caching
- Install dependencies
- Run linting
- Return status output

## Key Concepts

### Reusable Workflows
```yaml
# Define reusable workflow
on:
  workflow_call:
    inputs:
      environment:
        required: true
        type: string
    outputs:
      build-status:
        value: ${{ jobs.build.outputs.status }}

# Call reusable workflow
jobs:
  deploy:
    uses: ./.github/workflows/reusable.yml
    with:
      environment: production
```

### Composite Actions
```yaml
# action.yml
runs:
  using: 'composite'
  steps:
    - run: echo "Step 1"
      shell: bash
    - uses: actions/setup-node@v4
    - run: echo "Step 2"
      shell: bash
```

## Key Takeaways

1. **Reusable Workflows**: Perfect for entire pipeline templates
2. **Composite Actions**: Great for bundling related steps
3. **Clear Separation**: Workflows for processes, actions for tasks
4. **Inputs/Outputs**: Type-safe parameter passing
5. **No Additional Infrastructure**: Works natively in GitHub

## Running the Demo

1. Navigate to Actions tab
2. Select "Demo 2 - Reusable Workflows & Composite Actions"
3. Click "Run workflow"
4. Observe:
   - Sequential environment deployments (dev → staging → prod)
   - Same workflow logic, different parameters
   - Composite action execution
   - Output propagation in summary

## Discussion Points

- How this reduces code duplication vs Jenkins Shared Libraries
- Easier maintenance with centralized workflow logic
- When to use reusable workflows vs composite actions
- Security implications of reusable workflows from other repos
- Versioning strategies for workflows and actions

## Comparison Summary

**Jenkins Shared Libraries:**
- Requires Groovy knowledge
- Complex setup and maintenance
- Harder to version and test

**GitHub Actions Reusable Workflows:**
- Simple YAML
- Built-in support
- Easy versioning with Git tags
- Type-safe inputs/outputs
