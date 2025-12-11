# GitHub Actions Advanced Features - Demo Repository

This repository contains five comprehensive demos showcasing advanced GitHub Actions features, specifically designed for Jenkins users who want to understand GitHub Actions capabilities.

## 🎯 Purpose

Presentation repository with live demos for a 55-minute session on GitHub Actions advanced features, including:
- **50 minutes**: Five demos (10 minutes each)
- **5 minutes**: Q&A

## 📋 Demo Overview

### Demo 1: Matrix Builds & Parallel Execution
**Location**: `demos/demo1-matrix-builds/`
**Workflow**: `.github/workflows/demo1-matrix-builds.yml`

- Test across multiple OS and Node.js versions
- Built-in matrix strategy with include/exclude
- Automatic parallelization (up to 9 jobs)
- Fail-fast control and job dependencies

**Jenkins Comparison**: Simpler than Matrix Project Plugin or parallel stages

### Demo 2: Reusable Workflows & Composite Actions
**Location**: `demos/demo2-reusable-workflows/`
**Workflows**: 
- `.github/workflows/demo2-reusable-workflow.yml`
- `.github/workflows/demo2-caller.yml`

- Reusable workflow called for dev/staging/production
- Composite action bundling setup and linting
- Type-safe inputs and outputs
- No Groovy required

**Jenkins Comparison**: Easier than Shared Libraries

### Demo 3: Environments, Secrets & Deployment Gates
**Location**: `demos/demo3-environments/`
**Workflow**: `.github/workflows/demo3-environments.yml`

- Native environment support (dev/staging/production)
- Environment-scoped secrets and variables
- Approval gates configured in UI (no code!)
- Deployment history tracking
- Branch protection rules

**Jenkins Comparison**: Built-in, no plugins needed

### Demo 4: Dynamic Job Generation with Strategy
**Location**: `demos/demo4-dynamic-jobs/`
**Workflow**: `.github/workflows/demo4-dynamic-jobs.yml`

- Generate matrix from JSON configuration files
- Dynamic service deployment
- Change detection for conditional jobs
- Fan-out/fan-in patterns
- Configuration-driven workflows

**Jenkins Comparison**: No complex Groovy scripting required

### Demo 5: Custom Actions & GitHub Packages
**Location**: `demos/demo5-custom-actions/`
**Workflow**: `.github/workflows/demo5-custom-actions.yml`
**Actions**: `.github/actions/`

- JavaScript action (greet-user)
- Docker action (code-analyzer)
- Composite action (ci-pipeline)
- GitHub Packages integration
- No installation required

**Jenkins Comparison**: Actions are Git repos, not installed plugins

## 🚀 Quick Start

### For Presenters

1. **Clone this repository**:
   ```bash
   git clone https://github.com/seandorsett/github-actions-advanced.git
   cd github-actions-advanced
   ```

2. **Install JavaScript action dependencies** (for Demo 5):
   ```bash
   cd .github/actions/greet-user
   npm install
   cd ../../..
   ```

3. **Configure environments** (for Demo 3):
   - Go to **Settings → Environments** in GitHub
   - Create: `development`, `staging`, `production`
   - Add protection rules to `production` (optional)
   - Set environment variables as documented in `demos/demo3-environments/README.md`

4. **Review presentation guide**:
   ```bash
   cat PRESENTATION.md
   ```

5. **Test workflows**:
   - Navigate to **Actions** tab in GitHub
   - Manually trigger each demo workflow
   - Verify all demos run successfully

### For Participants

Each demo directory contains:
- **README.md**: Detailed explanation and Jenkins comparison
- **Workflow files**: Live GitHub Actions configurations
- **Sample code**: Supporting files for demos

Browse demos in order:
1. [Demo 1: Matrix Builds](demos/demo1-matrix-builds/README.md)
2. [Demo 2: Reusable Workflows](demos/demo2-reusable-workflows/README.md)
3. [Demo 3: Environments](demos/demo3-environments/README.md)
4. [Demo 4: Dynamic Jobs](demos/demo4-dynamic-jobs/README.md)
5. [Demo 5: Custom Actions](demos/demo5-custom-actions/README.md)

