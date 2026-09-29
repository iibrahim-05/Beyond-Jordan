import { CARTO_BASEMAP_STYLE } from "./map-config.js";

const IMG = {
  petra: "https://images.unsplash.com/photo-1551171129-8ce1ebb911b3?auto=format&fit=crop&w=1600&q=86",
  wadiRum: "https://images.unsplash.com/photo-1673581209633-effd71cfa863?auto=format&fit=crop&w=1600&q=86",
  deadSea: "https://images.unsplash.com/photo-1743943932415-947f79353387?auto=format&fit=crop&w=1600&q=86",
  jerash: "https://images.unsplash.com/photo-1667934776328-73ab81b66915?auto=format&fit=crop&w=1600&q=86",
  aqaba: "https://mc-5126cf56-570a-4992-b7aa-ea41-afd-ep-buemfvb4e0c8e9a7.a03.azurefd.net/-/media/Explore-Jordan/Sun-Sand-and-Sea/Aqaba/Coral-Diving-Center/Coral-Diving-Center-Image.jpeg?rev=323e26a7d20c47719d92e4ad8d9fdd05&w=1260",
  amman: "https://images.unsplash.com/photo-1627734633024-867b54f26e1f?auto=format&fit=crop&w=1600&q=86",
  dana: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Dana_Reserve_02.jpg",
  azraq: "https://lp-cms-production.imgix.net/2023-07/iStock-1151520843.jpg?auto=format%2Ccompress&crop=faces%2Cedges&fit=crop&q=82&w=1600",
  shobak: "https://images.unsplash.com/photo-1690440850413-d73785c4ac7d?auto=format&fit=crop&w=1600&q=86",
  ajloun: "https://images.musement.com/cover/0156/71/thumb_15570991_cover_header.jpg?auto=format&fit=crop&w=1400&q=80",
  ummQais: "https://images.locationscout.net/2023/10/umm-qais-jordan-e2qi.webp?h=1400&q=80",
  iraqAlAmir: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=86"
};

const destinations = [
  { id: "petra", name: "Petra", subtitle: "Ancient Wonder of the World", region: "Ma'an", category: "History", rating: "4.9", duration: "1–2 days", image: IMG.petra, iconic: true, lat: 30.3285, lng: 35.4444, description: "Walk through the Siq to a rose-red city carved into sandstone by the Nabataeans." },
  { id: "wadi-rum", name: "Wadi Rum", subtitle: "The Valley of the Moon", region: "Aqaba", category: "Adventure", rating: "4.8", duration: "1–2 days", image: IMG.wadiRum, iconic: true, lat: 29.5766, lng: 35.4194, description: "Cross monumental desert landscapes shaped by sandstone, wind, and Bedouin heritage." },
  { id: "dead-sea", name: "Dead Sea", subtitle: "Salt Formations & Healing Waters", region: "Balqa and Madaba", category: "Wellness", rating: "4.7", duration: "Half day", image: IMG.deadSea, iconic: true, lat: 31.559, lng: 35.4732, description: "Float at the lowest point on Earth and watch the sun settle beyond the water." },
  { id: "jerash", name: "Jerash", subtitle: "Splendor of Imperial Rome", region: "Jerash", category: "History", rating: "4.8", duration: "Half day", image: IMG.jerash, iconic: true, lat: 32.2747, lng: 35.8914, description: "Follow colonnaded streets through one of the world’s best-preserved Roman cities." },
  { id: "aqaba", name: "Aqaba", subtitle: "Coral Reefs & Gulf of Aqaba", region: "Aqaba", category: "Water", rating: "4.6", duration: "1–3 days", image: IMG.aqaba, iconic: true, lat: 29.5321, lng: 35.0063, description: "Dive into clear Red Sea water, vibrant reefs, and a relaxed coastal city." },
  { id: "amman", name: "Amman", subtitle: "Seven Hills of History & Culture", region: "Amman", category: "Culture", rating: "4.5", duration: "1–2 days", image: IMG.amman, iconic: true, lat: 31.9539, lng: 35.9106, description: "Discover layers of history, lively neighborhoods, galleries, and Jordanian food." },
  { id: "madaba", name: "Madaba", subtitle: "Mosaics, old streets & living heritage", region: "Madaba", category: "Culture", rating: "4.7", duration: "Half day", image: IMG.amman, lat: 31.7195, lng: 35.7933, description: "See the celebrated mosaic map and explore a welcoming city shaped by layered faiths and traditions." },
  { id: "mount-nebo", name: "Mount Nebo", subtitle: "A panoramic summit of memory", region: "Madaba", category: "History", rating: "4.7", duration: "2–3 hours", image: IMG.deadSea, lat: 31.767, lng: 35.7252, description: "Look across the Jordan Valley from a historic mountain sanctuary with remarkable mosaics." },
  { id: "wadi-mujib", name: "Wadi Mujib", subtitle: "Jordan's dramatic water canyon", region: "Madaba", category: "Adventure", rating: "4.8", duration: "Half day", image: IMG.dana, lat: 31.4667, lng: 35.575, description: "Follow a spectacular canyon where sandstone cliffs rise above seasonal river trails." },
  { id: "karak", name: "Karak Castle", subtitle: "Stone corridors above the plateau", region: "Karak", category: "History", rating: "4.6", duration: "Half day", image: IMG.shobak, lat: 31.1853, lng: 35.7048, description: "Explore vaulted passageways, defensive towers, and sweeping views from a storied hilltop fortress." },
  { id: "dana", name: "Dana Biosphere", subtitle: "Canyons, village trails & ecology", region: "Tafilah", category: "Nature", rating: "4.8", duration: "1–2 days", image: IMG.dana, hidden: true, distance: "190 km from Amman", lat: 30.626, lng: 35.5207, description: "An eco-tourism haven perched above a chain of dramatic sandstone valleys." },
  { id: "azraq", name: "Azraq Wetland", subtitle: "An oasis in the eastern desert", region: "Zarqa", category: "Nature", rating: "4.6", duration: "Half day", image: IMG.azraq, hidden: true, distance: "115 km from Amman", lat: 31.8325, lng: 36.8174, description: "A lush wetland and bird sanctuary surrounded by black basalt desert." },
  { id: "shobak", name: "Shobak Castle", subtitle: "A solitary Crusader fortress", region: "Ma'an", category: "History", rating: "4.7", duration: "2–3 hours", image: IMG.shobak, hidden: true, distance: "180 km from Amman", lat: 30.5317, lng: 35.56, description: "A windswept hilltop fortress with hidden passages and immense valley views." },
  { id: "ajloun", name: "Ajloun Castle", subtitle: "Forest highlands & medieval history", region: "Ajloun", category: "History", rating: "4.4", duration: "Half day", image: IMG.ajloun, hidden: true, distance: "76 km from Amman", lat: 32.3256, lng: 35.7272, description: "A medieval fortress surrounded by olive groves, forests, and northern hills." },
  { id: "umm-qais", name: "Umm Qais", subtitle: "Basalt ruins above three countries", region: "Irbid", category: "Culture", rating: "4.7", duration: "Half day", image: IMG.ummQais, hidden: true, distance: "120 km from Amman", lat: 32.655, lng: 35.6844, description: "Explore black-stone ruins and sweeping views over the Jordan Valley." },
  { id: "iraq-al-amir", name: "Iraq Al-Amir", subtitle: "Valley caves & village craft", region: "Amman", category: "Culture", rating: "4.5", duration: "Half day", image: IMG.iraqAlAmir, hidden: true, distance: "22 km from Amman", lat: 31.9174, lng: 35.7517, description: "Meet local artisans and explore a green valley dotted with ancient caves." },
  { id: "as-salt", name: "As-Salt", subtitle: "Golden-stone houses & hillside lanes", region: "Balqa", category: "Culture", rating: "4.6", duration: "Half day", image: IMG.amman, hidden: true, distance: "30 km from Amman", lat: 32.0392, lng: 35.7272, description: "Wander through harmonious old neighborhoods, heritage homes, markets, and steep stone stairways." },
  { id: "umm-al-jimal", name: "Umm al-Jimal", subtitle: "The black basalt city", region: "Mafraq", category: "History", rating: "4.5", duration: "Half day", image: IMG.jerash, hidden: true, distance: "86 km from Amman", lat: 32.328, lng: 36.368, description: "Step into an expansive basalt settlement whose houses, churches, and water systems tell a desert story." },
  { id: "pella", name: "Pella", subtitle: "Ancient layers in the Jordan Valley", region: "Irbid", category: "History", rating: "4.5", duration: "Half day", image: IMG.ummQais, hidden: true, distance: "95 km from Amman", lat: 32.45, lng: 35.6167, description: "Trace thousands of years of settlement among quiet ruins overlooking the fertile Jordan Valley." },
  { id: "main-hot-springs", name: "Ma'in Hot Springs", subtitle: "Mineral waterfalls below the plateau", region: "Madaba", category: "Wellness", rating: "4.6", duration: "Half day", image: IMG.deadSea, hidden: true, distance: "74 km from Amman", lat: 31.6095, lng: 35.6154, description: "Relax beside warm mineral waterfalls tucked into a steep and peaceful volcanic valley." }
];

