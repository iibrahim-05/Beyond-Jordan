# Beyond Jordan

Beyond Jordan is a responsive Jordan tourism and trip-planning experience built for Team BREKOUT's PixelSite 2.0 submission.

## Stack

- HTML
- CSS
- Vanilla JavaScript
- Firebase Authentication, Cloud Firestore, and Hosting

## Run locally

Serve the repository root with any static server, then open `index.html`.

Before connecting Firebase, copy `firebase-config.example.js` to `firebase-config.js` and replace the values with the web app configuration from Firebase Console. The app remains browsable in local demo mode when no Firebase configuration is present.

## Firebase setup

1. Create a Firebase web app.
2. Enable Email/Password authentication.
3. Create a Cloud Firestore database.
4. Copy `firebase-config.example.js` to `firebase-config.js` and add the web app configuration.
5. Deploy the included Firestore rules and Hosting configuration.

## Main experience

`Home → Explore → Destination Detail → Add to Trip → Trip Planner → Final Itinerary → Save Trip`

The implementation also includes Hidden Gems, Activities, Search, Map, Favorites, authentication, profile and saved trips, responsive navigation, filters, modal feedback, and RTL support.