## 📚 Documentation Structure

```
github-actions-advanced/
├── PRESENTATION.md              # Complete presentation guide
├── README.md                    # This file
├── .github/
│   ├── workflows/               # All demo workflows
│   │   ├── demo1-matrix-builds.yml
│   │   ├── demo2-reusable-workflow.yml
│   │   ├── demo2-caller.yml
│   │   ├── demo3-environments.yml
│   │   ├── demo4-dynamic-jobs.yml
│   │   └── demo5-custom-actions.yml
│   └── actions/                 # Custom actions for Demo 5
│       ├── greet-user/          # JavaScript action
│       ├── code-analyzer/       # Docker action
│       ├── ci-pipeline/         # Composite action
│       └── setup-and-lint/      # Composite action
└── demos/
    ├── demo1-matrix-builds/
    ├── demo2-reusable-workflows/
    ├── demo3-environments/
    ├── demo4-dynamic-jobs/
    └── demo5-custom-actions/
```

## 🎓 Key Advantages Over Jenkins

| Feature | Jenkins | GitHub Actions |
|---------|---------|----------------|
| **Setup** | Complex installation | Built into GitHub |
| **Configuration** | Groovy scripting | Simple YAML |
| **Matrix Builds** | Plugin required | Built-in |
| **Reusability** | Shared Libraries (Groovy) | Reusable Workflows (YAML) |
| **Environments** | Plugin required | Native support |
| **Approval Gates** | Code-based input steps | UI-configured |
| **Extensibility** | Install plugins | Reference Git repos |
| **Maintenance** | Self-managed or hosted | Fully managed by GitHub |
| **Cost** | Infrastructure + licenses | Usage-based, generous free tier |

## 🔍 What Makes These Demos "Advanced"?

These demos go beyond basic CI/CD to showcase:
- **Scalability**: Matrix builds and dynamic job generation
- **Reusability**: DRY principles with reusable workflows
- **Enterprise Features**: Environment management and approval gates
- **Flexibility**: Custom actions and extensibility
- **Optimization**: Change detection and conditional execution
- **Integration**: Native package management with GitHub Packages

## 💡 Use Cases

Each demo addresses real-world scenarios:
1. **Multi-platform testing** (different OS, runtimes, versions)
2. **Standardized pipelines** (reuse across teams/projects)
3. **Controlled deployments** (environment-based gates)
4. **Microservices CI/CD** (dynamic service deployments)
5. **Custom tooling** (organization-specific actions)

## 📖 Additional Resources

- **Presentation Guide**: [PRESENTATION.md](PRESENTATION.md)
- **GitHub Actions Docs**: https://docs.github.com/actions
- **Migration Guide**: https://docs.github.com/actions/migrating-to-github-actions/migrating-from-jenkins-to-github-actions
- **Actions Marketplace**: https://github.com/marketplace?type=actions
- **Jenkins Comparison**: Each demo README includes detailed comparisons

## 🛠️ Troubleshooting

### Workflows not running?
- Check file paths in workflow `on.paths` triggers
- Ensure workflows are enabled in repository settings
- Verify you have write permissions

### Demo 5 JavaScript action failing?
- Install dependencies: `cd .github/actions/greet-user && npm install`
- Ensure `@actions/core` is installed

### Demo 3 environments not showing?
- Create environments in repository Settings → Environments
- Set environment variables as documented

### Docker action building slowly?
- First run builds Docker image (expected)
- Subsequent runs use cached image

## 🤝 Contributing

This is a demo repository for presentation purposes. Feel free to:
- Fork for your own presentations
- Adapt demos to your needs
- Submit issues for corrections
- Share feedback on presentation structure

## 📜 License

MIT License - See [LICENSE](LICENSE) file

## ✨ Credits

Created for GitHub Actions advanced features presentation targeting Jenkins users.

---

**Ready to run the demos?** Head to the [Actions tab](../../actions) and trigger a workflow!

**Want to present?** Read the [Presentation Guide](PRESENTATION.md)