const activities = [
  { id: "petra-by-night", name: "Petra by Night", type: "Culture", destination: "Petra", image: IMG.petra, icon: "✦", duration: "Evening", description: "Walk the candlelit Siq and experience the Treasury illuminated under the stars." },
  { id: "wadi-rum-camping", name: "Desert Camping", type: "Adventure", destination: "Wadi Rum", image: IMG.wadiRum, icon: "☾", duration: "Overnight", description: "Share Bedouin hospitality and sleep beneath Wadi Rum’s wide night sky." },
  { id: "aqaba-diving", name: "Coral Diving", type: "Water", destination: "Aqaba", image: IMG.aqaba, icon: "⚓", duration: "Half day", description: "Explore calm Red Sea reefs with colorful coral and marine life." },
  { id: "dana-hiking", name: "Canyon Hiking", type: "Nature", destination: "Dana Biosphere", image: IMG.dana, icon: "⌁", duration: "Full day", description: "Follow village trails through changing ecosystems and sandstone canyons." },
  { id: "jerash-walk", name: "Ancient Secrets", type: "History", destination: "Jerash", image: IMG.jerash, icon: "⌘", duration: "3 hours", description: "Walk with a local storyteller through theatres, temples, and colonnades." },
  { id: "amman-food", name: "Amman Food Walk", type: "Culture", destination: "Amman", image: IMG.amman, icon: "◌", duration: "3 hours", description: "Taste falafel, knafeh, coffee, and the energy of downtown Amman." }
];

const app = document.querySelector("#app");
const modalRoot = document.querySelector("#modal-root");
const toastRoot = document.querySelector("#toast-root");

const state = {
  user: JSON.parse(localStorage.getItem("bj-user") || "null"),
  favorites: JSON.parse(localStorage.getItem("bj-favorites") || "[]"),
  trip: JSON.parse(localStorage.getItem("bj-trip") || JSON.stringify({ name: "My Jordan Adventure", days: 7, interests: ["History", "Nature"], stops: ["amman", "jerash", "petra", "wadi-rum", "dead-sea"] })),
  pendingAction: sessionStorage.getItem("bj-pending") || "",
  firebase: null,
  activeFilter: "All",
  query: "",
  mapQuery: ""
};

