# Demo 4: Dynamic Job Generation with Strategy

**Duration: ~10 minutes**

## Overview
This demo showcases GitHub Actions' ability to dynamically generate jobs based on configuration files, API responses, or changed files - a powerful feature for scalable CI/CD pipelines.

## Jenkins Comparison

| Feature | Jenkins | GitHub Actions |
|---------|---------|----------------|
| Dynamic Stages | Scripted Pipeline with loops | Matrix from JSON |
| Configuration | Groovy scripts | JSON + fromJson() |
| Job Generation | Build DSL Plugin | Built-in with outputs |
| Conditional Execution | `when` conditions | `if` expressions |
| Fan-out/Fan-in | Parallel stages + join | Matrix + needs |

### Jenkins Example
```groovy
pipeline {
    agent any
    stages {
        stage('Generate Matrix') {
            steps {
                script {
                    def config = readJSON file: 'config.json'
                    config.tests.each { test ->
                        stage("Test ${test.name}") {
                            steps {
                                sh "run-test.sh ${test.name}"
                            }
                        }
                    }
                }
            }
        }
    }
}
```

**Problem with Jenkins**: Must know all stages at parse time or use complex scripting.

## GitHub Actions Advantages

1. **Native JSON Support**: `fromJson()` function built-in
2. **Dynamic Matrix**: Generate matrix at runtime
3. **Job Outputs**: Pass data between jobs easily
4. **Cleaner Syntax**: No Groovy scripting required
5. **Better Visualization**: GitHub UI shows all generated jobs
6. **Change Detection**: Built-in file change detection

## Demo Workflow Features

### 1. Generate Matrix Job
- Reads test configuration from JSON files
- Generates dynamic matrix for tests
- Generates service deployment list
- Outputs JSON for subsequent jobs

```yaml
outputs:
  matrix: ${{ steps.set-matrix.outputs.matrix }}

steps:
  - run: |
      MATRIX=$(cat test-config.json | jq -c '.tests')
      echo "matrix=$MATRIX" >> $GITHUB_OUTPUT
```

### 2. Dynamic Tests Job
- Consumes generated matrix
- Creates separate job for each test configuration
- Supports multiple runtimes (Node.js, Python)
- Runs tests in parallel

```yaml
strategy:
  matrix:
    include: ${{ fromJson(needs.generate-matrix.outputs.matrix) }}
```

### 3. Dynamic Service Deployment
- Deploys multiple microservices
- Configuration loaded from JSON
- Controls parallelism with `max-parallel`
- Each service gets its own job

### 4. Change Detection & Conditional Jobs
- Detects which parts of codebase changed
- Runs only relevant build jobs
- Saves time and resources
- Backend and frontend can build independently

### 5. Fan-out/Fan-in Pattern
- Spawns multiple parallel tasks
- Aggregates results in final job
- Demonstrates distributed processing
- Uses `if: always()` to run summary regardless of failures

## Key Concepts

### Dynamic Matrix Generation
```yaml
# Job 1: Generate
generate-matrix:
  outputs:
    matrix: ${{ steps.set-matrix.outputs.matrix }}
  steps:
    - run: |
        MATRIX=$(cat config.json | jq -c '.tests')
        echo "matrix=$MATRIX" >> $GITHUB_OUTPUT

# Job 2: Consume
dynamic-tests:
  needs: generate-matrix
  strategy:
    matrix:
      include: ${{ fromJson(needs.generate-matrix.outputs.matrix) }}
```

### Conditional Execution
```yaml
detect-changes:
  outputs:
    backend: ${{ steps.filter.outputs.backend }}

build-backend:
  needs: detect-changes
  if: needs.detect-changes.outputs.backend == 'true'
```

### Fan-out/Fan-in
```yaml
# Fan-out: Multiple parallel jobs
parallel-tasks:
  strategy:
    matrix:
      task: [1, 2, 3, 4, 5]

# Fan-in: Aggregate results
aggregate:
  needs: [parallel-tasks]
  if: always()
```

## Configuration Files

### test-config.json
```json
{
  "tests": [
    {
      "name": "Unit Tests - Node 18",
      "os": "ubuntu-latest",
      "runtime": "node",
      "version": "18"
    }
  ]
}
```

### services.json
```json
{
  "services": [
    {
      "name": "api-gateway",
      "port": 8080,
      "replicas": 3
    }
  ]
}
```

## Running the Demo

1. Navigate to Actions tab
2. Select "Demo 4 - Dynamic Job Generation"
3. Click "Run workflow"
4. Observe:
   - Matrix generation from JSON files
   - Multiple test jobs spawned dynamically
   - Service deployments running in parallel
   - Conditional jobs based on change detection
   - Final aggregation of all results

## Real-World Use Cases

1. **Microservices Deployment**: Deploy N services from configuration
2. **Multi-region Testing**: Test against different regions/endpoints
3. **Customer-specific Builds**: Build for different customers/tenants
4. **Monorepo Optimization**: Only build changed packages
5. **Database Migrations**: Run migrations across multiple databases
6. **Integration Testing**: Test against multiple external service versions

## Key Takeaways

1. **Configuration-Driven**: Jobs defined by data, not code
2. **Scalability**: Easy to add new tests/services without workflow changes
3. **Efficiency**: Only run what's needed based on changes
4. **Maintainability**: Update JSON files instead of workflow YAML
5. **Flexibility**: Combine static and dynamic job generation

## Discussion Points

- How dynamic jobs simplify maintenance vs Jenkins DSL
- When to use dynamic generation vs static matrix
- Performance implications of many parallel jobs
- Cost optimization with change detection
- How this enables self-service CI/CD (teams update JSON configs)
- Integration with external APIs for dynamic configuration

## Comparison Summary

**Jenkins Approach:**
- Requires scripted pipelines
- Complex Groovy code
- Harder to visualize
- Limited dynamic capabilities
- Needs DSL plugin for advanced scenarios

**GitHub Actions Approach:**
- Native JSON support with `fromJson()`
- Job outputs for data passing
- Clear visualization in UI
- Dynamic matrix generation built-in
- No additional plugins required
- Simpler YAML configuration
