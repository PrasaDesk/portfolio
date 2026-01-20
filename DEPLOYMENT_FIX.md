# Deployment Fix - GitHub Pages

## Issue
The portfolio was not displaying after deployment to GitHub Pages.

## Root Cause
The application was configured with `base: '/'` which works for root domain deployments, but GitHub Pages deploys to a subdirectory: `https://prasadesk.github.io/portfolio/`

## Solution Applied

### 1. Updated Vite Configuration
**File**: `vite.config.ts`

Changed:
```typescript
base: '/'
```

To:
```typescript
base: '/portfolio/'
```

This ensures all asset paths (JS, CSS, images) are correctly prefixed with `/portfolio/`.

### 2. Updated React Router Configuration
**File**: `src/App.tsx`

Added `basename` prop to Router:
```typescript
<Router basename="/portfolio">
```

This ensures all route navigation works correctly within the `/portfolio/` subdirectory.

## How It Works

### Before (Broken):
- App deployed to: `https://prasadesk.github.io/portfolio/`
- Assets loaded from: `https://prasadesk.github.io/assets/...` ❌ (404 errors)
- Routes expected at: `https://prasadesk.github.io/about` ❌ (404 errors)

### After (Fixed):
- App deployed to: `https://prasadesk.github.io/portfolio/`
- Assets loaded from: `https://prasadesk.github.io/portfolio/assets/...` ✅
- Routes work at: `https://prasadesk.github.io/portfolio/about` ✅

## Deployment Process

The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically:

1. **Triggers** on push to `main` branch
2. **Installs** dependencies with `npm ci`
3. **Builds** the project with `npm run build`
4. **Deploys** the `dist` folder to GitHub Pages

## Testing the Deployment

After pushing these changes:

1. **Wait for GitHub Actions** to complete (check the Actions tab)
2. **Visit**: `https://prasadesk.github.io/portfolio/`
3. **Verify**:
   - Page loads correctly
   - Theme toggle works
   - Navigation works
   - All assets load (no 404 errors in console)

## Local Development

For local development, the base path doesn't affect anything:
- Run: `npm run dev`
- Visit: `http://localhost:5173/`
- Everything works as normal

The base path only affects production builds.

## Alternative: Custom Domain

If you want to use a custom domain (e.g., `www.yourname.com`):

1. Add a `CNAME` file to the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Change `base` back to `'/'` in `vite.config.ts`
4. Remove `basename` from Router in `App.tsx`

## Verification Checklist

After deployment, verify:
- ✅ Homepage loads at `/portfolio/`
- ✅ Navigation links work
- ✅ Theme toggle works
- ✅ Images and assets load
- ✅ No console errors
- ✅ Mobile responsive design works
- ✅ All sections display correctly

## Next Steps

1. Commit these changes
2. Push to GitHub
3. Wait for GitHub Actions to deploy
4. Test the live site

## Commands to Deploy

```bash
git add .
git commit -m "fix: Update base path for GitHub Pages deployment"
git push origin main
```

Then check: https://prasadesk.github.io/portfolio/

## Troubleshooting

If the page still doesn't load:

1. **Check GitHub Actions**: Go to Actions tab and verify the workflow succeeded
2. **Check GitHub Pages Settings**: 
   - Go to Settings → Pages
   - Ensure Source is set to "GitHub Actions"
3. **Clear Browser Cache**: Hard refresh with Ctrl+Shift+R
4. **Check Console**: Open browser DevTools and look for errors

## Summary

The deployment issue was caused by incorrect base path configuration. By setting:
- `base: '/portfolio/'` in Vite config
- `basename="/portfolio"` in React Router

The application now correctly loads all assets and handles routing when deployed to GitHub Pages subdirectory.