const escapeHtml = (value = "") => String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
const route = () => location.hash.replace(/^#\/?/, "") || "home";
const findDestination = id => destinations.find(item => item.id === id) || destinations[0];
const findActivity = id => activities.find(item => item.id === id) || activities[0];
const storeLocal = () => {
  localStorage.setItem("bj-favorites", JSON.stringify(state.favorites));
  localStorage.setItem("bj-trip", JSON.stringify(state.trip));
  state.user ? localStorage.setItem("bj-user", JSON.stringify(state.user)) : localStorage.removeItem("bj-user");
};

async function initFirebase() {
  try {
    const [{ firebaseConfig }, firebaseApp, firebaseAuth, firestore] = await Promise.all([
      import("./firebase-config.js"),
      import("https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js"),
      import("https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js"),
      import("https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js")
    ]);
    if (!firebaseConfig.apiKey || firebaseConfig.apiKey.includes("YOUR_")) return;
    const firebase = firebaseApp.initializeApp(firebaseConfig);
    const auth = firebaseAuth.getAuth(firebase);
    const db = firestore.getFirestore(firebase);
    state.firebase = { auth, db, firebaseAuth, firestore };
    firebaseAuth.onAuthStateChanged(auth, async user => {
      state.user = user ? { uid: user.uid, name: user.displayName || user.email.split("@")[0], email: user.email } : null;
      storeLocal();
      if (user) await loadCloudData();
      render();
    });
  } catch (error) {
    console.info("Beyond Jordan is running in local demo mode. Add firebase-config.js to connect Firebase.");
  }
}

async function loadCloudData() {
  if (!state.firebase || !state.user) return;
  const { doc, getDoc } = state.firebase.firestore;
  const snapshot = await getDoc(doc(state.firebase.db, "users", state.user.uid));
  if (snapshot.exists()) {
    const data = snapshot.data();
    state.favorites = data.favorites || state.favorites;
    state.trip = data.trip || state.trip;
    storeLocal();
  }
}

async function syncCloudData() {
  storeLocal();
  if (!state.firebase || !state.user) return;
  const { doc, setDoc, serverTimestamp } = state.firebase.firestore;
  await setDoc(doc(state.firebase.db, "users", state.user.uid), { favorites: state.favorites, trip: state.trip, updatedAt: serverTimestamp() }, { merge: true });
}

function nav(active = "") {
  const links = [
    ["explore", "Explore"], ["activities", "Activities"], ["hidden-gems", "Hidden Gems"], ["map", "Map"], ["trip-planner", "Trip Planner"]
  ];
  return `<header class="site-header">
    <nav class="nav container" aria-label="Main navigation">
      <a class="brand" href="#/home" aria-label="Beyond Jordan home"><span class="brand-mark">B</span><span>BEYOND JORDAN</span></a>
      <div class="nav-links" id="nav-links">${links.map(([href, label]) => `<a class="nav-link ${active === href ? "active" : ""}" href="#/${href}">${label}</a>`).join("")}</div>
      <div class="nav-actions">
        ${state.user ? `<a href="#/favorites" aria-label="Favorites">♡</a><a class="avatar" href="#/profile" aria-label="Profile">${escapeHtml(state.user.name?.[0]?.toUpperCase() || "T")}</a>` : `<a class="login" href="#/login">Log In</a><a class="btn primary signup" href="#/signup">Sign Up</a>`}
        <button class="menu-btn" data-action="menu" aria-label="Open menu" aria-expanded="false">☰</button>
      </div>
    </nav>
  </header>`;
}

function footer() {
  return `<footer class="site-footer"><div class="container">
    <div class="footer-grid">
      <div class="footer-brand"><a class="brand" href="#/home"><span class="brand-mark">B</span><span>Beyond Jordan</span></a><p>Jordan is more than a destination. Discover its famous wonders, quiet landscapes, and welcoming local stories.</p><form class="newsletter" data-form="newsletter"><input type="email" required placeholder="Your email address" aria-label="Email address"><button class="btn" type="submit">Join</button></form></div>
      <div class="footer-col"><h3>Destinations</h3><a href="#/destination/petra">Petra & The South</a><a href="#/destination/wadi-rum">Wadi Rum Desert</a><a href="#/destination/dead-sea">Dead Sea Coast</a><a href="#/destination/amman">Amman City</a></div>
      <div class="footer-col"><h3>Experiences</h3><a href="#/activity/wadi-rum-camping">Desert Glamping</a><a href="#/activity/aqaba-diving">Coral Diving</a><a href="#/activity/dana-hiking">Canyon Hiking</a><a href="#/activity/jerash-walk">Historical Walks</a></div>
      <div class="footer-col"><h3>Plan</h3><a href="#/trip-planner">Trip Planner</a><a href="#/favorites">Favorites</a><a href="#/map">Map & Nearby</a><a href="#/profile">Saved Trips</a></div>
    </div>
    <div class="footer-bottom"><span>© 2026 Beyond Jordan. All rights reserved. Made in Amman.<br><small>Photography: Unsplash, Wikimedia Commons, Royal Jordanian and credited travel partners.</small></span><span>Instagram&nbsp;&nbsp; YouTube&nbsp;&nbsp; Pinterest</span></div>
  </div></footer>`;
}

function favoriteButton(item) {
  const saved = state.favorites.includes(item.id);
  return `<button class="favorite-btn ${saved ? "saved" : ""}" data-favorite="${item.id}" aria-label="${saved ? "Remove from" : "Save to"} favorites" title="Save">${saved ? "♥" : "♡"}</button>`;
}

function destinationCard(item, gem = false) {
  return `<article class="${gem ? "gem-card" : "destination-card"}">
    <div class="card-image"><a href="#/destination/${item.id}" aria-label="View ${item.name}"><img src="${item.image}" alt="${item.name}, Jordan" loading="lazy"></a>${favoriteButton(item)}</div>
    <div class="card-body">${gem ? `<span class="eyebrow">Hidden Gem</span>` : ""}<div class="card-title-row"><h3><a href="#/destination/${item.id}">${item.name}</a></h3><span class="rating">★ ${item.rating}</span></div><p>${item.subtitle}</p>${gem ? `<div class="divider"></div><div class="meta"><span>⌖ ${item.distance}</span><span>${item.region}</span></div>` : ""}</div>
  </article>`;
}

function activityCard(item) {
  return `<article class="destination-card"><div class="card-image"><a href="#/activity/${item.id}"><img src="${item.image}" alt="${item.name} in ${item.destination}" loading="lazy"></a></div><div class="card-body"><span class="eyebrow">${item.type} · ${item.duration}</span><div class="card-title-row"><h3><a href="#/activity/${item.id}">${item.name}</a></h3><span class="activity-icon">${item.icon}</span></div><p>${item.description}</p></div></article>`;
}

function pageHero(eyebrow, title, copy, image) {
  return `<section class="page-hero" style="--hero-image:url('${image}')"><div class="container"><div><span class="eyebrow">${eyebrow}</span><h1>${title}</h1><p>${copy}</p></div></div></section>`;
}

function homePage() {
  return `${nav("home")}<main id="main">
    <section class="hero"><div class="container"><div class="hero-content"><span class="eyebrow" style="color:#f1cc8d">The Hashemite Kingdom of Jordan</span><h1>Every path in Jordan tells a story.</h1><p>Walk through ancient cities, cross open deserts, follow green valleys, and meet the local spirit that makes every journey unforgettable.</p><div class="hero-actions"><a class="btn light" href="#/explore">Explore Jordan</a><a class="btn outline" style="color:#fff;border-color:#fff" href="#/trip-planner">Plan Your Trip</a></div><div class="hero-note"><span>✦ ${destinations.length} curated destinations</span><span>⌖ Local knowledge</span><span>♡ Save and plan freely</span></div></div></div></section>
    <section class="section"><div class="container"><div class="section-head"><div><span class="eyebrow">Iconic Wonders</span><h2>Featured Destinations</h2></div><a class="text-link" href="#/explore">Explore All Locations</a></div><div class="grid cards-3">${destinations.filter(x => x.iconic).slice(0,6).map(x => destinationCard(x)).join("")}</div></div></section>
    <section class="section alt"><div class="container"><div class="section-head"><div><span class="eyebrow">Off the Beaten Path</span><h2>The Jordan You Don’t Know</h2><p>Go beyond standard brochures and uncover biosphere reserves, historic desert outposts, and villages rich with local life.</p></div><a class="text-link" href="#/hidden-gems">Find Hidden Gems</a></div><div class="grid cards-3">${destinations.filter(x => x.hidden).slice(0,3).map(x => destinationCard(x, true)).join("")}</div></div></section>
    <section class="section"><div class="container"><div class="section-head"><div><span class="eyebrow">Curated Experiences</span><h2>What Awaits You</h2></div></div><div class="grid cards-4">${activities.slice(1,5).map(x => `<a class="activity-tile" href="#/activity/${x.id}"><span class="activity-icon">${x.icon}</span><h3>${x.name}</h3><p>${x.description}</p></a>`).join("")}</div></div></section>
    <section class="section dark"><div class="container quote"><span class="eyebrow" style="color:#f1cc8d">A Journey Beyond</span><blockquote>“Petra was unforgettable, but the real magic was hiking Dana and spending a quiet night under Wadi Rum’s stars.”</blockquote><p>Alistair & Charlotte · United Kingdom</p></div></section>
  </main>${footer()}`;
}

function explorePage(searchMode = false) {
  const query = state.query.toLowerCase();
  const filtered = destinations.filter(item => (state.activeFilter === "All" || item.category === state.activeFilter || item.region.includes(state.activeFilter)) && (!query || `${item.name} ${item.subtitle} ${item.region} ${item.category}`.toLowerCase().includes(query)));
  const categories = ["All", "History", "Nature", "Adventure", "Culture", "Water", "Wellness"];
  return `${nav("explore")}<main id="main">${pageHero(searchMode ? "Search Jordan" : "Where will Jordan take you?", searchMode ? `Results${state.query ? ` for “${escapeHtml(state.query)}”` : ""}` : "Explore Jordan", "Iconic landmarks and lesser-known places, brought together in one journey.", IMG.jerash)}<section class="section"><div class="container"><div class="toolbar"><form class="search-box" data-form="search"><input type="search" name="q" value="${escapeHtml(state.query)}" placeholder="Search destinations, regions, or interests"><span>⌕</span></form><a class="btn outline" href="#/map">View Map</a></div><div class="filters">${categories.map(cat => `<button class="chip ${state.activeFilter === cat ? "active" : ""}" data-filter="${cat}">${cat}</button>`).join("")}</div><p class="results-copy">${filtered.length} places found across Jordan</p>${filtered.length ? `<div class="grid cards-3">${filtered.map(x => destinationCard(x, x.hidden)).join("")}</div>` : `<div class="empty-state"><h2>No places found</h2><p>Try a broader search or clear your filters.</p><button class="btn primary" data-action="clear-search">Clear Search</button></div>`}</div></section></main>${footer()}`;
}

function hiddenGemsPage() {
  return `${nav("hidden-gems")}<main id="main">${pageHero("Off the Beaten Path", "Hidden Gems", "Quiet landscapes, remarkable communities, and stories that rarely make the first itinerary.", IMG.dana)}<section class="section"><div class="container"><div class="section-head"><div><span class="eyebrow">Explore Differently</span><h2>Places Worth the Detour</h2></div><p>Travel more slowly, support local communities, and discover corners of Jordan with a character all their own.</p></div><div class="grid cards-3">${destinations.filter(x => x.hidden).map(x => destinationCard(x, true)).join("")}</div></div></section></main>${footer()}`;
}

function activitiesPage() {
  return `${nav("activities")}<main id="main">${pageHero("Move · Taste · Wonder", "Activities & Experiences", "Choose the way you want to meet Jordan—from ancient stories and mountain trails to coral reefs and desert skies.", IMG.wadiRum)}<section class="section"><div class="container"><div class="filters" style="margin-bottom:36px"><button class="chip active">All Experiences</button><button class="chip">Adventure</button><button class="chip">Culture</button><button class="chip">Nature</button><button class="chip">Water</button></div><div class="grid cards-3">${activities.map(activityCard).join("")}</div></div></section></main>${footer()}`;
}

function destinationDetailPage(id) {
  const item = findDestination(id);
  const nearby = destinations.filter(x => x.id !== item.id).slice(item.hidden ? 3 : 6, item.hidden ? 6 : 9);
  return `${nav("explore")}<main id="main"><section class="detail-hero" style="--detail-image:url('${item.image}')"><div class="container"><span class="tag">${item.hidden ? "Hidden Gem" : "Iconic Destination"}</span></div></section><section class="section"><div class="container detail-layout"><article><div class="detail-title"><div><span class="eyebrow">Home › Explore › ${item.name}</span><h1>${item.name}${item.id === "petra" ? " — The Rose City" : ""}</h1><div class="meta"><span>★ ${item.rating}</span><span>${item.region}</span><span>${item.category}</span></div></div></div><div class="divider"></div><h2 style="font-size:2rem">An unforgettable side of Jordan</h2><p class="detail-copy">${item.description} Beyond Jordan brings context, nearby discoveries, and practical trip planning together so you can experience the place with curiosity and respect.</p><div class="info-grid"><div class="info-box"><strong>Suggested Visit</strong>${item.duration}</div><div class="info-box"><strong>Region</strong>${item.region}</div><div class="info-box"><strong>Best For</strong>${item.category}</div></div><h2 style="font-size:2rem;margin-top:46px">Highlights</h2><ul class="highlights"><li>Distinctive landscapes and a strong sense of place</li><li>Stories shaped by Jordan’s history and local communities</li><li>Easy to combine with nearby destinations in one itinerary</li></ul><h2 style="font-size:2rem;margin-top:46px">Nearby Places</h2><div class="nearby-row">${nearby.map(x => `<a class="mini-card" href="#/destination/${x.id}"><img src="${x.image}" alt="${x.name}"><div><strong>${x.name}</strong><p>${x.region}</p></div></a>`).join("")}</div></article><aside class="booking-box"><span class="eyebrow">Build your journey</span><h3>Save to Trip Itinerary</h3><p>Add ${item.name} to your day-by-day plan or keep it in your favorites.</p><div class="booking-actions"><button class="btn primary wide" data-add-trip="${item.id}">Add to Trip Planner</button><button class="btn outline wide" data-favorite="${item.id}">${state.favorites.includes(item.id) ? "♥ Saved" : "♡ Save Place"}</button><a class="btn ghost wide" href="#/map">View on Map</a></div></aside></div></section></main>${footer()}`;
}

function activityDetailPage(id) {
  const item = findActivity(id);
  const destination = destinations.find(x => x.name === item.destination) || destinations[0];
  return `${nav("activities")}<main id="main"><section class="detail-hero" style="--detail-image:url('${item.image}')"><div class="container"><span class="tag">${item.type} Experience</span></div></section><section class="section"><div class="container detail-layout"><article><span class="eyebrow">${item.destination} · ${item.duration}</span><h1 style="font-size:clamp(2.6rem,4vw,4rem)">${item.name}</h1><p class="detail-copy">${item.description} This experience is presented without invented prices or access rules; confirm current details with your chosen local operator before visiting.</p><div class="info-grid"><div class="info-box"><strong>Duration</strong>${item.duration}</div><div class="info-box"><strong>Experience</strong>${item.type}</div><div class="info-box"><strong>Location</strong>${item.destination}</div></div><h2 style="font-size:2rem;margin-top:44px">What makes it special</h2><ul class="highlights"><li>A memorable perspective on Jordan’s landscape and culture</li><li>Suitable for travelers seeking authentic local experiences</li><li>Simple to connect with the rest of your itinerary</li></ul><h2 style="font-size:2rem;margin-top:44px">Related Destination</h2>${destinationCard(destination, destination.hidden)}</article><aside class="booking-box"><span class="eyebrow">Experience Jordan</span><h3>Add this experience</h3><p>Include ${item.name} alongside ${item.destination} in your itinerary.</p><div class="booking-actions"><button class="btn primary wide" data-add-trip="${destination.id}">Add to Trip Planner</button><a class="btn outline wide" href="#/destination/${destination.id}">View ${destination.name}</a></div></aside></div></section></main>${footer()}`;
}

let mapLibrePromise;
let activeMap;
let activeMapObserver;

// تحميل مكتبة MapLibre عند فتح صفحة الخريطة فقط، بدون React أو Node.js.
function loadMapLibre() {
  if (!mapLibrePromise) {
    mapLibrePromise = import("https://unpkg.com/maplibre-gl@^6.11.2/dist/maplibre-gl.mjs");
  }
  return mapLibrePromise;
}

function destroyInteractiveMap() {
  activeMapObserver?.disconnect();
  activeMapObserver = undefined;
  activeMap?.remove();
  activeMap = undefined;
}

function filteredMapItems() {
  const query = state.mapQuery.trim().toLowerCase();
  return destinations.map((item, index) => ({ ...item, mapNumber: index + 1 })).filter(item => !query || `${item.name} ${item.region} ${item.category}`.toLowerCase().includes(query));
}

async function initInteractiveMap(items) {
  const mapElement = document.querySelector("#interactive-map");
  const statusElement = document.querySelector("#map-status");
  if (!mapElement) return;

  try {
    const maplibregl = await loadMapLibre();
    if (!document.body.contains(mapElement)) return;

    // [غرب، جنوب] ثم [شرق، شمال]: تمنع سحب الخريطة بعيدًا عن الأردن.
    // هامش قريب حول المملكة يسمح بإظهار شكل الأردن الطويل كاملًا داخل الشاشات العريضة.
    const jordanBounds = [[33.8, 28.6], [40.2, 33.7]];
    const map = new maplibregl.Map({
      container: mapElement,
      style: CARTO_BASEMAP_STYLE,
      center: [36.5, 31.2],
      zoom: 6,
      minZoom: 5.2,
      maxZoom: 15,
      maxBounds: jordanBounds,
      renderWorldCopies: false,
      attributionControl: true
    });
    activeMap = map;
    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");

    const visiblePlaces = new maplibregl.LngLatBounds();

    items.forEach(item => {
      const markerContent = document.createElement("div");
      markerContent.className = "interactive-map-marker";
      markerContent.textContent = item.mapNumber;
      markerContent.title = item.name;
      markerContent.setAttribute("aria-label", item.name);

      const popup = new maplibregl.Popup({ offset: 22, maxWidth: "290px" }).setHTML(`<article class="map-info-window"><img src="${item.image}" alt=""><div><span>${item.category} · ${item.region}</span><h3>${item.name}</h3><p>${item.subtitle}</p><a href="#/destination/${item.id}">View destination →</a></div></article>`);
      new maplibregl.Marker({ element: markerContent, anchor: "center" }).setLngLat([item.lng, item.lat]).setPopup(popup).addTo(map);
      visiblePlaces.extend([item.lng, item.lat]);
    });

    const fitVisiblePlaces = () => {
      map.resize();
      if (visiblePlaces.isEmpty()) return;
      const compact = mapElement.clientWidth < 700;
      map.fitBounds(visiblePlaces, {
        padding: compact ? { top: 54, right: 42, bottom: 54, left: 42 } : { top: 70, right: 70, bottom: 70, left: 70 },
        maxZoom: 7,
        duration: 0
      });
    };

    map.once("load", () => {
      fitVisiblePlaces();
      statusElement?.remove();
    });
    activeMapObserver = new ResizeObserver(() => map.resize());
    activeMapObserver.observe(mapElement);
    map.on("error", event => console.info("Map tile notice:", event.error?.message || "A map tile could not be loaded."));
  } catch (error) {
    if (statusElement) {
      statusElement.innerHTML = `<strong>The interactive map could not load</strong><p>Check your internet connection, then refresh this page.</p>`;
      statusElement.classList.add("error");
    }
    console.info(error.message);
  }
}

function mapPage() {
  const mapItems = filteredMapItems();
  return `${nav("map")}<main id="main"><div class="map-layout"><aside class="map-panel"><span class="eyebrow">Explore from north to south</span><h1>Jordan on the Map</h1><p class="map-intro">Find ${destinations.length} remarkable places across the Kingdom, from green northern hills to Aqaba's Red Sea coast.</p><form class="search-box" data-form="map-search"><input name="q" value="${escapeHtml(state.mapQuery)}" placeholder="Search places or regions" aria-label="Search the Jordan map"><span>⌕</span></form><div class="map-results"><strong>${mapItems.length}</strong> ${mapItems.length === 1 ? "place" : "places"} shown</div>${mapItems.length ? mapItems.map(item => `<a class="map-card" href="#/destination/${item.id}"><span class="map-card-number">${item.mapNumber}</span><img src="${item.image}" alt="${item.name}"><div><h3>${item.name}</h3><p>${item.region} · ${item.category}</p></div></a>`).join("") : `<div class="map-empty"><strong>No places found</strong><p>Try another city, region, or interest.</p></div>`}</aside><section class="map-canvas" aria-label="Interactive map showing places across Jordan"><div id="interactive-map" class="interactive-map"></div><div id="map-status" class="map-status"><span class="spinner" aria-hidden="true"></span><strong>Loading the map…</strong></div></section></div></main>`;
}

function plannerSidebar(active = 1) {
  return `<aside class="planner-sidebar"><h3>Your Trip</h3><p>Build a journey that balances icons and discoveries.</p>${["Trip Basics", "Interests", "Places", "Review"].map((label, i) => `<div class="step ${i + 1 <= active ? "active" : ""}"><span>${i + 1}</span>${label}</div>`).join("")}</aside>`;
}

function tripPlannerPage() {
  return `${nav("trip-planner")}<main id="main">${pageHero("Shape Your Journey", "Trip Planner", "Choose your pace and interests, then adjust a simple day-by-day route.", IMG.wadiRum)}<section class="section"><div class="container planner-shell">${plannerSidebar(3)}<div class="planner-main"><span class="eyebrow">Your preferences</span><h2 style="font-size:2.2rem">Plan your Jordan adventure</h2><div class="form-grid"><div class="field"><label for="trip-name">Trip name</label><input id="trip-name" value="${escapeHtml(state.trip.name)}"></div><div class="field"><label for="trip-days">Trip duration</label><select id="trip-days">${[3,5,7,10,14].map(d => `<option value="${d}" ${state.trip.days === d ? "selected" : ""}>${d} days</option>`).join("")}</select></div></div><h3 style="margin-top:32px">What interests you?</h3><div class="interest-grid">${["History", "Nature", "Adventure", "Culture", "Water", "Wellness"].map(x => `<button class="interest ${state.trip.interests.includes(x) ? "selected" : ""}" data-interest="${x}"><strong>${x}</strong><br><small>${({History:"Ancient cities & stories",Nature:"Trails & reserves",Adventure:"Desert & canyon",Culture:"Food & local life",Water:"Sea & springs",Wellness:"Slow, restorative days"})[x]}</small></button>`).join("")}</div><h3 style="margin-top:32px">Places in your trip</h3><div class="grid cards-3">${destinations.filter(x => state.trip.stops.includes(x.id)).slice(0,6).map(x => destinationCard(x, x.hidden)).join("")}</div><div class="planner-footer"><a class="btn outline" href="#/explore">Add more places</a><button class="btn primary" data-action="build-itinerary">Build Itinerary →</button></div></div></div></section></main>${footer()}`;
}

function itineraryDays() {
  const stops = state.trip.stops.map(findDestination);
  return Array.from({ length: Math.min(state.trip.days, 7) }, (_, index) => {
    const first = stops[index % stops.length];
    const second = stops[(index + 1) % stops.length];
    return `<article class="day"><div class="day-head"><div><span class="eyebrow">Day ${index + 1}</span><h3>${first.region}</h3></div><button class="btn ghost" data-action="adjust-day">Adjust day</button></div><div class="stop"><span class="stop-time">09:00</span><img src="${first.image}" alt="${first.name}"><div><h3>${first.name}</h3><p>${first.subtitle}</p></div><button class="icon-btn" aria-label="Drag stop">↕</button></div>${index % 2 === 0 ? `<div class="stop"><span class="stop-time">15:00</span><img src="${second.image}" alt="${second.name}"><div><h3>${second.name}</h3><p>A relaxed second stop with time to explore.</p></div><button class="icon-btn" aria-label="Drag stop">↕</button></div>` : ""}</article>`;
  }).join("");
}

function itineraryPage() {
  return `${nav("trip-planner")}<main id="main">${pageHero("Your Route is Ready", escapeHtml(state.trip.name), `${state.trip.days} days · ${state.trip.stops.length} places · Fully adjustable`, IMG.petra)}<section class="section"><div class="container detail-layout"><div>${itineraryDays()}</div><aside class="booking-box"><span class="eyebrow">Trip Overview</span><h3>${escapeHtml(state.trip.name)}</h3><p>${state.trip.days} days across Jordan, shaped around ${state.trip.interests.join(", ").toLowerCase()}.</p><div class="divider"></div><div class="meta"><span>${state.trip.stops.length} destinations</span><span>${state.trip.days} days</span></div><div class="booking-actions"><button class="btn primary wide" data-action="save-trip">Save Trip</button><a class="btn outline wide" href="#/trip-planner">Edit Preferences</a><button class="btn ghost wide" data-action="share-trip">Share Overview</button></div></aside></div></section></main>${footer()}`;
}

function favoritesPage() {
  const saved = destinations.filter(x => state.favorites.includes(x.id));
  return `${nav("favorites")}<main id="main">${pageHero("Your Collection", "Favorite Places", "Keep the places that inspire you together, then turn them into a journey.", IMG.deadSea)}<section class="section"><div class="container">${saved.length ? `<div class="section-head"><div><span class="eyebrow">${saved.length} Saved Places</span><h2>Ready when you are</h2></div><a class="btn primary" href="#/trip-planner">Plan from Favorites</a></div><div class="grid cards-3">${saved.map(x => destinationCard(x, x.hidden)).join("")}</div>` : `<div class="empty-state"><h2>Your favorites are waiting</h2><p>Save destinations and hidden gems to find them quickly here.</p><a class="btn primary" href="#/explore">Explore Jordan</a></div>`}</div></section></main>${footer()}`;
}

function authPage(mode) {
  const signup = mode === "signup";
  return `${nav("")}<main id="main" class="auth-page"><section class="auth-visual"><div><span class="eyebrow" style="color:#f1cc8d">Beyond the Guidebook</span><h2>Your Jordan journey begins here.</h2><p>Save places, shape a day-by-day route, and return to your trip whenever inspiration strikes.</p></div></section><section class="auth-form-wrap"><form class="auth-form" data-form="auth" data-mode="${mode}"><span class="eyebrow">${signup ? "Create your account" : "Welcome back"}</span><h1>${signup ? "Sign Up" : "Log In"}</h1><p>${signup ? "Start saving places and planning your trip." : "Continue planning the Jordan you want to discover."}</p>${signup ? `<div class="field"><label for="name">Full name</label><input id="name" name="name" autocomplete="name" required placeholder="Your name"></div>` : ""}<div class="field"><label for="email">Email address</label><input id="email" name="email" type="email" autocomplete="email" required placeholder="you@example.com"></div><div class="field"><label for="password">Password</label><input id="password" name="password" type="password" minlength="6" autocomplete="${signup ? "new-password" : "current-password"}" required placeholder="At least 6 characters"></div><p class="form-error" id="auth-error" role="alert"></p><button class="btn primary wide" type="submit">${signup ? "Create Account" : "Log In"}</button><p class="auth-switch">${signup ? "Already have an account?" : "New to Beyond Jordan?"} <a class="text-link" href="#/${signup ? "login" : "signup"}">${signup ? "Log In" : "Sign Up"}</a></p></form></section></main>`;
}

function profilePage() {
  if (!state.user) return authPage("login");
  return `${nav("profile")}<main id="main">${pageHero("Your Beyond Jordan", "Profile & Saved Trips", "Return to the journeys you’ve planned and the places you love.", IMG.amman)}<section class="section"><div class="container"><div class="profile-head"><div class="profile-user"><span class="avatar">${escapeHtml(state.user.name?.[0]?.toUpperCase() || "T")}</span><div><h2>${escapeHtml(state.user.name || "Traveler")}</h2><p>${escapeHtml(state.user.email || "")}</p></div></div><button class="btn light" data-action="logout">Log Out</button></div><div class="section-head" style="margin-top:64px"><div><span class="eyebrow">Saved Trips</span><h2>Your Journeys</h2></div><a class="btn primary" href="#/trip-planner">Plan New Trip</a></div><div class="grid cards-3"><article class="trip-card"><span class="tag">${state.trip.days} days</span><h3 style="margin-top:18px">${escapeHtml(state.trip.name)}</h3><p>Jordan · ${state.trip.interests.join(" · ")}</p><div class="meta"><span>${state.trip.stops.length} places</span><span>Updated today</span></div><div class="progress"><span style="width:78%"></span></div><a class="btn outline wide" style="margin-top:22px" href="#/itinerary">Open Itinerary</a></article></div></div></section></main>${footer()}`;
}

function notFoundPage() {
  return `${nav("")}<main id="main"><section class="section"><div class="container empty-state"><span class="eyebrow">Lost in Jordan?</span><h1 style="font-size:3.5rem">This path ends here.</h1><p>Let’s return to the map and find another route.</p><a class="btn primary" href="#/home">Back Home</a></div></section></main>${footer()}`;
}

function render() {
  destroyInteractiveMap();
  const current = route();
  const [page, id] = current.split("/");
  const pages = {
    home: homePage,
    explore: () => explorePage(false),
    search: () => explorePage(true),
    "hidden-gems": hiddenGemsPage,
    activities: activitiesPage,
    map: mapPage,
    "trip-planner": tripPlannerPage,
    itinerary: itineraryPage,
    favorites: favoritesPage,
    login: () => authPage("login"),
    signup: () => authPage("signup"),
    profile: profilePage
  };
  let html;
  if (page === "destination") html = destinationDetailPage(id);
  else if (page === "activity") html = activityDetailPage(id);
  else html = (pages[page] || notFoundPage)();
  app.innerHTML = html;
  document.title = `${page === "home" ? "Beyond Jordan" : page.replaceAll("-", " ").replace(/\b\w/g, c => c.toUpperCase())} — Beyond Jordan`;
  window.scrollTo({ top: 0, behavior: "instant" });
  if (page === "map") requestAnimationFrame(() => initInteractiveMap(filteredMapItems()));
}

function toast(message) {
  toastRoot.innerHTML = `<div class="toast">✓ ${escapeHtml(message)}</div>`;
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => { toastRoot.innerHTML = ""; }, 3500);
}

