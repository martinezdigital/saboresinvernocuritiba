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
    { label: "Pratos consultados", value: 127 },
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

function cityCoordinates(city) {
  const key = String(city || "")
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  return cityCoordinateFallback[key] || null;
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

  if (!response.ok) throw new Error("Supabase indisponível");
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

function renderCities(data) {
  const cities = [...(data.cities || [])].sort((a, b) => b.users - a.users);
  const max = Math.max(...cities.map((city) => city.users), 1);
  setText("city-count", `${cities.length} cidades`);

  document.getElementById("city-list").innerHTML = cities.slice(0, 6).map((city) => `
    <li>
      <strong>${city.city}</strong>
      <span>${number(city.users)} ${city.users === 1 ? "usuário" : "usuários"}</span>
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
      .bindPopup(`<strong>${city.city}</strong><br>${number(city.users)} ${city.users === 1 ? "usuário" : "usuários"}`)
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

function renderRestaurants(data, focus = "views") {
  const table = document.getElementById("restaurant-table");
  const restaurants = [...(data.restaurants || [])].sort((a, b) => {
    const metricA = focus === "instagram" ? a.instagram : focus === "maps" ? a.maps : a.views;
    const metricB = focus === "instagram" ? b.instagram : focus === "maps" ? b.maps : b.views;
    return metricB - metricA || restaurantScore(b) - restaurantScore(a);
  });
  const maxScore = Math.max(...restaurants.map(restaurantScore), 1);

  table.innerHTML = restaurants.map((item) => {
    const score = Math.round((restaurantScore(item) / maxScore) * 100);
    return `
      <tr>
        <td data-label="Restaurante">${item.name}</td>
        <td data-label="Prato consultado"><span class="restaurant-name">${number(item.views)}<small>${item.dish || "Menu participante"}</small></span></td>
        <td data-label="Instagram">${number(item.instagram)}</td>
        <td data-label="Rotas">${number(item.maps)}</td>
        <td data-label="Índice"><span class="interest-pill">${score}</span></td>
      </tr>`;
  }).join("");
}

function renderEvents(data) {
  const events = data.events || [];
  const max = Math.max(...events.map((event) => event.value), 1);
  document.getElementById("event-bars").innerHTML = events.map((event) => {
    const width = Math.max(4, (event.value / max) * 100);
    return `
      <div class="event-row">
        <header><span>${event.label}</span><strong>${number(event.value)}</strong></header>
        <div class="event-track"><div class="event-fill" style="width:${width}%"></div></div>
      </div>`;
  }).join("");
}

function renderInsights(data) {
  const topCity = [...(data.cities || [])].sort((a, b) => b.users - a.users)[0];
  const topRestaurant = [...(data.restaurants || [])].sort((a, b) => restaurantScore(b) - restaurantScore(a))[0];
  const centroViews = data.centroEuropeu.sectionViews || 0;
  const centroClicks = data.centroEuropeu.clicks || 0;
  const centroRate = centroViews ? Math.round((centroClicks / centroViews) * 100) : 0;

  const insights = [
    topCity ? `${topCity.city} é a cidade com maior presença no período, ajudando a entender onde a divulgação está gerando mais alcance.` : "Ainda não há cidades suficientes para leitura.",
    topRestaurant ? `${topRestaurant.name} aparece com o maior índice de interesse, somando consultas ao prato e cliques de intenção.` : "Ainda não há ranking de restaurantes suficiente.",
    `O bloco do Centro Europeu teve ${number(centroViews)} visualizações e ${number(centroClicks)} cliques, com taxa estimada de ${centroRate}% de interesse.`,
    (data.totals.voteClicks || 0) === 0
      ? "A votação ainda está em fase de espera; a partir de 1º de julho, esse indicador passa a mostrar intenção direta de participação do público."
      : "Os cliques na votação já funcionam como principal indicador de conversão da ação."
  ];

  document.getElementById("insights-list").innerHTML = insights.map((text) => `<li>${text}</li>`).join("");
}

function renderMeta(data) {
  const labels = {
    ga4: "Dados do Google Analytics · GA4",
    live: "Coleta nova do site · Supabase",
    demo: "Prévia do painel · dados demonstrativos"
  };
  setText("source-label", labels[data.source] || labels.demo);
  setText("updated-at", data.updatedAt ? dateFormatter.format(new Date(data.updatedAt)) : "sem atualização");
}

function renderDashboard(data) {
  const focus = document.getElementById("metric-focus");

  renderMeta(data);
  renderRealtime(data);
  renderKpis(data);
  renderTimeline(data);
  renderCities(data);
  renderRestaurants(data, focus.value);
  renderEvents(data);
  renderInsights(data);
}

async function refreshDashboard() {
  const period = document.getElementById("period-filter").value;
  dashboardData = await loadData(period);
  renderDashboard(dashboardData);
}

async function init() {
  const focus = document.getElementById("metric-focus");
  const period = document.getElementById("period-filter");

  await refreshDashboard();

  focus.addEventListener("change", () => renderRestaurants(dashboardData, focus.value));
  period.addEventListener("change", refreshDashboard);

  refreshTimer = window.setInterval(() => {
    if (document.hidden || dashboardData?.source !== "live") return;
    refreshDashboard();
  }, 60000);
}

init();
