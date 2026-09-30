import { CARTO_BASEMAP_STYLE } from "./map-config.js";

const IMG = {
  petra: "https://images.unsplash.com/photo-1551171129-8ce1ebb911b3?auto=format&fit=crop&w=1600&q=86",
  wadiRum: "https://images.unsplash.com/photo-1673581209633-effd71cfa863?auto=format&fit=crop&w=1600&q=86",
  deadSea: "https://images.unsplash.com/photo-1743943932415-947f79353387?auto=format&fit=crop&w=1600&q=86",
  jerash: "https://images.unsplash.com/photo-1667934776328-73ab81b66915?auto=format&fit=crop&w=1600&q=86",
  aqaba: "https://mc-5126cf56-570a-4992-b7aa-ea41-afd-ep-buemfvb4e0c8e9a7.a03.azurefd.net/-/media/Explore-Jordan/Sun-Sand-and-Sea/Aqaba/Coral-Diving-Center/Coral-Diving-Center-Image.jpeg?rev=323e26a7d20c47719d92e4ad8d9fdd05&w=1260",
  amman: "https://images.unsplash.com/photo-1627734633024-867b54f26e1f?auto=format&fit=crop&w=1600&q=86",
  romanTheatre: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Roman%20theater%20of%20Amman%2001.jpg?width=1600",
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
  { id: "amman-roman-theatre", name: "Amman Roman Theatre", subtitle: "Philadelphia's Grand Theatre", region: "Amman", category: "History", rating: "4.8", duration: "1–2 hours", image: IMG.romanTheatre, lat: 31.95165805, lng: 35.9393934, description: "Climb the steep cavea of Amman's monumental 2nd-century Roman theatre, built into the hillside when the city was known as Philadelphia." },
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

const DESTINATION_THEMES = {
  petra: ["#a84f3d", "#3d211c", "#f6e7df"], "wadi-rum": ["#ad5c32", "#402219", "#f5e7db"],
  "dead-sea": ["#4c8792", "#173e47", "#e5f1f2"], jerash: ["#a47a42", "#44331f", "#f3ecdf"],
  aqaba: ["#167e98", "#073b49", "#e2f3f6"], amman: ["#56645d", "#26312c", "#e9eeeb"],
  "amman-roman-theatre": ["#9d6742", "#3b281e", "#f2e8de"],
  madaba: ["#8f6544", "#3f2e24", "#f1e9e1"], "mount-nebo": ["#7d765c", "#363426", "#eeede5"],
  "wadi-mujib": ["#547d70", "#213c34", "#e4efeb"], karak: ["#866246", "#39291f", "#efe7df"],
  dana: ["#547451", "#233722", "#e6eee3"], azraq: ["#367f88", "#143b40", "#e1f0f1"],
  shobak: ["#9c6848", "#402b20", "#f2e8df"], ajloun: ["#44714d", "#193721", "#e3efe5"],
  "umm-qais": ["#65705b", "#293126", "#e8ece4"], "iraq-al-amir": ["#557855", "#223a24", "#e5efe5"],
  "as-salt": ["#b07b3e", "#48331f", "#f5ecdf"], "umm-al-jimal": ["#5b6060", "#262b2b", "#e8eaea"],
  pella: ["#74804b", "#303820", "#ebefdf"], "main-hot-springs": ["#608579", "#263e38", "#e5efec"]
};

const DESTINATION_CONTENT = {
  petra: { title: "The Rose City", story: "Petra rewards travelers who slow down. Beyond the Treasury, trails climb toward carved façades, high places, quiet valleys, and the monumental Monastery. Every layer reveals how the Nabataeans shaped water, trade, and stone into a city that still feels alive.", love: ["The first reveal of the Treasury through the Siq", "Hundreds of carved façades beyond the famous viewpoint", "Sunset colors that transform the sandstone"], tip: "Start early, wear shoes with grip, carry water, and leave time to explore beyond the Treasury." },
  "wadi-rum": { title: "Silence written in stone", story: "Wadi Rum is not an empty desert. It is a vast cultural landscape of sandstone arches, inscriptions, open valleys, and Bedouin memory. The best visits balance adventure with stillness: a jeep route, a short walk, tea by the fire, and time beneath an exceptionally wide sky.", love: ["Monumental sandstone and granite formations", "Bedouin-hosted camps and desert storytelling", "Stargazing far from city light"], tip: "Stay overnight if you can—the desert changes character at sunset and again before sunrise." },
  "dead-sea": { title: "The lowest shore on Earth", story: "The Dead Sea is both a geological wonder and a place to pause. Mineral-rich water, sculptural salt edges, and the steep mountains of the Rift Valley create an atmosphere unlike anywhere else in Jordan.", love: ["Effortless floating in mineral-rich water", "Warm light across the Rift Valley", "A restorative pause between active travel days"], tip: "Avoid freshly shaved or irritated skin, protect your eyes, and rinse with fresh water after floating." },
  jerash: { title: "A city of columns and echoes", story: "Jerash makes Roman urban life unusually easy to imagine. Walk through Hadrian’s Arch, cross the Oval Plaza, follow the Cardo, and listen for the acoustics of its theatres while later churches and homes reveal the city’s many lives.", love: ["The sweeping geometry of the Oval Plaza", "A remarkably complete colonnaded street", "Theatres, temples, gates, and layered history"], tip: "Visit in softer morning or late-afternoon light and allow at least two unhurried hours." },
  aqaba: { title: "Jordan meets the Red Sea", story: "Aqaba brings a different rhythm to a Jordan journey. Coral gardens sit close to shore, mountains frame the Gulf, and warm evenings invite slow waterfront walks, seafood, and a break from long road days.", love: ["Accessible coral reefs and clear water", "Warm coastal evenings throughout much of the year", "Easy pairing with Wadi Rum"], tip: "Choose reef-responsible operators, never touch coral, and check sea conditions before any water activity." },
  amman: { title: "Old stories, new energy", story: "Amman unfolds hill by hill. Roman remains look over a dense downtown of markets and bakeries, while nearby neighborhoods add galleries, independent cafés, design studios, and a distinctly contemporary Jordanian voice.", love: ["Citadel views over the city’s pale hills", "Downtown food, markets, and street life", "Creative neighborhoods with local character"], tip: "Plan by neighborhood—the city is hilly, and short distances on a map can take longer than expected." },
  "amman-roman-theatre": { title: "The grand stage of ancient Philadelphia", story: "The Roman Theatre was built in the 2nd century AD during the reign of Emperor Antoninus Pius, when Amman was the Decapolis city of Philadelphia. Its semicircular seating, orchestra, stage, entrances, and backstage rooms once served theatrical and musical performances for about 6,000 spectators. The three seating levels reflected the social order of the Roman city, while the restored monument still hosts cultural events today. Its lower spaces also contain the Museum of Popular Life and the Jordan Folklore Museum.", love: ["A dramatic 6,000-seat cavea rising above downtown", "Clear views across the theatre, Odeon, and Hashemite Plaza", "Two small museums that add Jordanian costume and daily-life context"], tip: "Combine it with the nearby Odeon, Nymphaeum, downtown markets, and Amman Citadel. The steps are steep and exposed, so wear stable shoes and bring sun protection." },
  dana: { title: "Jordan in one dramatic valley", story: "Dana descends through a remarkable sequence of landscapes, from Mediterranean highlands toward the arid Wadi Araba. Village life, biodiversity, and long-distance trails make it one of Jordan’s most rewarding places for travelers who want depth and quiet.", love: ["Big canyon views from the historic village", "Trails crossing several ecosystems", "Community-led stays and local guiding"], tip: "Trail conditions and guide requirements vary, so confirm your route with a local reserve operator." },
  ajloun: { title: "Forest hills and fortress views", story: "Ajloun offers a greener side of Jordan. Oak and pine hills surround a strategically placed medieval castle, while village landscapes, olive groves, and walking trails make the north feel intimate and refreshing.", love: ["Ayyubid architecture and defensive details", "Forest air and northern hill views", "Village trails and olive landscapes"], tip: "Pair the castle with a forest walk and Jerash for a balanced northern day." }
};

const DESTINATION_GALLERY = {
  petra: ["https://images.unsplash.com/photo-1615811648503-479d06197ff3?auto=format&fit=crop&w=1800&q=84"],
  "dead-sea": ["https://images.unsplash.com/photo-1581614787005-f18873bc0df9?auto=format&fit=crop&w=1800&q=84"],
  jerash: ["https://images.unsplash.com/photo-1774998626530-4a0b9f51c392?auto=format&fit=crop&w=1800&q=84", "https://images.unsplash.com/photo-1633788409811-c73f537c4afe?auto=format&fit=crop&w=1800&q=84", "https://images.unsplash.com/photo-1709912152395-787679e56451?auto=format&fit=crop&w=1800&q=84"],
  "amman-roman-theatre": ["https://commons.wikimedia.org/wiki/Special:Redirect/file/Roman%20theater%20of%20Amman%2004.jpg?width=1600", "https://commons.wikimedia.org/wiki/Special:Redirect/file/Roman%20theater%20of%20Amman%2006.jpg?width=1600"]
};

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
  mapQuery: "",
  aiPlan: null,
  aiPreferences: null,
  aiMessages: [{ role: "assistant", text: "Marhaba! Tell me what kind of Jordan experience you want, and I’ll help you shape it." }],
  aiBusy: false,
  aiOnline: false,
  aiError: ""
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
    const [{ firebaseConfig, appCheckSiteKey }, firebaseApp, firebaseAuth, firestore] = await Promise.all([
      import("./firebase-config.js"),
      import("https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js"),
      import("https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js"),
      import("https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js")
    ]);
    if (!firebaseConfig.apiKey || firebaseConfig.apiKey.includes("YOUR_")) return;
    const firebase = firebaseApp.initializeApp(firebaseConfig);
    if (appCheckSiteKey) {
      const appCheck = await import("https://www.gstatic.com/firebasejs/12.19.0/firebase-app-check.js");
      appCheck.initializeAppCheck(firebase, {
        provider: new appCheck.ReCaptchaEnterpriseProvider(appCheckSiteKey),
        isTokenAutoRefreshEnabled: true
      });
    }
    const auth = firebaseAuth.getAuth(firebase);
    const db = firestore.getFirestore(firebase);
    state.firebase = { auth, db, firebaseAuth, firestore };
    try {
      const firebaseAI = await import("https://www.gstatic.com/firebasejs/12.19.0/firebase-ai.js");
      const ai = firebaseAI.getAI(firebase, { backend: new firebaseAI.GoogleAIBackend() });
      const systemInstruction = `You are Beyond Jordan AI, a capable, warm, natural general assistant inside a Jordan tourism website. Answer whatever ordinary question the user asks, not only travel questions, and keep a real multi-turn conversation: remember what the user already said, understand follow-ups and pronouns, ask useful clarifying questions, and never repeat a canned template. Answer in the user's language. Your strongest specialty is Jordan: history, stories, destinations, culture, food, activities, routes, comparisons, accessibility, packing, and trip planning. Give useful depth when asked, but keep simple answers concise. Never invent live prices, opening hours, permits, weather, safety conditions, visa rules, availability, or transport schedules; clearly say when a current official check is required.

Verified Beyond Jordan destination knowledge:
${destinationCatalog()}`;
      // ابدأ بالنموذج الأخف والأسرع، ثم انتقل تلقائيًا إلى البدائل عند تعذّر الرد.
      const modelNames = ["gemini-3.5-flash-lite", "gemini-3.5-flash", "gemini-3.1-flash-lite"];
      state.firebase.aiModels = modelNames.map(model => firebaseAI.getGenerativeModel(ai, { model, systemInstruction }));
      state.firebase.aiModel = state.firebase.aiModels[0];
    } catch (aiError) {
      state.aiError = aiError?.message || "Firebase AI Logic is not available";
      console.info("Firebase AI Logic is not enabled yet; the local smart concierge remains available.");
    }
    firebaseAuth.onAuthStateChanged(auth, async user => {
      state.user = user ? { uid: user.uid, name: user.displayName || user.email.split("@")[0], email: user.email } : null;
      storeLocal();
      if (user) await loadCloudData();
      render();
    });
  } catch (error) {
    state.aiError = error?.message || "Firebase failed to initialize";
    console.error("Firebase initialization failed:", error);
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
    ["explore", "Explore"], ["activities", "Activities"], ["hidden-gems", "Hidden Gems"], ["ai-guide", "✦ AI Guide"], ["map", "Map"], ["trip-planner", "Trip Planner"]
  ];
  return `<header class="site-header">
    <nav class="nav container" aria-label="Main navigation">
      <a class="brand" href="#/home" aria-label="Beyond Jordan home"><span class="brand-mark">B</span><span>BEYOND JORDAN</span></a>
      <div class="nav-links" id="nav-links">${links.map(([href, label]) => `<a class="nav-link ${href === "ai-guide" ? "ai-nav" : ""} ${active === href ? "active" : ""}" href="#/${href}">${label}</a>`).join("")}</div>
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
      <div class="footer-col"><h3>Plan</h3><a href="#/ai-guide">✦ AI Concierge</a><a href="#/trip-planner">Trip Planner</a><a href="#/favorites">Favorites</a><a href="#/map">Map & Nearby</a></div>
    </div>
    <div class="footer-bottom"><span class="footer-legal">© 2026 Beyond Jordan. All rights reserved. Made in Amman.<br><small>Photography: Unsplash, Wikimedia Commons, Royal Jordanian and credited travel partners.</small></span><span class="footer-socials"><span>Instagram</span><span>YouTube</span><span>Pinterest</span></span></div>
  </div></footer>`;
}

