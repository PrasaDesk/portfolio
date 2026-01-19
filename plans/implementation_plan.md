# Implementation Plan: Fullstack Developer Portfolio

## Goal
Create a premium, data-driven portfolio for a fullstack developer (React, Python, Node.js) specializing in healthcare.

## User Review Required
- [ ] Confirm the specific "Healthcare" domain details if any specific terminology is needed (will use placeholders for now).
- [ ] Review the JSON data structure for extensibility.

## Proposed Changes

### Directory Structure & Data
#### [NEW] `src/constants/`
- `AppConstants.ts`: Global app settings, routes, themes.
- `msgConstants.ts`: UI messages, labels, button text.
- `ContentConstants.ts`: Fixed content strings (titles, headers).

#### [NEW] `src/data/`
- `profile.json`: Personal info, social links, summary.
- `skills.json`: Tech stack (React, Python, Node, etc.).
- `projects.json`: Project case studies (Healthcare focus).
- `experience.json`: Work history.

### Components
#### [modify] `src/App.tsx`
- Implement Routing (Home, Projects, About, Contact).
- Wrap in Layout component.

#### [NEW] `src/components/layout/`
- `Layout.tsx`: Main wrapper with Navbar and Footer.
- `Navbar.tsx`: Responsive navigation.
- `Footer.tsx`: Social links and copyright.

#### [NEW] `src/components/sections/`
- `Hero.tsx`: Introduction, simple animation.
- `About.tsx`: Bio and core values.
- `Skills.tsx`: Visual representation of tech stack.
- `Experience.tsx`: Timeline or card-based history.
- `Projects.tsx`: Grid view of projects with filtering.
- `Contact.tsx`: Simple contact info/form.

#### [NEW] `src/components/ui/`
- Reusable UI components (Buttons, Cards) using Tailwind and existing class-variance-authority setup.

## Verification Plan
### Automated Tests
- Run `npm run dev` to verify build.
- Check console for errors.

### Manual Verification
- Verify responsiveness on mobile/desktop.
- Check navigation between pages.
- Ensure data is loading correctly from JSON files.
