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

No React, Next.js, Node.js runtime, or build step is used by the website.

## Run locally

Serve the repository root with any static server, then open the local URL. The included web configuration connects the app to the Beyond Jordan Firebase project.

## Firebase setup

1. Create a Firebase web app.
2. Enable Email/Password authentication.
3. Create a Cloud Firestore database.
4. Add the Firebase web configuration to `firebase-config.js`.
5. Deploy the included Firestore rules and Hosting configuration.

## Interactive map

The map uses MapLibre GL JS from a CDN with CARTO's Voyager basemap style. It runs directly in the browser with no React, Node.js runtime, package installation, billing setup, or client API key.

- The basemap style is configured in `map-config.js`.
- The map is centered on Jordan and constrained to its surrounding bounds.
- All destination coordinates and marker popups are defined in `app.js`.
- CARTO and OpenStreetMap attribution remains visible on the map.

## Main experience

`Home → Explore → Destination Detail → Add to Trip → Trip Planner → Final Itinerary → Save Trip`

The implementation also includes Hidden Gems, Activities, Search, Map, Favorites, authentication, profile and saved trips, responsive navigation, filters, modal feedback, and RTL support.