function favoriteButton(item) {
  const saved = state.favorites.includes(item.id);
  return `<button class="favorite-btn ${saved ? "saved" : ""}" data-favorite="${item.id}" aria-label="${saved ? "Remove from" : "Save to"} favorites" title="Save">${saved ? "♥" : "♡"}</button>`;
}

function destinationTheme(item) {
  const [accent, dark, soft] = DESTINATION_THEMES[item.id] || ["#bd6644", "#123c2f", "#f5efe4"];
  return { accent, dark, soft, style: `--place-accent:${accent};--place-dark:${dark};--place-soft:${soft}` };
}

function destinationContent(item) {
  return DESTINATION_CONTENT[item.id] || {
    title: item.subtitle,
    story: `${item.description} Here, landscape and local memory come together in a quieter chapter of Jordan. Take time to notice the details, meet the place at its own pace, and connect it thoughtfully with the wider region.`,
    love: [`A distinctive ${item.category.toLowerCase()} experience`, `A strong connection to ${item.region} and its local story`, "An easy way to see a less expected side of Jordan"],
    tip: `Allow ${item.duration.toLowerCase()} and confirm current access, opening times, and local guidance before you travel.`
  };
}

function galleryFor(item) {
  const nearby = destinations
    .filter(candidate => candidate.id !== item.id)
    .map(candidate => ({ ...candidate, distance: Math.hypot(candidate.lat - item.lat, candidate.lng - item.lng) }))
    .sort((a, b) => a.distance - b.distance);
  const exact = (DESTINATION_GALLERY[item.id] || []).map((src, index) => ({ src, label: `${item.name} · Detail ${index + 1}` }));
  const regional = nearby.map(place => ({ src: place.image, label: `Nearby ${place.name}` }));
  return [{ src: item.image, label: `${item.name} · Signature view` }, ...exact, ...regional]
    .filter((photo, index, all) => all.findIndex(candidate => candidate.src === photo.src) === index)
    .slice(0, 4);
}

function travelMatch(item) {
  const interests = state.trip.interests || [];
  const exact = interests.includes(item.category);
  const related = ({ Water: "Nature", Wellness: "Nature", Culture: "History" })[item.category];
  const matchedInterest = exact ? item.category : interests.includes(related) ? related : interests[0];
  return matchedInterest
    ? `${item.name} ${exact ? "strongly matches" : "adds contrast to"} your ${matchedInterest} travel style. ${item.duration} fits naturally into a ${state.trip.days}-day Jordan journey.`
    : `${item.name} is a strong choice for travelers drawn to ${item.category.toLowerCase()}, local context, and a well-paced Jordan journey.`;
}