function requireAuth(action) {
  if (state.user) return true;
  state.pendingAction = action;
  sessionStorage.setItem("bj-pending", action);
  location.hash = "#/login";
  toast("Log in to continue where you left off.");
  return false;
}

async function toggleFavorite(id) {
  if (!requireAuth(`favorite:${id}`)) return;
  state.favorites = state.favorites.includes(id) ? state.favorites.filter(item => item !== id) : [...state.favorites, id];
  await syncCloudData();
  render();
  toast(state.favorites.includes(id) ? `${findDestination(id).name} saved to favorites.` : `${findDestination(id).name} removed from favorites.`);
}

function openAddTripModal(id) {
  if (!requireAuth(`trip:${id}`)) return;
  const item = findDestination(id);
  modalRoot.innerHTML = `<div class="modal-backdrop" data-action="close-modal"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" data-modal><div class="modal-head"><h2 id="modal-title">Add to Trip</h2><button class="icon-btn" data-action="close-modal" aria-label="Close">×</button></div><div class="modal-body"><span class="eyebrow">Choose a trip</span><label class="radio-card"><span>${escapeHtml(state.trip.name)}</span><input type="radio" checked name="trip"></label><label class="radio-card"><span>Create New Trip</span><input type="radio" name="trip"></label><h3 style="font-family:'DM Sans',sans-serif;font-size:.9rem;margin-top:26px">Which day?</h3><div class="day-picker">${Array.from({ length: Math.min(state.trip.days, 7) }, (_, i) => `<button class="day-choice ${i === 0 ? "active" : ""}" data-day="${i + 1}"><small>DAY</small><br><strong>${i + 1}</strong></button>`).join("")}</div><div class="field"><label for="trip-note">Notes</label><textarea id="trip-note" placeholder="Add a note about this stop..."></textarea></div></div><div class="modal-foot"><button class="btn ghost" data-action="close-modal">Cancel</button><button class="btn primary" data-confirm-trip="${item.id}">Add to Trip</button></div></section></div>`;
  document.body.classList.add("modal-open");
  modalRoot.querySelector("[data-modal]").addEventListener("click", event => event.stopPropagation());
}

