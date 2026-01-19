# GitHub Pages Deployment Setup

This guide will help you set up automatic deployment to GitHub Pages for your portfolio.

## 📋 What's Been Configured

1. **Vite Configuration** - Updated `vite.config.ts` with the correct base path for GitHub Pages
2. **GitHub Actions Workflow** - Created `.github/workflows/deploy.yml` for automatic deployment
3. **Package Scripts** - Added deployment scripts to `package.json`

## 🚀 Setup Instructions

### Step 1: Install Dependencies

Run the following command to install the new `gh-pages` package:

```bash
npm install
```

If you encounter a PowerShell execution policy error, run PowerShell as Administrator and execute:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then try `npm install` again.

### Step 2: Update Repository Name (if needed)

In `vite.config.ts`, ensure the `base` path matches your GitHub repository name:

```typescript
base: '/portfolio/', // Change 'portfolio' to your actual repo name if different
```

### Step 3: Enable GitHub Pages in Repository Settings

1. Go to your GitHub repository
2. Click on **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select **GitHub Actions**

### Step 4: Push Your Changes

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

**Note:** If your default branch is `master` instead of `main`, update line 6 in `.github/workflows/deploy.yml`:

```yaml
branches:
  - master  # Change from 'main' to 'master'
```

## 🎯 How It Works

### Automatic Deployment

Every time you push to the `main` branch:

1. GitHub Actions automatically triggers
2. Installs dependencies (`npm ci`)
3. Builds your project (`npm run build`)
4. Deploys the `dist` folder to GitHub Pages

### Manual Deployment (Optional)

You can also deploy manually using:

```bash
npm run deploy
```

This will build and deploy using the `gh-pages` package.

## 🌐 Accessing Your Site

After the first successful deployment, your site will be available at:

```
https://<your-username>.github.io/portfolio/
```

Replace `<your-username>` with your GitHub username and `portfolio` with your repository name if different.

## 🔍 Monitoring Deployments

1. Go to your GitHub repository
2. Click on the **Actions** tab
3. You'll see all deployment runs and their status

## ⚠️ Troubleshooting

### Build Fails

- Check the Actions tab for error logs
- Ensure all dependencies are listed in `package.json`
- Verify TypeScript compilation passes locally with `npm run build`

### 404 Error on Deployed Site

- Verify the `base` path in `vite.config.ts` matches your repository name
- Check that GitHub Pages is enabled in repository settings
- Ensure the deployment completed successfully in the Actions tab

### Assets Not Loading

- Confirm the `base` path in `vite.config.ts` is correct
- Make sure you're using relative paths for assets in your code

## 📝 Additional Notes

- The workflow runs on every push to `main` branch
- You can also trigger it manually from the Actions tab
- The deployment uses GitHub's official actions for maximum reliability
- Build artifacts are automatically cleaned up after deployment

## 🎉 Next Steps

1. Complete the setup steps above
2. Make a commit and push to trigger your first deployment
3. Check the Actions tab to monitor the deployment
4. Visit your live site once deployment completes!

---

**Happy Deploying! 🚀**