function destinationCard(item, gem = false) {
  const theme = destinationTheme(item);
  return `<article class="${gem ? "gem-card" : "destination-card"}" style="${theme.style}">
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
    <section class="hero"><div class="container"><div class="hero-content"><span class="eyebrow" style="color:#f1cc8d">The Hashemite Kingdom of Jordan</span><h1>Every path in Jordan tells a story.</h1><p>Walk through ancient cities, cross open deserts, follow green valleys, and meet the local spirit that makes every journey unforgettable.</p><div class="hero-actions"><a class="btn light" href="#/explore">Explore Jordan</a><a class="btn outline" style="color:#fff;border-color:#fff" href="#/ai-guide">✦ Plan with AI</a></div><div class="hero-note"><span>✦ ${destinations.length} curated destinations</span><span>⌖ Local knowledge</span><span>♡ Save and plan freely</span></div></div></div></section>
    <section class="ai-home-strip"><div class="container"><div><span class="ai-orb">✦</span><span><strong>Meet your Jordan AI Concierge</strong><small>One smart plan, shaped around your time, pace, interests, and hidden-gem style.</small></span></div><a class="btn light" href="#/ai-guide">Build my journey →</a></div></section>
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
  const nearby = destinations.filter(x => x.id !== item.id).map(x => ({ ...x, proximity: Math.hypot(x.lat - item.lat, x.lng - item.lng) })).sort((a, b) => a.proximity - b.proximity).slice(0, 3);
  const content = destinationContent(item);
  const gallery = galleryFor(item);
  const theme = destinationTheme(item);
  return `${nav("explore")}<main id="main" class="destination-experience" style="${theme.style}">
    <section class="detail-hero" style="--detail-image:url('${item.image}')"><div class="container"><div class="detail-hero-copy"><span class="tag">${item.hidden ? "Hidden Gem" : "Iconic Destination"}</span><span class="eyebrow">${item.region} · Jordan</span><h1>${item.name}</h1><p>${content.title}</p><div class="detail-hero-meta"><span>★ ${item.rating}</span><span>${item.category}</span><span>${item.duration}</span></div></div></div></section>
    <section class="place-intro" id="place-story"><div class="container detail-layout"><article>
      <span class="eyebrow">Beyond the postcard</span><h2>${content.title}</h2><p class="detail-lead">${item.description}</p><p class="detail-copy">${content.story}</p>
      <div class="info-grid"><div class="info-box"><span>01</span><strong>Suggested visit</strong>${item.duration}</div><div class="info-box"><span>02</span><strong>Where</strong>${item.region}, Jordan</div><div class="info-box"><span>03</span><strong>Travel mood</strong>${item.category}</div></div>
      <section class="place-section"><div class="place-section-head"><div><span class="eyebrow">A visual preview</span><h2>The place & region in frames</h2></div><p>Open any image for a closer look. Nearby regional photographs are labeled clearly.</p></div><div class="place-gallery">${gallery.map((photo, index) => `<button class="gallery-tile gallery-tile-${index + 1}" data-gallery-image="${escapeHtml(photo.src)}" data-gallery-label="${escapeHtml(photo.label)}" aria-label="Open ${escapeHtml(photo.label)}"><img src="${photo.src}" alt="${escapeHtml(photo.label)}" loading="lazy"><span>${escapeHtml(photo.label)}</span></button>`).join("")}</div></section>
      <section class="place-section"><span class="eyebrow">Why go</span><h2>What stays with you</h2><div class="love-grid">${content.love.map((point, index) => `<div class="love-card"><span>0${index + 1}</span><p>${point}</p></div>`).join("")}</div></section>
      <section class="local-note"><span class="local-note-icon">⌖</span><div><span class="eyebrow">Travel thoughtfully</span><h3>A useful local note</h3><p>${content.tip}</p></div></section>
      <section class="place-section"><div class="place-section-head"><div><span class="eyebrow">Keep exploring</span><h2>Nearby places</h2></div><a class="text-link" href="#/map">See on the map →</a></div><div class="nearby-row">${nearby.map(x => `<a class="mini-card" href="#/destination/${x.id}" style="${destinationTheme(x).style}"><img src="${x.image}" alt="${x.name}" loading="lazy"><div><span class="eyebrow">${x.category}</span><strong>${x.name}</strong><p>${x.region} · ${x.duration}</p></div></a>`).join("")}</div></section>
    </article><aside class="booking-box place-booking"><span class="ai-match-badge">✦ Your travel match</span><h3>${item.name} fits your journey</h3><p>${travelMatch(item)}</p><div class="match-tags"><span>${item.category}</span><span>${item.duration}</span><span>${item.hidden ? "Off the usual path" : "Jordan essential"}</span></div><div class="booking-actions"><button class="btn primary wide" data-add-trip="${item.id}">Add to Trip Planner</button><button class="btn outline wide" data-favorite="${item.id}">${state.favorites.includes(item.id) ? "♥ Saved" : "♡ Save Place"}</button><a class="btn ghost wide" href="#/ai-guide">Ask the AI Guide</a></div></aside></div></section>
  </main>${footer()}`;
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
    const placesGeoJson = {
      type: "FeatureCollection",
      features: items.map(item => {
        visiblePlaces.extend([item.lng, item.lat]);
        return {
          id: item.mapNumber,
          type: "Feature",
          geometry: { type: "Point", coordinates: [item.lng, item.lat] },
          properties: {
            id: item.id,
            name: item.name,
            subtitle: item.subtitle,
            region: item.region,
            category: item.category,
            image: item.image,
            mapNumber: item.mapNumber
          }
        };
      })
    };

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
      // ترسم النقاط داخل Canvas الخريطة نفسها حتى لا تنفصل عن مواقعها أثناء التكبير أو التصغير.
      map.addSource("destinations", { type: "geojson", data: placesGeoJson });
      map.addLayer({
        id: "destination-halos",
        type: "circle",
        source: "destinations",
        paint: {
          "circle-radius": ["case", ["boolean", ["feature-state", "hover"], false], 28, 20],
          "circle-color": "#bd6644",
          "circle-opacity": ["case", ["boolean", ["feature-state", "hover"], false], 0.24, 0.09],
          "circle-blur": 0.35,
          "circle-radius-transition": { duration: 180, delay: 0 },
          "circle-opacity-transition": { duration: 180, delay: 0 }
        }
      });
      map.addLayer({
        id: "destination-points",
        type: "circle",
        source: "destinations",
        paint: {
          "circle-radius": ["case", ["boolean", ["feature-state", "hover"], false], 19, 15],
          "circle-color": ["case", ["boolean", ["feature-state", "hover"], false], "#0b2d23", "#bd6644"],
          "circle-stroke-width": ["case", ["boolean", ["feature-state", "hover"], false], 4, 3],
          "circle-stroke-color": "#ffffff",
          "circle-radius-transition": { duration: 180, delay: 0 },
          "circle-color-transition": { duration: 180, delay: 0 },
          "circle-stroke-width-transition": { duration: 180, delay: 0 }
        }
      });
      map.addLayer({
        id: "destination-labels",
        type: "symbol",
        source: "destinations",
        layout: {
          "text-field": ["to-string", ["get", "mapNumber"]],
          "text-size": 11,
          "text-allow-overlap": true,
          "text-ignore-placement": true
        },
        paint: { "text-color": "#ffffff" }
      });

      map.on("click", event => {
        const features = map.queryRenderedFeatures(event.point, { layers: ["destination-labels", "destination-points"] });
        if (!features.length) return;
        const feature = features[0];
        const place = feature.properties;
        new maplibregl.Popup({ offset: 22, maxWidth: "290px" })
          .setLngLat(feature.geometry.coordinates)
          .setHTML(`<article class="map-info-window"><img src="${place.image}" alt=""><div><span>${place.category} · ${place.region}</span><h3>${place.name}</h3><p>${place.subtitle}</p><a href="#/destination/${place.id}">View destination →</a></div></article>`)
          .addTo(map);
      });
      let hoveredPlaceId = null;
      map.on("mousemove", event => {
        const features = map.queryRenderedFeatures(event.point, { layers: ["destination-labels", "destination-points"] });
        const nextId = features[0]?.id ?? null;
        if (hoveredPlaceId !== null && hoveredPlaceId !== nextId) {
          map.setFeatureState({ source: "destinations", id: hoveredPlaceId }, { hover: false });
        }
        if (nextId !== null && hoveredPlaceId !== nextId) {
          map.setFeatureState({ source: "destinations", id: nextId }, { hover: true });
        }
        hoveredPlaceId = nextId;
        map.getCanvas().style.cursor = nextId !== null ? "pointer" : "";
      });
      map.on("mouseout", () => {
        if (hoveredPlaceId !== null) map.setFeatureState({ source: "destinations", id: hoveredPlaceId }, { hover: false });
        hoveredPlaceId = null;
        map.getCanvas().style.cursor = "";
      });

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

const AI_INTERESTS = ["History", "Nature", "Adventure", "Culture", "Water", "Wellness"];

function destinationCatalog() {
  return destinations.map(item => {
    const content = destinationContent(item);
    return `${item.id}: ${item.name} | ${item.region} | ${item.category} | ${item.duration}${item.hidden ? " | hidden gem" : ""} | ${item.description} Story: ${content.story} Highlights: ${content.love.join("; ")} Practical note: ${content.tip}`;
  }).join("\n");
}

function buildSmartPlan(preferences) {
  const interests = preferences.interests.length ? preferences.interests : ["Culture", "History"];
  const paceBonus = preferences.pace === "adventurous" ? "Adventure" : preferences.pace === "relaxed" ? "Wellness" : "Culture";
  const wanted = new Set([...interests, paceBonus]);
  const count = Math.min(9, Math.max(4, preferences.days + 1));
  const ranked = [...destinations].sort((a, b) => {
    const score = item => Number(item.rating) + (wanted.has(item.category) ? 5 : 0) + (item.hidden ? 1.2 : 0) + (item.iconic ? .7 : 0);
    return score(b) - score(a);
  });
  const selected = ranked.slice(0, count);
  if (!selected.some(item => item.hidden)) selected[selected.length - 1] = destinations.find(item => item.hidden && wanted.has(item.category)) || destinations.find(item => item.hidden);
  if (!selected.some(item => item.id === "petra")) selected[Math.max(1, selected.length - 2)] = findDestination("petra");
  const unique = [...new Map(selected.map(item => [item.id, item])).values()];
  const ordered = [...unique].sort((a, b) => b.lat - a.lat);
  if (preferences.start === "aqaba") ordered.reverse();
  const hiddenGem = ordered.find(item => item.hidden) || destinations.find(item => item.hidden);
  return {
    title: `${preferences.days}-Day Jordan Story`,
    summary: `A ${preferences.pace} route balancing ${interests.join(" and ").toLowerCase()} with one memorable discovery beyond the classic guidebook.`,
    stopIds: ordered.map(item => item.id),
    travelDna: [preferences.pace, preferences.budget, ...interests.slice(0, 2)],
    hiddenGemId: hiddenGem.id,
    tips: [
      "Keep the first and last day lighter for arrival and departure.",
      "Confirm current opening times, trail access, weather, and transport before each stop.",
      `The route begins toward ${preferences.start === "aqaba" ? "southern Jordan" : "northern Jordan"} to reduce unnecessary backtracking.`
    ],
    source: "smart"
  };
}

async function runGemini(prompt) {
  const models = state.firebase?.aiModels || (state.firebase?.aiModel ? [state.firebase.aiModel] : []);
  if (!models.length) throw new Error("Firebase AI Logic is not available");
  let lastError;
  for (const model of models) {
    try {
      const result = await withAiTimeout(model.generateContent(prompt));
      const text = result.response.text();
      if (!text?.trim()) throw new Error("AI returned an empty answer");
      state.aiOnline = true;
      state.aiError = "";
      return text;
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error("The AI service is temporarily unavailable");
}

function withAiTimeout(request, timeoutMs = 12000) {
  return Promise.race([
    request,
    new Promise((_, reject) => setTimeout(() => reject(new Error("AI model timed out; trying the next model")), timeoutMs))
  ]);
}

async function runGeminiChat(message) {
  const models = state.firebase?.aiModels || (state.firebase?.aiModel ? [state.firebase.aiModel] : []);
  if (!models.length) throw new Error("Firebase AI Logic setup is incomplete");
  const history = state.aiMessages.slice(1, -1).map(item => ({
    role: item.role === "assistant" ? "model" : "user",
    parts: [{ text: item.text }]
  }));
  let lastError;
  for (const model of models) {
    try {
      const chat = model.startChat({
        history,
        generationConfig: { maxOutputTokens: 1100, temperature: 0.75, topP: 0.9 }
      });
      const result = await withAiTimeout(chat.sendMessage(message));
      const text = result.response.text();
      if (!text?.trim()) throw new Error("AI returned an empty answer");
      state.aiOnline = true;
      state.aiError = "";
      return text;
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error("The AI service is temporarily unavailable");
}

function parseAiPlan(text, preferences) {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start < 0 || end < start) throw new Error("AI response was not structured");
  const parsed = JSON.parse(text.slice(start, end + 1));
  const stopIds = (parsed.stopIds || []).filter(id => destinations.some(item => item.id === id)).slice(0, 9);
  if (stopIds.length < 3) throw new Error("AI route did not include enough valid places");
  return {
    title: String(parsed.title || `${preferences.days}-Day Jordan Journey`),
    summary: String(parsed.summary || "A personal route across Jordan."),
    stopIds,
    travelDna: Array.isArray(parsed.travelDna) ? parsed.travelDna.slice(0, 4).map(String) : preferences.interests,
    hiddenGemId: destinations.some(item => item.id === parsed.hiddenGemId) ? parsed.hiddenGemId : stopIds.find(id => findDestination(id).hidden),
    tips: Array.isArray(parsed.tips) ? parsed.tips.slice(0, 3).map(String) : [],
    source: "gemini"
  };
}

async function createAiPlan(form) {
  const data = new FormData(form);
  const preferences = {
    days: Number(data.get("days") || 7),
    pace: String(data.get("pace") || "balanced"),
    budget: String(data.get("budget") || "comfort"),
    start: String(data.get("start") || "amman"),
    interests: data.getAll("interests").map(String)
  };
  state.aiPreferences = preferences;
  state.aiBusy = true;
  render();
  try {
    const prompt = `Create a personalized Jordan itinerary using only IDs from this catalog.\nPreferences: ${JSON.stringify(preferences)}\nCatalog:\n${destinationCatalog()}\nReturn JSON only with this shape: {"title":"...","summary":"...","stopIds":["id"],"travelDna":["tag"],"hiddenGemId":"id","tips":["tip"]}. Choose 4-9 geographically sensible stops, include at least one hidden gem, and avoid claiming live information.`;
    state.aiPlan = parseAiPlan(await runGemini(prompt), preferences);
  } catch (error) {
    state.aiOnline = false;
    state.aiPlan = buildSmartPlan(preferences);
  }
  state.aiBusy = false;
  render();
  document.querySelector("#ai-result")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const DESTINATION_ALIASES = {
  petra: ["petra", "البتراء"], "wadi-rum": ["wadi rum", "وادي رم"], "dead-sea": ["dead sea", "البحر الميت"],
  jerash: ["jerash", "جرش"], aqaba: ["aqaba", "العقبة"], amman: ["amman", "عمان", "عمّان"],
  "amman-roman-theatre": ["amman roman theatre", "roman theatre", "roman theater", "المدرج الروماني", "المسرح الروماني"],
  madaba: ["madaba", "مادبا"], "mount-nebo": ["mount nebo", "جبل نيبو"], "wadi-mujib": ["wadi mujib", "وادي الموجب"],
  karak: ["karak", "الكرك"], dana: ["dana", "ضانا"], azraq: ["azraq", "الأزرق", "الازرق"],
  shobak: ["shobak", "الشوبك"], ajloun: ["ajloun", "عجلون"], "umm-qais": ["umm qais", "ام قيس", "أم قيس"],
  "iraq-al-amir": ["iraq al-amir", "iraq al amir", "عراق الأمير", "عراق الامير"], "as-salt": ["as-salt", "salt", "السلط"],
  "umm-al-jimal": ["umm al-jimal", "umm al jimal", "أم الجمال", "ام الجمال"], pella: ["pella", "بيلا", "طبقة فحل"],
  "main-hot-springs": ["ma'in", "main hot springs", "حمامات ماعين", "ماعين"]
};

const ARABIC_DESTINATION_GUIDE = {
  petra: { name: "البتراء", description: "مدينة نبطية منحوتة في الصخر الوردي، ازدهرت كمحطة مهمة على طرق التجارة القديمة وطوّر أهلها نظامًا متقدمًا لجمع المياه.", highlights: ["المشي في السيق وظهور الخزنة في نهايته", "الواجهات والمقابر والمسارات التي تمتد أبعد من الخزنة", "الدير ونقاط المشاهدة وألوان الصخر وقت الغروب"], tip: "ابدأ باكرًا، ارتدِ حذاءً مريحًا، واحمل الماء واترك وقتًا يتجاوز زيارة الخزنة فقط." },
  "wadi-rum": { name: "وادي رم", description: "صحراء واسعة من الجبال الرملية والأقواس الطبيعية والنقوش القديمة، ترتبط بتراث بدوي حي وتجربة سماء ليلية استثنائية.", highlights: ["جولات الصحراء بين التكوينات الصخرية", "الضيافة البدوية والشاي حول النار", "الغروب ومراقبة النجوم"], tip: "الإقامة ليلة واحدة تكشف جمال الوادي عند الغروب والفجر، وتأكد من اختيار مشغّل محلي موثوق." },
  "dead-sea": { name: "البحر الميت", description: "أخفض نقطة مكشوفة على سطح الأرض وبحيرة شديدة الملوحة تشتهر بالطفو والمشهد الجيولوجي الفريد.", highlights: ["تجربة الطفو بسهولة", "تكوينات الملح وإطلالات الأغوار", "الاسترخاء بين أيام الرحلة النشطة"], tip: "احمِ عينيك وتجنب الماء بعد الحلاقة أو عند وجود جروح، ثم اغتسل بماء عذب." },
  jerash: { name: "جرش", description: "واحدة من أفضل المدن الرومانية المحفوظة، وتضم الساحة البيضاوية وشارع الأعمدة والمسارح والمعابد وطبقات تاريخية لاحقة.", highlights: ["الساحة البيضاوية المميزة", "شارع الأعمدة والمسارح ذات الصوتيات الرائعة", "بوابة هادريان والمعابد والكنائس"], tip: "خصص ساعتين على الأقل وزرها صباحًا أو آخر النهار لتجنب الحر والاستمتاع بالإضاءة." },
  aqaba: { name: "العقبة", description: "مدينة الأردن الساحلية على البحر الأحمر، تجمع الشعاب المرجانية والمياه الدافئة والأجواء المسائية الهادئة.", highlights: ["الغوص والسنوركل قرب الشعاب", "الشاطئ والممشى والأجواء الدافئة", "سهولة دمجها مع وادي رم"], tip: "اختر نشاطًا يحافظ على الشعاب ولا تلمس المرجان، وتحقق من حالة البحر قبل النشاط." },
  amman: { name: "عمّان", description: "عاصمة مبنية على التلال تجمع آثار القلعة والمدرج الروماني وأسواق وسط البلد مع أحياء فنية ومقاهٍ وثقافة معاصرة.", highlights: ["إطلالة القلعة على تلال المدينة", "طعام وأسواق وسط البلد", "أحياء اللويبدة وجبل عمّان الإبداعية"], tip: "رتب يومك حسب الأحياء لأن المدينة جبلية والمسافات القصيرة قد تستغرق وقتًا." },
  "amman-roman-theatre": { name: "المدرّج الروماني في عمّان", description: "مسرح روماني ضخم بُني في القرن الثاني الميلادي في عهد الإمبراطور أنطونينوس بيوس، عندما كانت عمّان تُعرف باسم فيلادلفيا. كان مخصصًا للعروض المسرحية والموسيقية ويتسع لنحو 6,000 متفرج.", highlights: ["المدرجات الحجرية المرتفعة وصوتيات المسرح", "الإطلالة على ساحة الهاشمي ووسط البلد", "متحف الحياة الشعبية ومتحف الفولكلور في أجزائه السفلية"], tip: "ادمجه مع الأوديون وسبيل الحوريات وأسواق وسط البلد وجبل القلعة، وارتدِ حذاءً ثابتًا لأن الدرج مرتفع ومكشوف للشمس." },
  madaba: { name: "مادبا", description: "مدينة معروفة بفسيفسائها البيزنطية، وأشهرها خريطة الأراضي المقدسة، مع شوارع قديمة ومجتمع محلي متنوع.", highlights: ["خريطة مادبا الفسيفسائية", "الكنائس والمواقع الأثرية", "الأسواق والمطاعم المحلية"], tip: "ادمجها مع جبل نيبو في نصف يوم، وتحقق من مواعيد دخول الكنائس." },
  "mount-nebo": { name: "جبل نيبو", description: "قمة تاريخية ودينية تطل على وادي الأردن وتضم بقايا كنيسة وفسيفساء جميلة.", highlights: ["الإطلالة الواسعة على الأغوار", "الفسيفساء والبقايا الدينية", "قربه من مادبا"], tip: "الرؤية تعتمد على الطقس؛ زره في يوم صافٍ وادمجه مع مادبا." },
  "wadi-mujib": { name: "وادي الموجب", description: "وادي عميق قرب البحر الميت يشتهر بمسارات مائية موسمية بين جدران صخرية شاهقة.", highlights: ["المشي المائي داخل السيق", "المنحدرات والمناظر الدرامية", "مغامرة قريبة من البحر الميت"], tip: "فتح المسارات وشروط العمر تعتمد على الموسم والطقس؛ تحقق من المحمية قبل الذهاب." },
  karak: { name: "قلعة الكرك", description: "حصن ضخم على هضبة مرتفعة، يضم ممرات حجرية وقاعات مقببة ويروي تاريخًا معقدًا من العصور الوسطى.", highlights: ["الممرات والقاعات تحت الأرض", "الإطلالات من أسوار القلعة", "قصة طرق التجارة والصراعات التاريخية"], tip: "ارتدِ حذاءً ثابتًا وخذ ضوء الهاتف لبعض الممرات المعتمة." },
  dana: { name: "محمية ضانا", description: "منطقة طبيعية تنحدر من مرتفعات القرية نحو وادي عربة وتمر بعدة أنظمة بيئية ومسارات طويلة.", highlights: ["إطلالة قرية ضانا التاريخية", "المشي بين أودية وأنظمة بيئية متنوعة", "الإقامات المجتمعية والمرشدون المحليون"], tip: "بعض المسارات تحتاج دليلًا وتتغير حالتها، لذلك اتفق مع جهة محلية قبل الانطلاق." },
  azraq: { name: "محمية الأزرق المائية", description: "واحة رطبة وسط الصحراء الشرقية وموطن مهم للطيور المهاجرة قرب أراضٍ بازلتية سوداء.", highlights: ["مراقبة الطيور والممرات الخشبية", "التباين بين الماء والصحراء", "إمكانية دمجها مع قصور الصحراء"], tip: "أوقات مشاهدة الطيور تختلف حسب الموسم؛ اسأل المحمية عن أفضل وقت للزيارة." },
  shobak: { name: "قلعة الشوبك", description: "قلعة جبلية منفردة جنوب الأردن، تحيط بها مناظر واسعة وتضم نقوشًا وممرات وقصة من العصور الوسطى.", highlights: ["الموقع الدرامي فوق التل", "الأبراج والممرات التاريخية", "هدوء المكان وقلة الازدحام"], tip: "ادمجها مع الطريق إلى البتراء، وانتبه للدرج والحجارة غير المستوية." },
  ajloun: { name: "قلعة عجلون", description: "قلعة أيوبيّة استراتيجية بين تلال خضراء وغابات وقرى زيتون في شمال الأردن.", highlights: ["تفاصيل العمارة الدفاعية", "إطلالات الغابات والقرى", "مسارات عجلون والطبيعة القريبة"], tip: "ادمج القلعة مع مشي قصير في الغابة أو مع جرش ضمن يوم شمالي متوازن." },
  "umm-qais": { name: "أم قيس", description: "موقع أثري من الحجر البازلتي يطل على وادي الأردن وبحيرة طبريا ويجمع آثارًا رومانية وقرية عثمانية.", highlights: ["المسرح والشوارع البازلتية", "الإطلالة الواسعة من شمال الأردن", "القرية العثمانية والمتحف"], tip: "المنظر أجمل في يوم صافٍ، ويمكن دمجها مع طبقة فحل أو ريف إربد." },
  "iraq-al-amir": { name: "عراق الأمير", description: "وادي أخضر قريب من عمّان يضم قصر العبد والكهوف التاريخية وتجارب حرف تديرها سيدات المجتمع المحلي.", highlights: ["قصر العبد الحجري", "الكهوف والوادي الأخضر", "الحرف والمنتجات المجتمعية"], tip: "تواصل مسبقًا مع الجمعية المحلية إذا أردت ورشة أو وجبة مجتمعية." },
  "as-salt": { name: "السلط", description: "مدينة جبلية ببيوت حجرية صفراء وشوارع وسلالم تراثية تعكس التعايش والحياة الحضرية الأردنية.", highlights: ["مسار الوئام وبيوت التراث", "الأسواق والسلالم بين الأحياء", "الطعام والضيافة المحلية"], tip: "ارتدِ حذاءً مريحًا لأن المسار كثير الصعود والنزول." },
  "umm-al-jimal": { name: "أم الجمال", description: "مدينة أثرية واسعة مبنية من البازلت الأسود في الصحراء الشمالية، وتضم بيوتًا وكنائس وأنظمة مياه قديمة.", highlights: ["العمارة البازلتية السوداء", "المنازل والكنائس الواسعة", "قصة التكيف مع بيئة الصحراء"], tip: "الموقع مكشوف للشمس والرياح؛ احمل الماء والحماية المناسبة." },
  pella: { name: "طبقة فحل", description: "موقع أثري هادئ في وادي الأردن يكشف طبقات استيطان تمتد آلاف السنين وسط مشهد زراعي أخضر.", highlights: ["تعدد الطبقات التاريخية", "الهدوء وقلة الزوار", "إطلالات وادي الأردن"], tip: "المعلومات الميدانية قد تكون محدودة؛ وجود دليل يضيف معنى كبيرًا للزيارة." },
  "main-hot-springs": { name: "حمامات ماعين", description: "ينابيع وشلالات معدنية دافئة تنزل داخل وادٍ بركاني عميق قرب البحر الميت.", highlights: ["الشلالات الدافئة", "المشهد الصخري داخل الوادي", "الاسترخاء بعد أيام المشي"], tip: "تحقق من الوصول والخدمات ودرجة الحرارة الحالية قبل الزيارة، خصوصًا للأطفال." }
};

function destinationsInQuestion(question) {
  const q = question.toLowerCase();
  return destinations.filter(item => (DESTINATION_ALIASES[item.id] || [item.name.toLowerCase()]).some(alias => q.includes(alias)));
}

function detailedDestinationAnswer(item, arabic) {
  const content = destinationContent(item);
  if (arabic) {
    const guide = ARABIC_DESTINATION_GUIDE[item.id];
    const duration = ({ "1–2 days": "يوم إلى يومين", "1–3 days": "يوم إلى ثلاثة أيام", "Half day": "نصف يوم", "1–2 hours": "ساعة إلى ساعتين", "2–3 hours": "ساعتان إلى ثلاث ساعات" })[item.duration] || item.duration;
    return `ما هي ${guide.name}؟\n${guide.description}\n\nلماذا تستحق الزيارة؟\n• ${guide.highlights.join("\n• ")}\n\nكيف تخطط للزيارة؟\nالمدة المقترحة: ${duration}. ${guide.tip}\n\nيمكنك دمجها مع الأماكن القريبة الظاهرة في الخريطة ومخطط الرحلة. تأكد قبل الزيارة من المواعيد والأسعار وحالة الطقس أو المسارات لأنها معلومات متغيرة.`;
  }
  return `What is ${item.name}?\n${item.description} ${content.story}\n\nWhy it is worth visiting\n• ${content.love.join("\n• ")}\n\nHow to plan it\nSuggested time: ${item.duration}, in ${item.region}. ${content.tip}\n\nYou can combine it with nearby places shown on the map and in the Trip Planner. Verify current hours, prices, weather, and trail or access conditions before visiting.`;
}

function localConciergeAnswer(question) {
  const q = question.toLowerCase();
  const arabic = /[\u0600-\u06ff]/.test(question);
  let matches = destinationsInQuestion(question);
  const followUp = /there|near|nearby|around it|what else|itinerary with it|هناك|قريب|قريبة|حولها|منها|معها|فيها/.test(q);
  if (!matches.length && followUp) {
    const recentContext = state.aiMessages.slice(0, -1).slice(-5).map(entry => entry.text).join(" ");
    matches = destinationsInQuestion(recentContext).slice(-1);
  }
  if (matches.length === 1 && /near|nearby|around|قريب|قريبة|حولها|معها/.test(q)) {
    const base = matches[0];
    const nearby = destinations.filter(item => item.id !== base.id).map(item => ({ ...item, proximity: Math.hypot(item.lat - base.lat, item.lng - base.lng) })).sort((a, b) => a.proximity - b.proximity).slice(0, 3);
    return arabic ? `أماكن قريبة من ${ARABIC_DESTINATION_GUIDE[base.id].name}:\n• ${nearby.map(item => `${ARABIC_DESTINATION_GUIDE[item.id].name}: ${ARABIC_DESTINATION_GUIDE[item.id].description}`).join("\n• ")}\n\nأقدر أرتبهم لك في يوم واحد أو أكثر إذا أخبرتني بوسيلة التنقل والوقت المتاح.` : `Places near ${base.name}:\n• ${nearby.map(item => `${item.name}: ${item.description}`).join("\n• ")}\n\nTell me your available time and transport, and I can arrange them into a practical route.`;
  }
  if (matches.length === 1) return detailedDestinationAnswer(matches[0], arabic);
  // طلب مكان هادئ قد يذكر أماكن مستبعدة مثل "غير البتراء ووادي رم"؛
  // أعطِ اقتراحات هادئة بدل اعتبار الأسماء المذكورة طلبًا للمقارنة.
  if (/hidden|quiet|unknown|local|gem|مخفي|هادئ|غير معروف|محلي/.test(q)) return arabic ? "إذا بدك أماكن أهدأ وأقل شهرة، جرّب قرية ومسارات ضانا، قلعة الشوبك، عراق الأمير، أم الجمال، طبقة فحل أو أزرق. ضانا مناسبة للطبيعة والمشي، أم الجمال للتاريخ البازلتي، وعراق الأمير للحِرف والوادي الأخضر. احكيلي عدد الأيام ونوع التجربة اللي بتحبها عشان أحدد لك أفضل خيار." : "For a quieter Jordan story, consider Dana’s village trails, Shobak Castle, Iraq Al-Amir, Umm al-Jimal, Pella, or Azraq. Dana suits hiking and ecology, Umm al-Jimal offers basalt history, and Iraq Al-Amir blends craft and a green valley. Tell me your days and interests and I’ll narrow it down.";
  if (matches.length > 1 || /compare|versus| vs |قارن|الفرق|ولا/.test(q)) {
    const choices = matches.length > 1 ? matches.slice(0, 3) : [findDestination("petra"), findDestination("wadi-rum")];
    const comparison = choices.map(item => `${item.name}: ${item.category}, ${item.duration}. ${item.description}`).join("\n\n");
    return arabic ? `مقارنة سريعة حسب التجربة والوقت:\n\n${comparison}\n\nاختيارك الأفضل يعتمد على عدد الأيام واهتماماتك. احكيلي كم يوم معك وشو بتحب، وببني لك الاختيار الأنسب.` : `A quick comparison by experience and time:\n\n${comparison}\n\nThe best choice depends on your available days and interests. Tell me both, and I’ll make a more precise recommendation.`;
  }
  if (/family|children|kids|عائلة|اطفال|أطفال/.test(q)) return arabic ? "لرحلة عائلية متوازنة، اجمع عمّان وجرش ومادبا والبحر الميت والعقبة. خفف عدد المحطات اليومية، واترك وقتًا للراحة، واختر أنشطة تناسب أعمار الأطفال. شروط السباحة والمسارات والطقس تتغير، لذلك راجع الجهة أو المشغّل قبل الزيارة." : "A balanced family route can combine Amman, Jerash, Madaba, the Dead Sea, and Aqaba. Keep daily stops light, leave rest time, and match activities to the children’s ages. Swimming, trail, and weather requirements change, so confirm them with the venue or operator.";
  if (/budget|cheap|cost|price|ميزانية|رخيص|سعر|تكلفة/.test(q)) return arabic ? "لتقليل التكلفة، اجمع الأماكن القريبة في يوم واحد: عمّان + عراق الأمير + السلط، أو مادبا + جبل نيبو + البحر الميت. استخدم مخطط الرحلة لتقليل الرجوع على نفس الطريق. الأسعار والمواصلات معلومات متغيرة، لذلك لازم تتأكد منها قبل الحجز." : "For a lighter budget, group nearby places into one day: Amman + Iraq Al-Amir + As-Salt, or Madaba + Mount Nebo + the Dead Sea. Use the Trip Planner to reduce backtracking. Prices and transport costs change, so verify them before booking.";
  if (/water|swim|sea|div|سباحة|بحر|غوص|ماء/.test(q)) return arabic ? "العقبة هي الأفضل للشعاب المرجانية والغوص والبحر الأحمر، والبحر الميت للطفو والاسترخاء، ووادي الموجب لمغامرة مائية موسمية داخل الوادي. لا تلمس المرجان، وتأكد من حالة البحر وفتح المسارات وشروط العمر قبل الانطلاق." : "Choose Aqaba for reefs and Red Sea diving, the Dead Sea for floating and wellness, and Wadi Mujib for a seasonal water-canyon adventure. Never touch coral, and confirm sea conditions, trail openings, and age requirements before you go.";
  if (/food|eat|restaurant|اكل|أكل|مطعم|منسف|كنافة/.test(q)) return arabic ? "ابدأ من وسط عمّان لتجربة الفلافل والحمص والمناقيش والقهوة والكنافة، وجرّب المنسف كطبق أردني أساسي. السلط وقرى ضانا مناسبة لتجارب أكل محلية أهدأ. إذا أعطيتني مسار رحلتك، أرتّب لك محطات الطعام بدون ما تزيد عليك الطريق." : "Start in downtown Amman for falafel, hummus, manakish, coffee, and knafeh, and try mansaf as Jordan’s signature communal dish. As-Salt and villages around Dana offer quieter local-food experiences. Share your route and I can place food stops without adding unnecessary driving.";
  if (/history|story|culture|tradition|تاريخ|قصة|ثقافة|عادات/.test(q)) return arabic ? "الأردن يجمع طبقات نبطية ورومانية وبيزنطية وإسلامية وحديثة. البتراء تروي قصة الأنباط والتجارة والماء، جرش تكشف تخطيط المدينة الرومانية، وقلاع الكرك والشوبك وعجلون تشرح صراعات وطرق العصور الوسطى. أما عمّان والسلط ومادبا فتقدم ثقافة حيّة، أسواقًا، طعامًا وفسيفساء. اسألني عن أي مكان منها لأعطيك قصته بالتفصيل." : "Jordan layers Nabataean, Roman, Byzantine, Islamic, and modern stories. Petra reveals Nabataean trade and water engineering; Jerash shows Roman city life; Karak, Shobak, and Ajloun explain medieval routes and power. Amman, As-Salt, and Madaba add living culture, markets, food, and mosaics. Name any place and I’ll tell its story in detail.";
  if (/transport|drive|car|bus|move|مواصلات|سيارة|باص|تنقل/.test(q)) return arabic ? "للمرونة، السيارة أو السائق الخاص أسهل خصوصًا بين المواقع الطبيعية والجنوبية. داخل عمّان استخدم سيارات الأجرة أو التطبيقات المتاحة، وبين بعض المدن توجد حافلات لكن الجداول قد لا تناسب كل مسار سياحي. خطط رحلتك من الشمال للجنوب أو بالعكس لتقليل الرجوع، وتأكد من المواعيد الحالية قبل السفر." : "A car or private driver offers the most flexibility, especially for natural sites and southern Jordan. In Amman, taxis and available ride apps are practical; buses connect some cities but may not fit every sightseeing route. Plan north-to-south or the reverse to reduce backtracking, and verify current schedules before travel.";
  if (/weather|season|when|طقس|جو|موسم|متى/.test(q)) return arabic ? "الربيع والخريف غالبًا مريحان للرحلات المتنوعة، بينما يختلف الجو كثيرًا بين مرتفعات عمّان وجرش، صحراء وادي رم، والعقبة والبحر الميت. الشتاء قد يكون باردًا وممطرًا في المرتفعات، والصيف شديد الحرارة في بعض المناطق. افحص توقعات الطقس الرسمية قبل كل يوم لأن الظروف تتغير." : "Spring and autumn are often comfortable for mixed itineraries, but conditions differ greatly between Amman’s highlands, Wadi Rum’s desert, and Aqaba or the Dead Sea. Highlands can be cold and wet in winter, while some areas are very hot in summer. Check an official forecast for each stop before travel.";
  if (/safe|safety|visa|entry|permit|امن|أمان|فيزا|تأشيرة|دخول/.test(q)) return arabic ? "قواعد الدخول والتأشيرات والتنبيهات الأمنية قد تتغير حسب الجنسية والوقت. استخدم موقع وزارة الداخلية أو هيئة تنشيط السياحة الأردنية، وتحقق من إرشادات سفارة بلدك قبل السفر. أقدر أساعدك في تخطيط الأماكن والمسار، لكن ما رح أخمّن معلومة قانونية أو أمنية متغيرة." : "Entry rules, visas, permits, and safety guidance can change by nationality and date. Check Jordan’s official authorities and your government’s travel advice before departure. I can help plan destinations and routes, but I won’t guess changing legal or safety information.";
  if (/day|days|route|plan|itinerary|يوم|ايام|أيام|مسار|خطة|برنامج/.test(q)) return arabic ? "أقدر أبني لك مسار كامل، بس أعطيني: عدد الأيام، نقطة الوصول، اهتماماتك، سرعة الرحلة، وهل معك سيارة. مثال: «عندي 5 أيام، بوصل عمّان، وبحب التاريخ والطبيعة». بعدها أرتب المحطات جغرافيًا وأضيف جوهرة مخفية بدون رجوع غير ضروري." : "I can build the full route. Tell me your number of days, arrival point, interests, preferred pace, and whether you have a car. For example: “I have 5 days, arrive in Amman, and love history and nature.” I’ll order the stops geographically and include a hidden gem without unnecessary backtracking.";
  return arabic ? "أنا دليلك السياحي للأردن. أقدر أجاوبك بالتفصيل عن قصص وتاريخ الأماكن، الأنشطة، الطعام والثقافة، المقارنات، المواصلات، وأبني مسار حسب أيامك واهتماماتك. اكتب سؤالك باسم المكان أو نوع التجربة—مثلاً: «شو قصة جرش؟» أو «وين أروح إذا بحب الطبيعة؟». للأسعار والطقس والمواعيد والفيزا رح أوضح لك دائمًا إنها تحتاج تحقق حديث." : "I’m your Jordan travel concierge. I can explain destination stories and history, activities, food and culture, compare places, discuss transport, or build a route around your days and interests. Ask with a place or travel goal—for example, “Tell me the story of Jerash” or “Where should I go for nature?” For prices, weather, hours, visas, and access, I’ll clearly flag what needs a current official check.";
}

async function askAiConcierge(message) {
  state.aiMessages.push({ role: "user", text: message });
  state.aiBusy = true;
  render({ preserveScroll: true, chatToBottom: true });
  try {
    const answer = await runGeminiChat(message);
    state.aiMessages.push({ role: "assistant", text: answer, source: "gemini" });
  } catch (error) {
    state.aiOnline = false;
    state.aiError = error?.message || "Gemini is temporarily unavailable";
    console.info("Gemini chat unavailable:", state.aiError);
    state.aiMessages.push({ role: "assistant", text: localConciergeAnswer(message), source: "smart" });
  }
  state.aiBusy = false;
  render({ preserveScroll: true, chatToBottom: true, focusChat: true });
}

function aiPlanResult() {
  const plan = state.aiPlan;
  if (!plan) return "";
  const hiddenGem = findDestination(plan.hiddenGemId || plan.stopIds.find(id => findDestination(id).hidden));
  return `<section class="ai-result" id="ai-result"><div class="ai-result-head"><div><span class="eyebrow">${plan.source === "gemini" ? "Generated with Gemini" : "Smart route ready"}</span><h2>${escapeHtml(plan.title)}</h2><p>${escapeHtml(plan.summary)}</p></div><button class="btn primary" data-action="use-ai-plan">Use this plan →</button></div><div class="travel-dna"><strong>Your Travel DNA</strong>${plan.travelDna.map(tag => `<span>${escapeHtml(tag)}</span>`).join("")}</div><div class="ai-route">${plan.stopIds.map((id, index) => { const item = findDestination(id); return `<a href="#/destination/${item.id}" class="ai-route-stop"><span>${index + 1}</span><img src="${item.image}" alt="${item.name}"><div><strong>${item.name}</strong><small>${item.region} · ${item.category}</small></div></a>`; }).join("")}</div><div class="ai-insights"><article><span class="eyebrow">Your hidden-gem match</span><h3>${hiddenGem.name}</h3><p>${hiddenGem.subtitle}</p><a class="text-link" href="#/destination/${hiddenGem.id}">Why it fits you →</a></article><article><span class="eyebrow">Smart route notes</span><ul>${plan.tips.map(tip => `<li>${escapeHtml(tip)}</li>`).join("")}</ul></article></div></section>`;
}

function aiGuidePage() {
  const messages = state.aiMessages.map(message => `<div class="ai-message ${message.role}"><span>${message.role === "assistant" ? "✦" : "You"}</span><p>${escapeHtml(message.text).replace(/\n/g, "<br>")}</p></div>`).join("");
  const aiStatus = state.aiOnline ? "AI live · conversation memory on" : state.aiError ? "Smart backup active · AI will retry automatically" : "Connecting to AI…";
  return `${nav("ai-guide")}<main id="main" class="ai-page"><section class="ai-hero"><div class="container"><div><span class="ai-kicker">BEYOND JORDAN INTELLIGENCE</span><h1>Your trip, shaped around <em>you.</em></h1><p>Build a thoughtful Jordan route in seconds, discover the hidden place that matches your travel style, or ask a real travel question.</p><div class="ai-trust"><span>✦ Route-aware</span><span>⌖ Jordan-focused</span><span>◌ Easy to adjust</span></div></div><div class="ai-hero-orbit"><span>AI</span><small>Jordan<br>Concierge</small></div></div></section><section class="section ai-workspace-section"><div class="container ai-workspace"><form class="ai-planner-card" data-form="ai-plan"><div class="ai-card-title"><span class="ai-orb">✦</span><div><span class="eyebrow">AI Trip Maker</span><h2>Tell us your travel style</h2></div></div><div class="form-grid"><div class="field"><label for="ai-days">How many days?</label><select id="ai-days" name="days">${[3,5,7,10,14].map(day => `<option value="${day}" ${day === 7 ? "selected" : ""}>${day} days</option>`).join("")}</select></div><div class="field"><label for="ai-start">Start near</label><select id="ai-start" name="start"><option value="amman">Amman / North</option><option value="aqaba">Aqaba / South</option></select></div><div class="field"><label for="ai-pace">Travel pace</label><select id="ai-pace" name="pace"><option value="relaxed">Relaxed</option><option value="balanced" selected>Balanced</option><option value="adventurous">Adventurous</option></select></div><div class="field"><label for="ai-budget">Travel style</label><select id="ai-budget" name="budget"><option value="budget">Budget-aware</option><option value="comfort" selected>Comfort</option><option value="premium">Premium</option></select></div></div><fieldset class="ai-interests"><legend>What pulls you to Jordan?</legend>${AI_INTERESTS.map((interest, index) => `<label><input type="checkbox" name="interests" value="${interest}" ${index < 2 ? "checked" : ""}><span>${interest}</span></label>`).join("")}</fieldset><button class="btn ai-generate" type="submit" ${state.aiBusy ? "disabled" : ""}>${state.aiBusy ? "<span class='mini-spinner'></span> Shaping your journey…" : "✦ Build my AI journey"}</button><p class="ai-fine-print">No invented prices or live access claims. Always verify time-sensitive details.</p></form><section class="ai-chat-card"><div class="ai-chat-head"><div><span class="status-dot ${state.aiOnline ? "online" : state.aiError ? "limited" : ""}"></span><div><strong>Jordan AI Concierge</strong><small>${aiStatus}</small></div></div><span class="ai-badge">BETA</span></div><div class="ai-quick-prompts">${["Tell me Petra’s story", "Find my hidden gem", "Petra or Wadi Rum?", "Plan a family route"].map(prompt => `<button type="button" data-ai-prompt="${prompt}">${prompt}</button>`).join("")}</div><div class="ai-chat-log" id="ai-chat-log">${messages}${state.aiBusy ? `<div class="ai-message assistant"><span>✦</span><p><i class="typing-dot"></i><i class="typing-dot"></i><i class="typing-dot"></i></p></div>` : ""}</div><form class="ai-chat-input" data-form="ai-chat"><input name="message" maxlength="600" required placeholder="Chat naturally about anything in your Jordan trip…" aria-label="Ask the Jordan AI concierge"><button type="submit" aria-label="Send" ${state.aiBusy ? "disabled" : ""}>↑</button></form></section></div>${aiPlanResult()}</section></main>${footer()}`;
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

function render(options = {}) {
  const previousScrollY = window.scrollY;
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
    "ai-guide": aiGuidePage,
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
  window.scrollTo({ top: options.preserveScroll ? previousScrollY : 0, behavior: "instant" });
  if (options.chatToBottom) requestAnimationFrame(() => {
    const log = document.querySelector("#ai-chat-log");
    if (log) log.scrollTop = log.scrollHeight;
    if (options.focusChat) document.querySelector("[data-form='ai-chat'] input")?.focus({ preventScroll: true });
  });
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
  render({ preserveScroll: true });
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

function openGalleryImage(src, label) {
  modalRoot.innerHTML = `<div class="modal-backdrop gallery-backdrop" data-action="close-modal"><figure class="gallery-modal" data-modal><button class="gallery-close" data-action="close-modal" aria-label="Close image">×</button><img src="${escapeHtml(src)}" alt="${escapeHtml(label)}"><figcaption>${escapeHtml(label)}</figcaption></figure></div>`;
  document.body.classList.add("modal-open");
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
  const galleryImage = event.target.closest("[data-gallery-image]");
  if (galleryImage) {
    openGalleryImage(galleryImage.dataset.galleryImage, galleryImage.dataset.galleryLabel);
    return;
  }
  const aiPrompt = event.target.closest("[data-ai-prompt]");
  if (aiPrompt) {
    await askAiConcierge(aiPrompt.dataset.aiPrompt);
    return;
  }
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
  if (action === "use-ai-plan" && state.aiPlan) {
    const preferences = state.aiPreferences || { days: 7, interests: ["History", "Culture"] };
    state.trip = {
      ...state.trip,
      name: state.aiPlan.title,
      days: preferences.days,
      interests: preferences.interests.length ? preferences.interests : ["History", "Culture"],
      stops: [...state.aiPlan.stopIds]
    };
    await syncCloudData();
    location.hash = "#/itinerary";
    toast("Your AI route is now in the Trip Planner.");
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
  if (form.matches("[data-form='ai-plan']")) {
    event.preventDefault();
    createAiPlan(form);
  }
  if (form.matches("[data-form='ai-chat']")) {
    event.preventDefault();
    const message = String(new FormData(form).get("message") || "").trim();
    if (message) askAiConcierge(message);
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