function closeModal() {
  modalRoot.innerHTML = "";
  document.body.classList.remove("modal-open");
}

async function confirmTrip(id) {
  if (!state.trip.stops.includes(id)) state.trip.stops.push(id);
  await syncCloudData();
  closeModal();
  toast(`${findDestination(id).name} added to ${state.trip.name}.`);
}

async function authenticate(form) {
  const mode = form.dataset.mode;
  const data = new FormData(form);
  const name = String(data.get("name") || "Traveler").trim();
  const email = String(data.get("email") || "").trim();
  const password = String(data.get("password") || "");
  const errorBox = form.querySelector("#auth-error");
  const submit = form.querySelector("button[type='submit']");
  errorBox.textContent = "";
  submit.disabled = true;
  submit.textContent = mode === "signup" ? "Creating account…" : "Logging in…";
  try {
    if (state.firebase) {
      const { auth, firebaseAuth } = state.firebase;
      if (mode === "signup") {
        const result = await firebaseAuth.createUserWithEmailAndPassword(auth, email, password);
        await firebaseAuth.updateProfile(result.user, { displayName: name });
        state.user = { uid: result.user.uid, name, email };
      } else {
        const result = await firebaseAuth.signInWithEmailAndPassword(auth, email, password);
        state.user = { uid: result.user.uid, name: result.user.displayName || email.split("@")[0], email };
      }
    } else {
      await new Promise(resolve => setTimeout(resolve, 450));
      state.user = { uid: "demo-user", name: mode === "signup" ? name : email.split("@")[0], email };
    }
    storeLocal();
    const pending = state.pendingAction || sessionStorage.getItem("bj-pending");
    state.pendingAction = "";
    sessionStorage.removeItem("bj-pending");
    if (pending?.startsWith("favorite:")) {
      const id = pending.split(":")[1];
      if (!state.favorites.includes(id)) state.favorites.push(id);
      await syncCloudData();
      location.hash = `#/destination/${id}`;
      setTimeout(() => toast(`${findDestination(id).name} saved to favorites.`), 40);
    } else if (pending?.startsWith("trip:")) {
      const id = pending.split(":")[1];
      location.hash = `#/destination/${id}`;
      setTimeout(() => openAddTripModal(id), 80);
    } else {
      location.hash = "#/profile";
    }
  } catch (error) {
    const known = {
      "auth/email-already-in-use": "An account already exists for this email.",
      "auth/invalid-credential": "Email or password is incorrect.",
      "auth/weak-password": "Choose a password with at least 6 characters.",
      "auth/invalid-email": "Enter a valid email address."
    };
    errorBox.textContent = known[error.code] || "We couldn’t complete that request. Please try again.";
    submit.disabled = false;
    submit.textContent = mode === "signup" ? "Create Account" : "Log In";
  }
}

