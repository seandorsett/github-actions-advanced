# Quick Start Guide for Presenters

This is a 5-minute setup guide to get ready for your GitHub Actions advanced features presentation.

## ⏱️ Time Budget

- **Total**: 55 minutes
- **Demos**: 50 minutes (5 × 10 min)
- **Q&A**: 5 minutes

## 📦 What's Included

This repository contains everything you need:
- ✅ 5 complete, working demos
- ✅ Detailed presentation guide (PRESENTATION.md)
- ✅ Jenkins comparisons for each demo
- ✅ Sample code that actually runs
- ✅ Comprehensive documentation

## 🚀 Pre-Presentation Setup (15 minutes)

### 1. Install Dependencies (2 minutes)
```bash
cd .github/actions/greet-user
npm install
cd ../../..
```

### 2. Configure Environments (5 minutes) - OPTIONAL but recommended for Demo 3

Go to **Repository Settings → Environments** and create:

**Development**
- No protection rules
- Variable: `ENVIRONMENT_NAME` = `development`
- Variable: `API_URL` = `https://dev.example.com`

**Staging**
- Optional: 5-minute wait timer
- Variable: `ENVIRONMENT_NAME` = `staging`
- Variable: `API_URL` = `https://staging.example.com`

**Production**
- Protection rule: Required reviewers (add yourself)
- Variable: `ENVIRONMENT_NAME` = `production`
- Variable: `API_URL` = `https://example.com`

### 3. Test the Workflows (5 minutes)

Go to **Actions** tab and manually trigger each workflow:
1. Demo 1 - Matrix Builds & Parallel Execution
2. Demo 2 - Reusable Workflows & Composite Actions
3. Demo 3 - Environments & Deployment Gates
4. Demo 4 - Dynamic Job Generation
5. Demo 5 - Custom Actions & GitHub Packages

Watch them run to ensure everything works!

### 4. Prepare Your Browser (3 minutes)

Open these tabs:
- [ ] GitHub Actions tab (for running demos)
- [ ] This repository (for showing code)
- [ ] PRESENTATION.md (for speaker notes)
- [ ] A Jenkins example (for comparison)

## 🎯 Demo Flow

Each demo follows this 10-minute pattern:

| Time | Activity |
|------|----------|
| 0-1 min | Introduce the problem |
| 1-3 min | Show Jenkins approach |
| 3-8 min | Run & explain GitHub Actions demo |
| 8-10 min | Highlight key advantages |

### Quick Reference Card

| Demo | Key Message | Main Advantage |
|------|-------------|----------------|
| **Demo 1** | Matrix Builds | Built-in, no plugins needed |
| **Demo 2** | Reusable Workflows | YAML instead of Groovy |
| **Demo 3** | Environments | UI-based approval gates |
| **Demo 4** | Dynamic Jobs | Runtime job generation from JSON |
| **Demo 5** | Custom Actions | Actions are Git repos, not plugins |

## 📋 Presentation Checklist

Before you start:
- [ ] All workflows tested and passing
- [ ] JavaScript action dependencies installed (`npm install`)
- [ ] Environments configured (or prepared to explain without)
- [ ] Browser tabs open and organized
- [ ] PRESENTATION.md open for reference
- [ ] Timer or clock visible
- [ ] Backup plan if live demo fails (screenshots/video)

## 🎤 Opening (2 minutes before demos)

1. Introduce yourself
2. State the agenda: 5 demos + Q&A
3. Mention target audience: Jenkins users
4. Set expectations: Live demos, comparisons, practical examples

**Opening line suggestion:**
> "Today we'll look at 5 advanced GitHub Actions features that make CI/CD simpler than Jenkins. Each demo will show you the problem, how Jenkins solves it, and how GitHub Actions does it better."

## 📊 Demo Quick Facts

### Demo 1: Matrix Builds
- **Workflow**: `demo1-matrix-builds.yml`
- **Triggers**: 9 parallel jobs (3 OS × 3 Node versions)
- **Jenkins equivalent**: Matrix Project Plugin
- **Key advantage**: Built-in matrix strategy

