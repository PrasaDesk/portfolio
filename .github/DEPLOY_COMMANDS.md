# Quick Deployment Commands

## First Time Setup

```bash
# 1. Install dependencies (run in PowerShell as Admin if needed)
npm install

# 2. Verify build works
npm run build

# 3. Commit and push the deployment configuration
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

## After Setup - Regular Workflow

```bash
# Make your changes, then:
git add .
git commit -m "Your commit message"
git push origin main

# GitHub Actions will automatically deploy!
```

## Manual Deployment (if needed)

```bash
npm run deploy
```

## Check Deployment Status

Visit: https://github.com/YOUR_USERNAME/portfolio/actions

## Your Live Site

After deployment: https://YOUR_USERNAME.github.io/portfolio/