async function logout() {
  if (state.firebase) await state.firebase.firebaseAuth.signOut(state.firebase.auth);
  state.user = null;
  storeLocal();
  location.hash = "#/home";
  toast("You’re logged out.");
}

app.addEventListener("click", async event => {
  const favorite = event.target.closest("[data-favorite]");
  if (favorite) {
    event.preventDefault();
    await toggleFavorite(favorite.dataset.favorite);
    return;
  }
  const addTrip = event.target.closest("[data-add-trip]");
  if (addTrip) {
    event.preventDefault();
    openAddTripModal(addTrip.dataset.addTrip);
    return;
  }
  const filter = event.target.closest("[data-filter]");
  if (filter) {
    state.activeFilter = filter.dataset.filter;
    render();
    return;
  }
  const interest = event.target.closest("[data-interest]");
  if (interest) {
    const value = interest.dataset.interest;
    state.trip.interests = state.trip.interests.includes(value) ? state.trip.interests.filter(x => x !== value) : [...state.trip.interests, value];
    await syncCloudData();
    render();
    return;
  }
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (!action) return;
  if (action === "menu") {
    const menu = document.querySelector("#nav-links");
    menu.classList.toggle("open");
    event.target.setAttribute("aria-expanded", String(menu.classList.contains("open")));
  }
  if (action === "clear-search") {
    state.query = "";
    state.activeFilter = "All";
    render();
  }
  if (action === "build-itinerary") {
    state.trip.name = document.querySelector("#trip-name")?.value.trim() || state.trip.name;
    state.trip.days = Number(document.querySelector("#trip-days")?.value || state.trip.days);
    await syncCloudData();
    location.hash = "#/itinerary";
  }
  if (action === "save-trip") {
    if (!requireAuth("save-trip")) return;
    await syncCloudData();
    toast("Trip saved to your profile.");
  }
  if (action === "share-trip") {
    await navigator.clipboard?.writeText(location.href);
    toast("Itinerary link copied.");
  }
  if (action === "adjust-day") toast("Drag-and-drop controls are ready for itinerary changes.");
  if (action === "logout") await logout();
});

