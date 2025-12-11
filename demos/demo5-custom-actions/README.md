# Demo 5: Custom Actions & GitHub Packages

**Duration: ~10 minutes**

## Overview
This demo showcases GitHub Actions' extensibility through custom actions and package management with GitHub Packages - powerful alternatives to Jenkins plugins and artifact repositories.

## Jenkins Comparison

| Feature | Jenkins | GitHub Actions |
|---------|---------|----------------|
| Extensibility | Plugins (JAR files) | Custom Actions (Git repos) |
| Plugin Distribution | Jenkins Update Center | GitHub Marketplace |
| Plugin Types | Java-based | JavaScript, Docker, Composite |
| Artifact Repository | Artifactory, Nexus | GitHub Packages |
| Package Formats | JAR, WAR, etc. | npm, Maven, Docker, etc. |
| Installation | Admin installs plugins | Reference action in YAML |
| Versioning | Plugin versions | Git tags/branches |

### Jenkins Plugin Example
```groovy
// Must install plugin via Jenkins UI first
pipeline {
    agent any
    stages {
        stage('Use Plugin') {
            steps {
                // Plugin must be pre-installed
                somePluginStep()
            }
        }
    }
}
```

**Problem**: Requires admin access, installation, restarts, and maintenance.

## GitHub Actions Advantages

1. **No Installation Required**: Actions are Git repositories
2. **Version Control**: Pin to specific versions with Git tags
3. **Three Action Types**: JavaScript, Docker, and Composite
4. **Public Marketplace**: Share actions with community
5. **Private Actions**: Use within organization
6. **Native Package Registry**: GitHub Packages built-in

## Demo Components

### 1. JavaScript Action (`greet-user`)
- **Type**: JavaScript (Node.js 20)
- **Purpose**: Demonstrates custom logic execution
- **Features**:
  - Input parameters
  - Output values
  - Uses `@actions/core` library
- **Advantage**: Fast execution, no container overhead

**Structure**:
```
.github/actions/greet-user/
├── action.yml       # Action metadata
├── index.js         # Action code
└── package.json     # Dependencies
```

### 2. Docker Action (`code-analyzer`)
- **Type**: Docker container
- **Purpose**: Demonstrates isolated environments
- **Features**:
  - Custom Docker image
  - Shell script entrypoint
  - Environment isolation
- **Advantage**: Any runtime, complete control

**Structure**:
```
.github/actions/code-analyzer/
├── action.yml       # Action metadata
├── Dockerfile       # Container definition
└── entrypoint.sh    # Action logic
```

### 3. Composite Action (`ci-pipeline`)
- **Type**: Composite (YAML)
- **Purpose**: Bundle multiple steps
- **Features**:
  - Combines existing actions
  - Conditional logic
  - Reusable workflows lite
- **Advantage**: Simple, no code required

### 4. GitHub Packages
- **Package**: `my-awesome-package`
- **Registry**: npm (GitHub Packages)
- **Features**:
  - Build and publish workflow
  - Version management
  - Consumer example
- **Advantage**: Integrated with repository

## Action Types Comparison

### JavaScript Actions
```yaml
runs:
  using: 'node20'
  main: 'index.js'
```
- **Pros**: Fast, lightweight, direct access to GitHub API
- **Cons**: Must use JavaScript/TypeScript
- **Use When**: Custom logic, API interactions

### Docker Actions
```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
```
- **Pros**: Any language, isolated environment
- **Cons**: Slower (build time), larger size
- **Use When**: Need specific tools, non-JS languages

### Composite Actions
```yaml
runs:
  using: 'composite'
  steps: [...]
```
- **Pros**: Simple YAML, combine existing actions
- **Cons**: Limited to existing actions
- **Use When**: Bundling common steps

## GitHub Packages Integration

### Publishing
```yaml
steps:
  - uses: actions/setup-node@v4
    with:
      registry-url: 'https://npm.pkg.github.com'
  
  - run: npm publish
    env:
      NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### Consuming
```yaml
steps:
  - uses: actions/setup-node@v4
  
  - run: |
      npm install @owner/package-name
```

## Running the Demo

### Prerequisites for JavaScript Action
```bash
cd .github/actions/greet-user
npm install
```

### Run Workflow
1. Navigate to Actions tab
2. Select "Demo 5 - Custom Actions & GitHub Packages"
3. Click "Run workflow"
4. Observe:
   - JavaScript action greeting
   - Docker action code analysis
   - Composite action CI pipeline
   - Package build (simulated publish)
   - Package consumption

## Real-World Use Cases

### Custom Actions
1. **Deployment Actions**: Deploy to specific platforms
2. **Security Scanning**: Custom security checks
3. **Notification Actions**: Send to Slack, Teams, etc.
4. **Cloud Provider Actions**: AWS, Azure, GCP integrations
5. **Code Generation**: Generate boilerplate code

### GitHub Packages
1. **Private NPM Packages**: Internal libraries
2. **Docker Images**: Container registry
3. **Maven Artifacts**: Java libraries
4. **NuGet Packages**: .NET libraries
5. **Ruby Gems**: Ruby libraries

## Marketplace Publishing

To publish an action to GitHub Marketplace:

1. **Add metadata** to `action.yml`:
```yaml
name: 'My Action'
description: 'Does something awesome'
author: 'Your Name'
branding:
  icon: 'activity'
  color: 'blue'
```

2. **Create releases** with Git tags:
```bash
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0
```

3. **Publish** in repository settings

Users can then reference:
```yaml
- uses: username/action-name@v1.0.0
```

## Key Takeaways

1. **No Installation**: Actions referenced by URL, not installed
2. **Version Control**: Git tags provide stability
3. **Multiple Types**: Choose right type for use case
4. **Marketplace**: Public sharing without infrastructure
5. **GitHub Packages**: Integrated artifact management
6. **Better than Jenkins Plugins**: No admin access needed

## Discussion Points

- How custom actions eliminate plugin installation overhead
- Version pinning strategies (tags vs branches)
- When to use each action type
- Security considerations for third-party actions
- GitHub Packages vs external registries (Artifactory, npm)
- Cost implications of package storage
- Private vs public action distribution

## Comparison Summary

**Jenkins Plugins:**
- Requires admin installation
- Java-based development
- Restart may be required
- Version conflicts possible
- Central plugin repository
- Manual updates

**GitHub Actions:**
- Reference in YAML (no installation)
- Multiple languages supported
- No restart needed
- Version pinned by user
- GitHub Marketplace + private repos
- Automatic updates (if using `@latest`)

**Jenkins Artifacts:**
- Requires external systems (Artifactory, Nexus)
- Additional costs and maintenance
- Separate authentication
- Complex configuration

**GitHub Packages:**
- Built into GitHub
- Integrated authentication
- Simple configuration
- Free for public repos
- Usage-based pricing for private