### Demo 2: Reusable Workflows
- **Workflows**: `demo2-reusable-workflow.yml` + `demo2-caller.yml`
- **Demonstrates**: Calling same workflow 3 times (dev/staging/prod)
- **Jenkins equivalent**: Shared Libraries
- **Key advantage**: Pure YAML, no Groovy

### Demo 3: Environments
- **Workflow**: `demo3-environments.yml`
- **Demonstrates**: Dev → Staging → Production pipeline
- **Jenkins equivalent**: Input steps + plugins
- **Key advantage**: UI-configured approval gates

### Demo 4: Dynamic Jobs
- **Workflow**: `demo4-dynamic-jobs.yml`
- **Reads**: `test-config.json` + `services.json`
- **Jenkins equivalent**: Scripted pipeline with loops
- **Key advantage**: Runtime matrix generation with `fromJson()`

### Demo 5: Custom Actions
- **Workflow**: `demo5-custom-actions.yml`
- **Shows**: JavaScript, Docker, and Composite actions
- **Jenkins equivalent**: Plugins
- **Key advantage**: No installation, just Git references

## 🔧 Troubleshooting

**Workflow not triggering?**
- Check workflow file syntax
- Ensure workflows are enabled in settings

**JavaScript action failing?**
- Run: `cd .github/actions/greet-user && npm install`

**Docker action slow?**
- First run builds image (expected)
- Explain it's cached after first run

**Environment not showing in Demo 3?**
- Either configure it quickly or explain how it would work
- Show the workflow YAML as the primary demo

## 💡 Pro Tips

1. **Start each demo by triggering the workflow first**, then explain while it runs
2. **Use split screen**: Workflow YAML + GitHub Actions UI
3. **Point out line numbers** when showing code
4. **Have Jenkins examples ready** to paste in chat or share screen
5. **If a demo fails**, have screenshots ready as backup
6. **Keep energy high** - demos should feel exciting, not boring
7. **Relate to audience pain points** - "Remember waiting for Jenkins plugins to install?"

## ⚡ Quick Wins to Emphasize

Throughout your presentation, repeatedly mention:
- ✨ **No plugins to install** - everything works out of the box
- ✨ **YAML not Groovy** - easier to learn and maintain
- ✨ **Workflows in Git** - version controlled with code
- ✨ **Free for public repos** - generous free tier for private
- ✨ **Fast feedback** - GitHub-hosted runners are fast
- ✨ **Great documentation** - better than Jenkins docs

## 🎬 Closing (1 minute after demos, before Q&A)

1. Recap the 5 features
2. Emphasize the simplicity advantage
3. Mention migration resources
4. Open for Q&A

**Closing line suggestion:**
> "We've seen 5 advanced features that are simpler in GitHub Actions than Jenkins. No plugins, no Groovy, just YAML files that live with your code. Questions?"

## 📚 Resources to Share

After the presentation, share:
- This repository URL
- PRESENTATION.md for detailed notes
- Migration guide: https://docs.github.com/actions/migrating-to-github-actions/migrating-from-jenkins-to-github-actions
- Each demo's README file

## 🎯 Success Metrics

You'll know it went well if:
- ✅ All 5 demos completed within 50 minutes
- ✅ Audience asks good questions in Q&A
- ✅ Someone says "that's simpler than Jenkins"
- ✅ People want to try GitHub Actions afterward
- ✅ You finished with time for questions

## 📞 Emergency Contacts

If live demos fail completely:
1. Have screenshots ready
2. Or: Record videos beforehand as backup
3. Or: Show the workflow YAML and explain what would happen
4. Stay calm - focus on the concepts, not the live demo

---

## ⏰ Timing Reminders

- **Start on time** - Begin with introduction at 0:00
- **10-minute demos** - Set a visible timer
- **50-minute mark** - Transition to Q&A
- **55-minute mark** - Wrap up and thank audience

---

## 🎓 Final Reminder

**You've got this!** This repository has:
- ✅ Working code
- ✅ Detailed documentation
- ✅ Clear comparisons
- ✅ Tested demos

Just follow the PRESENTATION.md guide, and you'll deliver a great session!

---

**Now go to [PRESENTATION.md](PRESENTATION.md) for the full presentation script!** 🚀
