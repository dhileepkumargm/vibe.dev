# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Deploying to Vercel

This project is configured for Vercel using a `vercel.json` file with a single-page app (SPA) fallback so that client-side routing via `react-router-dom` works on direct URL hits.

### Quick Deploy (Git Integration)
1. Commit and push your code to GitHub (or GitLab/Bitbucket).
2. Go to https://vercel.com/new and import the repository.
3. Framework preset: choose "Create React App" (Vercel can also auto-detect).
4. Build Command: `npm run build`
5. Output Directory: `build`
6. Root Directory: leave empty (unless you move the app).
7. Click Deploy. Vercel will give you a preview and then a production domain after first merge to `main`.

Because `vercel.json` includes a catch‑all route, any path will serve `index.html` which is required for React Router v7 to hydrate correctly.

### Deploy with Vercel CLI
Install the CLI globally if you haven't:

```
npm i -g vercel
```

Then from the project root:

```
vercel
```

Answer the interactive prompts (link or create a project). For a production deployment:

```
vercel --prod
```

### Environment Variables
If later you add environment variables (e.g. `REACT_APP_API_URL`), define them in the Vercel Project Settings > Environment Variables for `Development`, `Preview`, and `Production`. Re‑deploy to apply.

### Cache & Rebuild Tips
If you change Tailwind configuration or add PostCSS plugins, they are picked up automatically on the next build. If you suspect a stale build cache, trigger a redeploy from Vercel ("Redeploy" button) or run `vercel --prod --force`.

### Custom Domain
Add a custom domain in the Vercel dashboard (Domains tab) and follow the DNS instructions (usually a CNAME to `cname.vercel-dns.com`). Propagation can take a few minutes.

### Preview Deployments
Every pull request branch automatically gets a unique preview URL. Use this to QA design changes before merging.

### 404 Handling
The provided rewrite rule in `vercel.json` ensures any unknown path returns `index.html`. If you add a real serverless API route later, place specific API routes before the catch-all rule.

---
Deployment Summary:
- Build Command: `npm run build`
- Output Directory: `build`
- Install Command: auto (`npm install`)
- SPA Routing: handled via `vercel.json` routes

You're ready to ship 🚀

## Challenge Components (ChallengeCOM)

The project includes a modular Challenge feature under `src/ChallengeCOM` used by the page `src/pages/Challenge.js`.

### Files
| File | Purpose |
|------|---------|
| `challengeData.js` | Mock data for the active challenge, previous challenges, and leaderboard. Replace with API calls later. |
| `ActiveChallengeBanner.jsx` | Highlight panel for the current live challenge (stats, tags, countdown visual). |
| `ChallengeCard.jsx` | Compact summary card for a finished challenge. |
| `ChallengesGrid.jsx` | Responsive grid layout that renders previous challenge cards. |
| `Leaderboard.jsx` | Simple leaderboard table showing ranking, score, streak. |
| `index.js` | Barrel file for cleaner imports. |

### Quick Usage
```
import { ActiveChallengeBanner, ChallengesGrid, Leaderboard, activeChallenge, previousChallenges, leaderboard } from '../ChallengeCOM';

<ActiveChallengeBanner challenge={activeChallenge} />
<ChallengesGrid items={previousChallenges} />
<Leaderboard entries={leaderboard} />
```

### Data Shapes
```
activeChallenge: { id, title, tagline?, description, participants, prizePool, endsAt, tags[] }
previousChallenge: { id, title, winners, participants, prize, endedAt, theme, difficulty }
leaderboard row: { position, user, score, streak }
```

### Styling & Theme
The components follow the existing glass / gradient / subtle-depth aesthetic (blur surfaces, faint inner rings, soft shadows). Adjust classes directly or introduce a design token layer if scaling further.

### Extensibility Ideas
- Filter / search previous challenges
- Pagination or infinite scroll
- Skeleton states while loading
- Real-time leaderboard (websocket)
- Card detail modal or route (`/challenge/:id`)
- Tag-based theming + dark/light adaptive gradients

### Replacing Mock Data
Remove `challengeData.js` and fetch asynchronously in the page (or a dedicated hook). Pass results into the provided component props. Countdown currently shows only days/hours; extend with minutes/seconds + ticking interval if required.

Feel free to iterate or request enhancements.
