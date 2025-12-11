# Demo 1: Matrix Builds & Parallel Execution

**Duration: ~10 minutes**

## Overview
This demo showcases GitHub Actions' powerful matrix build capabilities and parallel execution features.

## Jenkins Comparison

| Feature | Jenkins | GitHub Actions |
|---------|---------|----------------|
| Matrix Builds | Matrix Project Plugin | Built-in `strategy.matrix` |
| Parallel Execution | `parallel` in Jenkinsfile | Automatic with matrix |
| Agent Selection | Node labels | `runs-on` with matrix |
| Configuration | Groovy code | YAML configuration |

### Jenkins Example (for comparison)
```groovy
pipeline {
    agent none
    stages {
        stage('Test') {
            matrix {
                axes {
                    axis {
                        name 'OS'
                        values 'ubuntu', 'windows', 'macos'
                    }
                    axis {
                        name 'NODE_VERSION'
                        values '16', '18', '20'
                    }
                }
                agent { label "${OS}" }
                stages {
                    stage('Build and Test') {
                        steps {
                            // Build and test steps
                        }
                    }
                }
            }
        }
    }
}
```

## GitHub Actions Advantages

1. **Simpler Syntax**: YAML is more readable than Groovy
2. **Built-in Matrix**: No plugins required
3. **Include/Exclude**: Easy to add or remove specific combinations
4. **Max Parallel Control**: Fine-tune resource usage
5. **Fail-Fast Options**: Continue testing even if one configuration fails

## Demo Workflow Features

### 1. Basic Matrix Build
- Tests across 3 operating systems (Ubuntu, macOS, Windows)
- Tests with 3 Node.js versions (16, 18, 20)
- Total: 9 parallel jobs

### 2. Advanced Matrix with Include/Exclude
- Demonstrates adding Safari tests on macOS only
- Shows how to exclude specific combinations
- Uses custom flags for experimental features

### 3. Dependent Jobs
- Shows how to aggregate results after matrix completes
- Uses `needs` keyword for job dependencies
- Runs regardless of test outcomes with `if: always()`

## Key Takeaways

1. **Easy Setup**: Matrix builds require minimal configuration
2. **Automatic Parallelization**: GitHub Actions handles parallel execution
3. **Flexible**: Include/exclude options for complex scenarios
4. **Resource Control**: `max-parallel` prevents overwhelming infrastructure
5. **No Plugins**: Everything works out of the box

## Running the Demo

1. Navigate to Actions tab in GitHub
2. Select "Demo 1 - Matrix Builds & Parallel Execution"
3. Click "Run workflow"
4. Observe:
   - Multiple jobs running in parallel
   - Different OS/version combinations
   - Final aggregation step

## Discussion Points

- How this simplifies multi-platform testing compared to Jenkins
- Cost considerations with parallel execution
- When to use `fail-fast: false` vs `fail-fast: true`
- How GitHub-hosted runners make this effortless
