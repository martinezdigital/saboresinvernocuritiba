const demoData = {
  source: "demo",
  updatedAt: "2026-06-27T15:35:00-03:00",
  totals: {
    users: 68,
    pageviews: 492,
    restaurantViews: 127,
    voteClicks: 0
  },
  centroEuropeu: {
    sectionViews: 23,
    clicks: 4
  },
  realtime: {
    activeUsers: 4,
    activeRestaurants: [
      { name: "Bar do Alemão", dish: "Inverno na Floresta Negra", visitors: 2, when: "agora" },
      { name: "Dina Pizza", dish: "Pizza Costela Serrana", visitors: 1, when: "há 1 min" },
      { name: "Happy Burger", dish: "Mignon de Inverno", visitors: 1, when: "há 3 min" }
    ],
    actions: [
      { label: "Busca de rota", restaurant: "Bar do Alemão", when: "há 1 min" },
      { label: "Clique no Instagram", restaurant: "Happy Burger", when: "há 2 min" },
      { label: "Menu aberto", restaurant: "Dina Pizza", when: "há 3 min" }
    ]
  },
  timeline: [
    { label: "21/06", value: 18 },
    { label: "22/06", value: 31 },
    { label: "23/06", value: 42 },
    { label: "24/06", value: 58 },
    { label: "25/06", value: 82 },
    { label: "26/06", value: 119 },
    { label: "27/06", value: 142 }
  ],
  cities: [
    { city: "Curitiba", users: 42, lat: -25.4284, lng: -49.2733 },
    { city: "São Paulo", users: 8, lat: -23.5505, lng: -46.6333 },
    { city: "São José dos Pinhais", users: 5, lat: -25.5313, lng: -49.2031 },
    { city: "Araucária", users: 3, lat: -25.5931, lng: -49.4103 },
    { city: "Pinhais", users: 3, lat: -25.4449, lng: -49.1927 },
    { city: "Colombo", users: 2, lat: -25.2925, lng: -49.2242 },
    { city: "Campo Largo", users: 2, lat: -25.4595, lng: -49.5276 },
    { city: "Florianópolis", users: 2, lat: -27.5949, lng: -48.5482 },
    { city: "Porto Alegre", users: 1, lat: -30.0346, lng: -51.2177 }
  ],
  restaurants: [
    { name: "Alchemia Bar e Restaurante", dish: "Do Solo ao Colo", views: 5, instagram: 1, maps: 1 },
    { name: "Bar do Alemão", dish: "Inverno na Floresta Negra", views: 12, instagram: 4, maps: 5 },
    { name: "Cantina do Délio", dish: "Conchiglione di Gorgonzola e Cubos de Mignon", views: 9, instagram: 3, maps: 4 },
    { name: "Cantina e Pizzaria Baviera", dish: "Sopa de Cebola", views: 10, instagram: 2, maps: 3 },
    { name: "Carlo Ristorante", dish: "Risoto de Linguiça Blumenau com Pinhão", views: 6, instagram: 2, maps: 2 },
    { name: "Chef Express", dish: "Super Filé Mignon à Parmegiana", views: 5, instagram: 1, maps: 2 },
    { name: "Cutelaria Carne com Cerveja", dish: "Tomahawk com Legumes Braseados", views: 4, instagram: 1, maps: 2 },
    { name: "Dina Pizza", dish: "Pizza Costela Serrana", views: 5, instagram: 2, maps: 1 },
    { name: "Dom Carmino Pizzaria", dish: "Pizza, Vinho e Petit Gateau", views: 8, instagram: 3, maps: 2 },
    { name: "Doppo Cucina", dish: "Lasagna de Vitelo", views: 7, instagram: 1, maps: 2 },
    { name: "Galeteria Caxias", dish: "Rodízio Italiano", views: 3, instagram: 1, maps: 1 },
    { name: "Happy Burger", dish: "Mignon de Inverno", views: 6, instagram: 3, maps: 2 },
    { name: "Hard Rock Cafe Curitiba", dish: "Grilled Salmon + Cheesecake", views: 6, instagram: 2, maps: 2 },
    { name: "Imaginum Sushi", dish: "Yakisoba + Sobremesa", views: 4, instagram: 1, maps: 1 },
    { name: "Limoeiro Casa de Comidas", dish: "Ossobuco com Risotto alla Milanese", views: 4, instagram: 1, maps: 1 },
    { name: "Maias Sushi", dish: "Combinado Maias 50 Peças", views: 4, instagram: 1, maps: 1 },
    { name: "Marie Vin e Bistrot", dish: "Médaillon de Mignon du Chef au Café de Paris", views: 5, instagram: 2, maps: 1 },
    { name: "Opera Arte", dish: "Capeletti Pilagalli Sabor Paraná", views: 3, instagram: 1, maps: 1 },
    { name: "Peruano Gastronomia e Cultura", dish: "Chupe de Camarão", views: 4, instagram: 1, maps: 1 },
    { name: "Quintal do Monge", dish: "Mignon à Parmegiana com Massa", views: 5, instagram: 1, maps: 2 },
    { name: "Quitutto", dish: "Cupim pra Banguela aos Queijos", views: 5, instagram: 1, maps: 2 },
    { name: "Tuk Tuk", dish: "Golden Seafood", views: 3, instagram: 1, maps: 1 },
    { name: "Villa Bistrô", dish: "Parmegiana de Mignon e Torta de Pistache", views: 4, instagram: 1, maps: 1 }
  ],
  events: [
    { label: "Menus dos pratos consultados", value: 127 },
    { label: "Cliques para Instagram", value: 37 },
    { label: "Buscas de rota", value: 41 },
    { label: "Cliques no Centro Europeu", value: 4 },
    { label: "Cliques para votar", value: 0 }
  ]
};