modalRoot.addEventListener("click", async event => {
  const day = event.target.closest("[data-day]");
  if (day) {
    modalRoot.querySelectorAll("[data-day]").forEach(node => node.classList.remove("active"));
    day.classList.add("active");
  }
  if (event.target.closest("[data-action='close-modal']")) closeModal();
  const confirm = event.target.closest("[data-confirm-trip]");
  if (confirm) await confirmTrip(confirm.dataset.confirmTrip);
});

app.addEventListener("submit", event => {
  const form = event.target;
  if (form.matches("[data-form='search']")) {
    event.preventDefault();
    state.query = new FormData(form).get("q")?.trim() || "";
    location.hash = "#/search";
    render();
  }
  if (form.matches("[data-form='map-search']")) {
    event.preventDefault();
    state.mapQuery = new FormData(form).get("q")?.trim() || "";
    render();
  }
  if (form.matches("[data-form='newsletter']")) {
    event.preventDefault();
    form.reset();
    toast("You’re subscribed to Hidden Gems updates.");
  }
  if (form.matches("[data-form='auth']")) {
    event.preventDefault();
    authenticate(form);
  }
});

window.addEventListener("hashchange", render);
window.addEventListener("keydown", event => { if (event.key === "Escape") closeModal(); });

render();
initFirebase();
