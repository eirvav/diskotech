# Staging Environment Setup Guide

## Overview
Your project now has a `staging` branch that can be used for staging deployments on Vercel.

## Vercel Configuration Steps

### Option 1: Branch-Based Staging (Recommended)

1. **Go to your Vercel Dashboard**
   - Visit https://vercel.com/dashboard
   - Select your `diskotech` project

2. **Configure Branch Deployments**
   - Go to **Settings** → **Git**
   - Under **Production Branch**, ensure `main` is selected
   - Under **Branch Deployments**, enable branch deployments

3. **Set Up Staging Branch**
   - Go to **Settings** → **Git** → **Production Branch**
   - Add `staging` as a branch that should have its own deployment
   - Vercel will automatically create a URL like: `diskotech-staging.vercel.app`

4. **Environment Variables (if needed)**
   - Go to **Settings** → **Environment Variables**
   - Add variables and select which environments they apply to:
     - **Production**: Only for `main` branch
     - **Preview**: For all branches (including staging)
     - **Development**: For local development

### Option 2: Separate Vercel Project (Alternative)

If you prefer a completely separate project:

1. In Vercel Dashboard, click **Add New Project**
2. Import the same GitHub repository
3. Select the `staging` branch as the production branch
4. This creates a completely separate project with its own domain

## Workflow

### For Staging Deployments:
```bash
# Make changes on staging branch
git checkout staging
git merge main  # or make new changes
git push origin staging
# Vercel will automatically deploy to staging URL
```

### For Production Deployments:
```bash
# Merge staging to main when ready
git checkout main
git merge staging
git push origin main
# Vercel will automatically deploy to production URL
```

## Recommended Workflow

1. **Development**: Work on feature branches
2. **Staging**: Merge feature branches to `staging` for testing
3. **Production**: Merge `staging` to `main` when ready

## URLs

After configuration, you'll have:
- **Production**: `diskotech.vercel.app` (or your custom domain)
- **Staging**: `diskotech-staging.vercel.app` (or similar)

## Next Steps

1. Configure the staging branch in Vercel Dashboard (see steps above)
2. Test by pushing changes to the `staging` branch
3. Set up environment variables if your app needs different configs for staging vs production