const formatter = new Intl.NumberFormat("pt-BR");
const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  dateStyle: "short",
  timeStyle: "short"
});

let cityMap;
let cityLayer;
let dashboardData;
let refreshTimer;
let timelinePeriod = "all";
let selectedRestaurantName = "";

const MAIN_PERIOD = "all";

const cityCoordinateFallback = {
  curitiba: [-25.4284, -49.2733],
  "sao paulo": [-23.5505, -46.6333],
  "são paulo": [-23.5505, -46.6333],
  "sao jose dos pinhais": [-25.5313, -49.2031],
  "são josé dos pinhais": [-25.5313, -49.2031],
  colombo: [-25.2925, -49.2242],
  "porto alegre": [-30.0346, -51.2177],
  "rio de janeiro": [-22.9068, -43.1729],
  guarapuava: [-25.3902, -51.4623],
  guarulhos: [-23.4545, -46.5333],
  itabira: [-19.6239, -43.2312],
  itabuna: [-14.7856, -39.2804],
  lages: [-27.8150, -50.3264],
  paranagua: [-25.5205, -48.5095],
  "paranaguá": [-25.5205, -48.5095],
  "ponta grossa": [-25.0994, -50.1583],
  "rio negro": [-26.1059, -49.7973],
  "vila velha": [-20.3478, -40.2949]
};

const cityDisplayFallback = {
  "sao paulo": "São Paulo",
  "sao jose dos pinhais": "São José dos Pinhais",
  paranagua: "Paranaguá"
};

