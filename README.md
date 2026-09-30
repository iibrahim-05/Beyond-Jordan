# Beyond Jordan

Beyond Jordan is a responsive Jordan tourism and trip-planning experience built for Team BREKOUT's PixelSite 2.0 submission.

## Live site

https://beyond-jordan.web.app

## Stack

- HTML
- CSS
- Vanilla JavaScript
- Firebase Authentication, Cloud Firestore, and Hosting
- MapLibre GL JS with a CARTO Voyager basemap
- Firebase AI Logic with a destination-aware smart-planning fallback

No React, Next.js, Node.js runtime, or build step is used by the website.

## Run locally

Serve the repository root with any static server, then open the local URL. The included web configuration connects the app to the Beyond Jordan Firebase project.

## Firebase setup

1. Create a Firebase web app.
2. Enable Email/Password authentication.
3. Create a Cloud Firestore database.
4. Add the Firebase web configuration to `firebase-config.js`.
5. Deploy the included Firestore rules and Hosting configuration.
6. In Firebase AI Logic, select the Gemini Developer API and complete App Check setup.

## Interactive map

The map uses MapLibre GL JS from a CDN with CARTO's Voyager basemap style. It runs directly in the browser with no React, Node.js runtime, package installation, billing setup, or client API key.

- The basemap style is configured in `map-config.js`.
- The map is centered on Jordan and constrained to its surrounding bounds.
- All destination coordinates and marker popups are defined in `app.js`.
- CARTO and OpenStreetMap attribution remains visible on the map.

## Beyond Jordan AI Concierge

The AI Guide combines an AI trip maker, conversational Jordan concierge, Travel DNA, hidden-gem matching, and one-click transfer into the existing Trip Planner. It uses Firebase AI Logic with the Gemini Developer API when enabled in the Firebase console. If AI Logic is unavailable, the interface falls back to a local destination-aware planner so the experience never breaks.

Before production use, finish the Firebase AI Logic guided setup, keep Firebase App Check enforced, and place the reCAPTCHA Enterprise site key in `appCheckSiteKey` inside `firebase-config.js`. No Gemini API key is stored in this repository.

## Main experience

`Home → Explore → Destination Detail → Add to Trip → Trip Planner → Final Itinerary → Save Trip`

The implementation also includes Hidden Gems, Activities, Search, Map, Favorites, authentication, profile and saved trips, responsive navigation, filters, modal feedback, and RTL support.

Each destination now has an immersive themed detail page. Its visual palette reflects the place, while richer editorial context, a labeled image gallery, practical local notes, nearby suggestions, and a Travel DNA match connect discovery directly to the AI Guide and Trip Planner.