function cityKey(city) {
  return String(city || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function displayCity(city) {
  return cityDisplayFallback[cityKey(city)] || city;
}

function cityCoordinates(city) {
  return cityCoordinateFallback[cityKey(city)] || null;
}

function supabaseConfig() {
  const config = window.SABORES_SUPABASE || {};
  const url = String(config.url || "").replace(/\/$/, "");
  const anonKey = String(config.anonKey || "");
  if (!url || !anonKey) return null;
  return { url, anonKey };
}

function googleAnalyticsConfig() {
  const config = window.SABORES_GA_PROXY || {};
  const url = String(config.url || "");
  if (!url) return null;
  return { url };
}

function loadJsonp(url, params = {}) {
  return new Promise((resolve, reject) => {
    const callbackName = `saboresGaCallback_${Date.now()}_${Math.random().toString(16).slice(2)}`;
    const script = document.createElement("script");
    const finalUrl = new URL(url);

    Object.entries(params).forEach(([key, value]) => finalUrl.searchParams.set(key, value));
    finalUrl.searchParams.set("callback", callbackName);

    const cleanup = () => {
      delete window[callbackName];
      script.remove();
    };

    window[callbackName] = (data) => {
      cleanup();
      resolve(data);
    };

    script.onerror = () => {
      cleanup();
      reject(new Error("Não foi possível carregar os dados do Google Analytics"));
    };

    script.src = finalUrl.toString();
    document.head.appendChild(script);
  });
}

async function loadGoogleAnalyticsData(period = "7d") {
  const config = googleAnalyticsConfig();
  if (!config) return null;
  return await loadJsonp(config.url, { period_key: period, cache: String(Date.now()) });
}

async function loadLiveData(period = "7d") {
  const config = supabaseConfig();
  if (!config) return null;

  const response = await fetch(`${config.url}/rest/v1/rpc/get_dashboard_data`, {
    method: "POST",
    headers: {
      apikey: config.anonKey,
      Authorization: `Bearer ${config.anonKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ period_key: period }),
    cache: "no-store"
  });

  if (!response.ok) throw new Error("Fonte de dados indisponível");
  return await response.json();
}

async function loadData(period = "7d") {
  try {
    const gaData = await loadGoogleAnalyticsData(period);
    if (gaData) return gaData;
  } catch (error) {
    console.warn("Google Analytics indisponível:", error);
  }

  try {
    const liveData = await loadLiveData(period);
    if (liveData) return liveData;
  } catch (error) {
    console.warn("Usando prévia do painel:", error);
  }

  try {
    const response = await fetch("dashboard-data.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Sem arquivo de dados");
    return await response.json();
  } catch {
    return demoData;
  }
}

function number(value) {
  return formatter.format(Number(value || 0));
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

function renderKpis(data) {
  setText("kpi-users", number(data.totals.users));
  setText("kpi-pageviews", number(data.totals.pageviews));
  setText("kpi-restaurant-views", number(data.totals.restaurantViews));
  setText("kpi-votes", number(data.totals.voteClicks));
  setText("centro-views", number(data.centroEuropeu.sectionViews));
  setText("centro-clicks", number(data.centroEuropeu.clicks));
  setText(
    "centro-copy",
    `${number(data.centroEuropeu.sectionViews)} pessoas já visualizaram a presença do Centro Europeu dentro do festival. Essa exposição aproxima a marca de formação profissional, excelência gastronômica e desenvolvimento do turismo em Curitiba.`
  );
}

function renderRealtime(data) {
  const realtime = data.realtime || {};
  const restaurants = realtime.activeRestaurants || [];
  const actions = realtime.actions || [];

  setText("realtime-users", number(realtime.activeUsers || 0));

  document.getElementById("live-restaurants").innerHTML = restaurants.length
    ? restaurants.map((item) => `
      <li>
        <span>
          <strong>${item.name}</strong>
          <small>${item.dish || "Menu participante"} · ${item.when || "agora"}</small>
        </span>
        <span class="live-badge">${number(item.visitors || 1)}</span>
      </li>
    `).join("")
    : `<li><span><strong>Nenhum menu ativo agora</strong><small>Aguardando novos acessos.</small></span></li>`;

  document.getElementById("live-actions").innerHTML = actions.length
    ? actions.map((item) => `
      <li>
        <span>
          <strong>${item.label}</strong>
          <small>${item.restaurant || "Site do festival"}</small>
        </span>
        <span class="live-badge">${item.when || "agora"}</span>
      </li>
    `).join("")
    : `<li><span><strong>Sem ações recentes</strong><small>Quando houver cliques, eles aparecem aqui.</small></span></li>`;
}

function renderTimeline(data) {
  const chart = document.getElementById("timeline-chart");
  const items = data.timeline || [];
  const max = Math.max(...items.map((item) => item.value), 1);
  chart.style.setProperty("--bars", items.length);
  chart.innerHTML = items.map((item) => {
    const height = Math.max(12, (item.value / max) * 92);
    return `
      <div class="timeline-bar" style="height:${height}%">
        <span>${number(item.value)}</span>
        <small>${item.label}</small>
      </div>`;
  }).join("");
}

function setTimelineButtons(period) {
  document.querySelectorAll("#timeline-controls [data-period]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.period === period);
  });
}

function renderCities(data) {
  const cities = [...(data.cities || [])].sort((a, b) => b.users - a.users);
  const max = Math.max(...cities.map((city) => city.users), 1);
  setText("city-count", `${cities.length} cidades`);

  document.getElementById("city-list").innerHTML = cities.slice(0, 6).map((city) => `
    <li>
      <strong>${displayCity(city.city)}</strong>
      <span>${number(city.users)} ${city.users === 1 ? "pessoa" : "pessoas"}</span>
    </li>
  `).join("");

  if (!window.L || !cities.length) {
    const fallback = document.querySelector(".map-fallback");
    if (fallback) {
      fallback.innerHTML = "<strong>Mapa indisponível no momento</strong><span>A lista de cidades permanece disponível abaixo.</span>";
    }
    return;
  }

  const mapElement = document.getElementById("city-map");

  if (!cityMap) {
    mapElement.querySelector(".map-fallback")?.remove();
    cityMap = L.map(mapElement, {
      scrollWheelZoom: false,
      zoomControl: true,
      attributionControl: true
    }).setView([-25.55, -49.35], 6);

    L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      maxZoom: 19
    }).addTo(cityMap);

    cityLayer = L.layerGroup().addTo(cityMap);
  }

  cityLayer.clearLayers();

  const bounds = [];
  cities.forEach((city) => {
    const fallback = cityCoordinates(city.city);
    const lat = typeof city.lat === "number" ? city.lat : fallback?.[0];
    const lng = typeof city.lng === "number" ? city.lng : fallback?.[1];
    if (typeof lat !== "number" || typeof lng !== "number") return;
    const size = 26 + (city.users / max) * 32;
    const icon = L.divIcon({
      className: "",
      html: `<div class="city-marker" style="--size:${size}px">${number(city.users)}</div>`,
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2]
    });

    L.marker([lat, lng], { icon })
      .bindPopup(`<strong>${displayCity(city.city)}</strong><br>${number(city.users)} ${city.users === 1 ? "pessoa" : "pessoas"}`)
      .addTo(cityLayer);

    bounds.push([lat, lng]);
  });

  if (bounds.length > 1) {
    cityMap.fitBounds(bounds, { padding: [24, 24], maxZoom: 7 });
  }

  setTimeout(() => cityMap.invalidateSize(), 120);
}

function restaurantScore(item) {
  return (item.views || 0) + (item.instagram || 0) * 2 + (item.maps || 0) * 1.5;
}

function restaurantLabel(item) {
  return `${item.name} — ${item.dish || "Menu participante"}`;
}

function restaurantsAlphabetical(data) {
  return [...(data.restaurants || [])].sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
}

function topRestaurants(data) {
  return [...(data.restaurants || [])].sort((a, b) => restaurantScore(b) - restaurantScore(a));
}

function restaurantRank(item) {
  const ranked = topRestaurants(dashboardData || {});
  const index = ranked.findIndex((restaurant) => restaurant.name === item.name);
  return index >= 0 ? index + 1 : ranked.length;
}

function renderRestaurantSpotlight(item) {
  const card = document.getElementById("restaurant-spotlight");

  if (!item) {
    card.innerHTML = `<span class="empty-state">Selecione um restaurante para destacar os dados.</span>`;
    return;
  }

  const maxScore = Math.max(...(dashboardData?.restaurants || []).map(restaurantScore), 1);
  const score = Math.round((restaurantScore(item) / maxScore) * 100);
  const rank = restaurantRank(item);
  const rankText = rank === 1 ? "Destaque atual de interesse do público" : `${rank}º no ranking de interesse do público`;

  card.innerHTML = `
    <p class="spotlight-tag">${rankText}</p>
    <h3>${item.name}</h3>
    <p class="dish">${item.dish || "Menu participante"}</p>
    <div class="spotlight-kpis">
      <div>
        <span>Menu consultado</span>
        <strong>${number(item.views)}</strong>
      </div>
      <div>
        <span>Cliques Instagram</span>
        <strong>${number(item.instagram)}</strong>
      </div>
      <div>
        <span>Buscas no mapa</span>
        <strong>${number(item.maps)}</strong>
      </div>
      <div>
        <span>Interesse</span>
        <strong>${number(score)}</strong>
      </div>
    </div>`;
}

function selectRestaurant(name) {
  selectedRestaurantName = name || "";
  const select = document.getElementById("restaurant-select");
  if (select && select.value !== selectedRestaurantName) select.value = selectedRestaurantName;

  const restaurant = (dashboardData?.restaurants || []).find((item) => item.name === selectedRestaurantName);
  renderRestaurantSpotlight(restaurant);

  document.querySelectorAll("#restaurant-table tbody tr").forEach((row) => {
    row.classList.toggle("is-selected", row.dataset.restaurant === selectedRestaurantName);
  });
}

function renderRestaurantSelector(data) {
  const select = document.getElementById("restaurant-select");
  if (!select) return;

  const restaurants = restaurantsAlphabetical(data);
  select.innerHTML = `
    <option value="">Selecione um participante</option>
    ${restaurants.map((item) => `<option value="${item.name}">${restaurantLabel(item)}</option>`).join("")}
  `;

  if (selectedRestaurantName && restaurants.some((item) => item.name === selectedRestaurantName)) {
    select.value = selectedRestaurantName;
  } else {
    const first = topRestaurants(data)[0];
    selectedRestaurantName = first ? first.name : "";
    select.value = selectedRestaurantName;
  }

  selectRestaurant(selectedRestaurantName);
}

function renderRestaurants(data) {
  const table = document.getElementById("restaurant-table");
  const restaurants = topRestaurants(data);
  const maxScore = Math.max(...restaurants.map(restaurantScore), 1);

  table.innerHTML = restaurants.map((item, index) => {
    const score = Math.round((restaurantScore(item) / maxScore) * 100);
    return `
      <tr data-restaurant="${item.name}" tabindex="0" aria-label="Ver detalhes de ${item.name}">
        <td data-label="Posição"><span class="rank-badge ${index === 0 ? "is-leader" : ""}">${index + 1}º</span></td>
        <td data-label="Restaurante">${item.name}</td>
        <td data-label="Menu consultado"><span class="restaurant-name">${number(item.views)}<small>${item.dish || "Menu participante"}</small></span></td>
        <td data-label="Instagram">${number(item.instagram)}</td>
        <td data-label="Mapa">${number(item.maps)}</td>
        <td data-label="Interesse"><span class="interest-pill">${score}</span></td>
      </tr>`;
  }).join("");

  table.querySelectorAll("tr[data-restaurant]").forEach((row) => {
    row.addEventListener("click", () => selectRestaurant(row.dataset.restaurant));
    row.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectRestaurant(row.dataset.restaurant);
      }
    });
  });

  selectRestaurant(selectedRestaurantName);
}

function renderEvents(data) {
  const events = data.events || [];
  const max = Math.max(...events.map((event) => event.value), 1);
  document.getElementById("event-bars").innerHTML = events.map((event) => {
    const width = Math.max(4, (event.value / max) * 100);
    return `
      <div class="event-row">
        <header><span>${friendlyEventLabel(event.label)}</span><strong>${number(event.value)}</strong></header>
        <div class="event-track"><div class="event-fill" style="width:${width}%"></div></div>
      </div>`;
  }).join("");
}

function friendlyEventLabel(label = "") {
  const normalized = label.toLowerCase();
  const labels = {
    page_view: "Acessos ao site",
    restaurant_view: "Menus dos pratos consultados",
    section_view: "Áreas do site visualizadas",
    user_engagement: "Pessoas engajadas",
    session_start: "Visitas iniciadas",
    first_visit: "Novos visitantes",
    vote_click: "Cliques para votar",
    instagram_click: "Cliques no Instagram",
    maps_click: "Buscas no mapa",
    centro_click: "Cliques no Centro Europeu",
    external_click: "Cliques externos"
  };
  if (labels[normalized]) return labels[normalized];
  if (normalized.includes("pratos")) return "Menus dos pratos consultados";
  if (normalized.includes("centro")) return "Cliques no Centro Europeu";
  if (normalized.includes("instagram")) return "Cliques no Instagram";
  if (normalized.includes("rota") || normalized.includes("mapa")) return "Buscas no mapa";
  return label || "Ação do público";
}

function renderInsights(data) {
  const cities = [...(data.cities || [])].sort((a, b) => b.users - a.users);
  const topRestaurant = topRestaurants(data)[0];
  const centroViews = data.centroEuropeu.sectionViews || 0;
  const centroClicks = data.centroEuropeu.clicks || 0;
  const cityNames = cities.slice(0, 6).map((item) => displayCity(item.city)).join(", ");

  const insights = [
    cities.length ? `O festival já despertou interesse em ${number(cities.length)} cidades. Entre as origens aparecem ${cityNames}, um sinal importante de alcance turístico e boca a boca regional.` : "O alcance por cidade começa a aparecer conforme o público acessa o site.",
    topRestaurant ? `${topRestaurant.name} lidera o interesse do público neste momento, reunindo consultas ao menu, cliques no Instagram e buscas de rota.` : "O destaque de interesse será exibido conforme os menus receberem acessos.",
    `A presença do Centro Europeu já foi vista ${number(centroViews)} vezes no site, com ${number(centroClicks)} cliques de pessoas interessadas em conhecer mais sobre a instituição.`,
    (data.totals.voteClicks || 0) === 0
      ? "A votação ainda está em fase de espera; a partir de 1º de julho, esse indicador passa a mostrar intenção direta de participação do público."
      : "Os cliques na votação já funcionam como principal indicador de conversão da ação."
  ];

  document.getElementById("insights-list").innerHTML = insights.map((text) => `<li>${text}</li>`).join("");
}

function renderMeta(data) {
  const labels = {
    ga4: "Indicadores atualizados",
    live: "Movimento do site",
    demo: "Prévia do painel"
  };
  setText("source-label", labels[data.source] || labels.demo);
  setText("updated-at", data.updatedAt ? dateFormatter.format(new Date(data.updatedAt)) : "sem atualização");
}

function renderDashboard(data) {
  renderMeta(data);
  renderRealtime(data);
  renderKpis(data);
  renderTimeline(data);
  setTimelineButtons(timelinePeriod);
  renderCities(data);
  renderRestaurantSelector(data);
  renderRestaurants(data);
  renderEvents(data);
  renderInsights(data);
}

async function refreshDashboard() {
  dashboardData = await loadData(MAIN_PERIOD);
  renderDashboard(dashboardData);
  if (timelinePeriod !== MAIN_PERIOD) {
    refreshTimeline(timelinePeriod);
  }
}

async function refreshTimeline(period) {
  timelinePeriod = period;
  setTimelineButtons(period);
  const timelineData = period === MAIN_PERIOD && dashboardData ? dashboardData : await loadData(period);
  renderTimeline(timelineData);
}

async function init() {
  const restaurantSelect = document.getElementById("restaurant-select");

  await refreshDashboard();

  restaurantSelect.addEventListener("change", () => selectRestaurant(restaurantSelect.value));

  document.querySelectorAll("#timeline-controls [data-period]").forEach((button) => {
    button.addEventListener("click", () => refreshTimeline(button.dataset.period));
  });

  refreshTimer = window.setInterval(() => {
    if (document.hidden) return;
    refreshDashboard();
  }, 300000);
}

init();
