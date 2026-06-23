const restaurants = [
  {
    slug: "alchemia",
    name: "Alchemia Bar e Restaurante",
    dish: "Do Solo ao Colo",
    price: 99,
    service: "Almoço e jantar",
    description: "Bombom de alcatra com demi-glace, mousseline de batata-salsa, cogumelos, farofa de broa de centeio com pinhão e bacon e emulsão de erva-mate.",
    address: "Avenida Jaime Reis, 40",
    instagram: "@bar_alchemia",
    images: ["Alchemia/RECEITA ALCHEMIA.jpeg"]
  },
  {
    slug: "bar-do-alemao",
    name: "Bar do Alemão",
    dish: "Inverno na Floresta Negra",
    price: 129,
    service: "Almoço e jantar",
    description: "Marinada de porco com molho especial.",
    address: "Rua Dr. Claudino dos Santos, 63",
    instagram: "@bardoalemaooficial",
    images: ["Bar do Alemão/bar dp alemao.jpeg"]
  },
  {
    slug: "cantina-do-delio",
    name: "Cantina do Délio",
    dish: "Conchiglione di Gorgonzola e Cubos de Mignon",
    price: 129,
    service: "Almoço e jantar",
    description: "Conchiglione recheado com gorgonzola e servido com cubos de mignon. Sobremesa: brownie de chocolate meio amargo com sorvete de creme e calda de chocolate.",
    address: "Rua Teixeira Coelho, 255 — Batel · Rua Itupava, 1094 — Alto da XV",
    instagram: "@cantinadodelio",
    images: [
      "Cantina do Delio  Itupava e Batel/CANTINA DO DELIO Conchiglione.png",
      "Cantina do Delio  Itupava e Batel/CANDITNA DO DELIO SOBREMESA.jpg.jpeg"
    ]
  },
  {
    slug: "cantina-baviera",
    name: "Cantina e Pizzaria Baviera",
    dish: "Sopa de Cebola",
    price: 99,
    service: "Jantar",
    description: "Sopa de cebola de receita parisiense do século XVI, montada artesanalmente em camadas na cumbuca e gratinada no forno a lenha.",
    address: "Alameda Augusto Stellfeld, 26",
    instagram: "@cantinabaviera",
    images: [
      "Cantina e Pizzaria Baviera/SOPA Cantina Baviera 2.png",
      "assets/restaurants/baviera-1.webp",
      "assets/restaurants/baviera-2.webp",
      "Cantina e Pizzaria Baviera/SOPA Cantina Baviera .png"
    ]
  },
  {
    slug: "carlo-ristorante",
    name: "Carlo Ristorante",
    dish: "Risoto de Linguiça Blumenau com Pinhão",
    price: 129,
    service: "Jantar",
    description: "Risoto de linguiça Blumenau com pinhão e, como sobremesa, cheesecake basca.",
    address: "Avenida Iguaçu, 2820 — Água Verde",
    instagram: "@carloristorante",
    images: ["assets/restaurants/carlo-ristorante.jpg"]
  },
  {
    slug: "chef-express",
    name: "Chef Express",
    dish: "Super Filé Mignon à Parmegiana + Mousse Dois Amores",
    price: 99,
    service: "Almoço e jantar",
    description: "Filé mignon empanado recheado com queijo e presunto, molho caseiro de tomates frescos e ervilhas, batata palha artesanal e arroz. Sobremesa: mousse dois amores.",
    address: "Rua Bento Viana, 118",
    instagram: "@chefexpresscwb",
    images: ["Chef Express/Chef Express 1.jpeg", "Chef Express/Chef Express 2.jpeg"]
  },
  {
    slug: "cutelaria",
    name: "Cutelaria Carne com Cerveja",
    dish: "Tomahawk com Legumes Braseados",
    price: 129,
    service: "Jantar",
    description: "Tomahawk grelhado com legumes braseados e maionese da casa. De sobremesa, banoffee artesanal com doce de leite defumado.",
    address: "Rua Major Heitor Guimarães, 1130",
    instagram: "@cutelaria.distrito",
    images: ["Cutelaria/Cutelaria 1.jpeg", "Cutelaria/Cutelaria 2.jpeg"]
  },
  {
    slug: "dina-pizza",
    name: "Dina Pizza",
    dish: "Pizza Costela Serrana",
    price: 99,
    service: "Almoço e jantar",
    description: "Pizza de costela serrana com molho branco, muçarela, costela bovina desfiada, pinhão, cebola caramelizada e cheiro-verde. Sobremesa: pizza de maçã caramelizada com chocolate branco flambado.",
    address: "Rua Izaac Ferreira da Cruz, 3700",
    instagram: "@dinapizzaoficial",
    images: [
      "Dina Pizza/Dina Pizza 3.jpg.jpeg",
      "Dina Pizza/Dina Pizza.jpg.jpeg",
      "Dina Pizza/Dina Pizza 2.jpg.jpeg"
    ]
  },
  {
    slug: "dom-carmino",
    name: "Dom Carmino Pizzaria",
    dish: "Jantar Harmonizado",
    price: 129,
    service: "Jantar",
    description: "Pizza grande acompanhada de duas taças de vinho.",
    address: "Avenida Cândido Hartmann, 1550",
    instagram: "@domcarminopizzaria",
    images: ["Dom Carmino/Dom Carmino1.jpeg"]
  },
  {
    slug: "doppo-cucina",
    name: "Doppo Cucina",
    dish: "Lasagna de Vitelo",
    price: 129,
    service: "Almoço e jantar",
    description: "Lasagna de vitelo com mozzarella de búfala, demi-glace, fonduta de pecorino e trufas negras.",
    address: "Avenida do Batel, 1550 — Batel",
    instagram: "@doppocucina",
    images: [
      "Doppo/Doppo 1.png",
      "Doppo/Doppo 2.png",
      "Doppo/Doppo 3.jpeg",
      "Doppo/Doppo 4.jpeg",
      "Doppo/Doppo 5.jpeg"
    ]
  },
  {
    slug: "galeteria-caxias",
    name: "Galeteria Caxias",
    dish: "Rodízio Italiano",
    price: 129,
    service: "Almoço e jantar",
    description: "Rodízio italiano com sopa de capeletti, galeto, espaguete, risoto colonial, maionese, tortei de abóbora, costelinha de porco e salada.",
    address: "Avenida Comendador Franco, 3077",
    instagram: "@galeteriacaxias",
    images: ["Galeteria Caxias/Galeteria Caxias  2.jpeg"]
  },
  {
    slug: "happy-burger",
    name: "Happy Burger",
    dish: "Mignon de Inverno",
    price: 129,
    service: "Almoço e jantar",
    description: "Mignon grelhado, creme de pinhão com parmesão, ragu de cogumelos, aspargos e bacon. Sobremesa: tarte tatin de maçã com sorvete de baunilha e caramelo salgado.",
    address: "Avenida Mal. Humberto de Alencar Castelo Branco, 251",
    instagram: "@happyburgercwb",
    images: ["Happy Burguer/HappyBurguer.jpeg"]
  },
  {
    slug: "hard-rock-cafe",
    name: "Hard Rock Cafe Curitiba",
    dish: "Grilled Salmon + (Meia) New York Cheesecake",
    price: 129,
    service: "Almoço e jantar",
    description: "Salmão grelhado com mostarda agridoce, purê de batatas e vegetais. Sobremesa: meia New York cheesecake com calda de morango.",
    address: "Rua Buenos Aires, 50 — Batel",
    instagram: "@hrccuritiba",
    images: ["Hard Rock Café Curitiba/Hard Rock 4.jpeg", "Hard Rock Café Curitiba/Hard Rock 2.JPEG"]
  },
  {
    slug: "imaginum-sushi",
    name: "Imaginum Sushi",
    dish: "Yakisoba + Sobremesa",
    price: 129,
    service: "Almoço e jantar",
    description: "Yakissoba de frutos do mar. Sobremesa: petit gâteau de chocolate com duas bolas de sorvete.",
    address: "Rua Tabajaras, 714 — Vila Izabel",
    instagram: "@imaginumsushi",
    images: [
      "assets/restaurants/imaginum/yakissoba-1.jpg",
      "assets/restaurants/imaginum/yakissoba-2.jpg",
      "assets/restaurants/imaginum/yakissoba-3.jpg",
      "assets/restaurants/imaginum/sobremesa-1.jpg",
      "assets/restaurants/imaginum/sobremesa-2.jpg"
    ]
  },
  {
    slug: "limoeiro",
    name: "Limoeiro Casa de Comidas",
    dish: "Ossobuco com Risotto alla Milanese",
    price: 129,
    service: "Almoço",
    description: "Ossobuco em cozimento lento com risotto alla milanese de açafrão e gremolata de limão e salsinha.",
    address: "Avenida Mal. Humberto de Alencar Castelo Branco, 669",
    instagram: "@limoeiro.casa.de.comidas",
    images: ["Limoeiro/Limoeiro 3.jpeg", "Limoeiro/Limoeiro 2.jpeg"]
  },
  {
    slug: "maias-sushi",
    name: "Maias Sushi",
    dish: "Combinado Maias 50 Peças",
    price: 99,
    service: "Jantar",
    description: "Combinado de 50 peças: 10 uramaki Filadélfia, 10 uramaki Romeu e Julieta, 10 uramaki skin, 10 hossomaki salmão e 10 hot Filadélfia.",
    address: "Rua Percy Feliciano de Castilho, 411",
    instagram: "@maiassushi2020",
    images: ["Maias Sushi/Maias Sushi 1.jpeg", "Maias Sushi/Maias Sushi 2.jpeg"]
  },
  {
    slug: "marie-vin-bistrot",
    name: "Marie Vin e Bistrot",
    dish: "Médaillon de Mignon du Chef au Café de Paris",
    price: 99,
    service: "Almoço e jantar",
    description: "Mignon ao molho Café de Paris servido com risoto de queijo brie.",
    address: "Rua Prof. Brandão, 429 — Alto da XV",
    instagram: "@marievinebistrot",
    images: ["Marie/Marie 2.jpeg", "Marie/Marie 1.jpeg"]
  },
  {
    slug: "opera-arte",
    name: "Opera Arte",
    dish: "Capeletti Pilagalli Sabor Paraná",
    price: 99,
    service: "Almoço",
    description: "Capeletti recheado com barreado servido em caldo de batata-salsa.",
    address: "Rua João Gava, 920 — Abranches",
    instagram: "@opera_arte",
    images: ["Opera Arte/Opera Arte 1.jpeg", "Opera Arte/Opera Arte 2.jpeg", "Opera Arte/Opera Arte 3.jpeg"]
  },
  {
    slug: "peruano",
    name: "Peruano Gastronomia e Cultura",
    dish: "Chupe de Camarão",
    price: 99,
    service: "Almoço e jantar",
    description: "Sopa cremosa peruana com camarões, legumes frescos, milho, ervilhas, ovo frito e temperos andinos.",
    address: "Avenida Marechal Humberto de Alencar Castelo Branco, 675",
    instagram: "@peruanogastronomia",
    images: ["Peruano Gastronomia e Cultura/Peruano 1.jpeg", "Peruano Gastronomia e Cultura/Peruano 2.jpeg"]
  },
  {
    slug: "quintal-do-monge",
    name: "Quintal do Monge",
    dish: "Mignon à Parmegiana com Massa",
    price: 99,
    service: "Almoço e jantar",
    description: "Mignon à parmegiana com massa na manteiga ou ao sugo. Para finalizar, quatro minichurros com sorvete.",
    address: "Rua Dr. Claudino dos Santos, 24",
    instagram: "@quintaldomonge",
    images: ["Quintal do Monge/Quintal do Monge 1.jpeg", "Quintal do Monge/Quintal do Monge  2.jpeg"]
  },
  {
    slug: "quitutto",
    name: "Quitutto",
    dish: "Cupim pra Banguela aos Queijos",
    price: 129,
    service: "Almoço e jantar",
    description: "Cupim extremamente macio servido com mix de queijos.",
    address: "Avenida dos Estados, 481 — Água Verde",
    instagram: "@quitutto",
    images: ["Quitutto/Quitutto 1.jpeg", "Quitutto/Quitutto 2.jpeg", "Quitutto/Quitutto 3.jpeg", "Quitutto/Quitutto 4.jpeg"]
  },
  {
    slug: "tuk-tuk",
    name: "Tuk Tuk",
    dish: "Golden Seafood",
    price: 99,
    service: "Almoço e jantar",
    description: "Tilápia grelhada e camarões em molho aromático, legumes na wok e farofa de coco, pinhão e castanhas. Sobremesa: banana na ghee com ganache e creme de curry.",
    address: "Rua Camões, 1122",
    instagram: "@tuktuk.br",
    images: ["Tuk Tuk/Tuk Tuk.jpeg"]
  },
  {
    slug: "villa-bistro",
    name: "Villa Bistrô",
    dish: "Parmegiana de Mignon e Torta de Pistache",
    price: 99,
    service: "Almoço",
    description: "Bife à parmegiana de filé mignon com arroz branco e batata rústica. Na sobremesa, torta de pistache.",
    address: "Avenida Sete de Setembro, 6334 — Batel",
    instagram: "@villabistrocwb",
    images: ["Villa Bistro/Villa Bistro 1.jpeg", "Villa Bistro/Villa Bistro 2.jpeg"]
  }
];

const grid = document.querySelector("#restaurant-grid");
const searchInput = document.querySelector("#search");
const priceButtons = [...document.querySelectorAll("[data-price]")];
const serviceSelect = document.querySelector("#service-filter");
const resultsCount = document.querySelector("#results-count");
const clearFilters = document.querySelector("#clear-filters");
const emptyState = document.querySelector("#empty-state");
const resetButton = document.querySelector("[data-reset]");
const dialog = document.querySelector("#restaurant-dialog");
const dialogContent = document.querySelector("#dialog-content");
const closeDialogButton = document.querySelector(".dialog-close");
const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

let selectedPrice = "all";
let selectedService = "all";

const escapeHtml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const normalizeText = (value = "") => String(value)
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()
  .trim();

const locationIcon = `
  <svg aria-hidden="true" viewBox="0 0 24 24">
    <path d="M20 10c0 5.25-8 11-8 11S4 15.25 4 10a8 8 0 1 1 16 0Z"/>
    <circle cx="12" cy="10" r="2.5"/>
  </svg>`;

function placeholderMarkup() {
  return `<div class="card-placeholder"><div><span aria-hidden="true">❄</span><small>Foto em atualização</small></div></div>`;
}

function cardMarkup(restaurant) {
  const image = restaurant.images[0]
    ? `<img src="${escapeHtml(restaurant.images[0])}" alt="${escapeHtml(restaurant.dish)} — ${escapeHtml(restaurant.name)}" loading="lazy" decoding="async">`
    : placeholderMarkup();
  const photoCount = restaurant.images.length > 1
    ? `<span class="photo-badge">${restaurant.images.length} fotos</span>`
    : "";
  const location = restaurant.address
    ? escapeHtml(restaurant.address)
    : `<span class="missing">Endereço a confirmar</span>`;
  const service = restaurant.service
    ? escapeHtml(restaurant.service)
    : `<span class="missing">Horário a confirmar</span>`;

  return `
    <article class="restaurant-card">
      <div class="card-media">
        ${image}
        <div class="card-badges">
          <span class="price-badge">R$ ${restaurant.price}</span>
          ${photoCount}
        </div>
      </div>
      <div class="card-body">
        <p class="card-restaurant">${escapeHtml(restaurant.name)}</p>
        <h3>${escapeHtml(restaurant.dish)}</h3>
        <p class="card-service"><span aria-hidden="true">◷</span> ${service}</p>
        <p class="card-description">${escapeHtml(restaurant.description)}</p>
        <div class="card-location">${locationIcon}<span>${location}</span></div>
        <button class="card-action" type="button" data-open="${restaurant.slug}" aria-label="Ver detalhes de ${escapeHtml(restaurant.dish)}">
          Ver experiência <span aria-hidden="true">↗</span>
        </button>
      </div>
    </article>`;
}

function getFilteredRestaurants() {
  const query = normalizeText(searchInput.value);
  return restaurants.filter((restaurant) => {
    const matchesPrice = selectedPrice === "all" || restaurant.price === Number(selectedPrice);
    const normalizedService = normalizeText(restaurant.service || "");
    const matchesService = selectedService === "all"
      || (selectedService === "lunch" && normalizedService.includes("almoco"))
      || (selectedService === "dinner" && normalizedService.includes("jantar"));
    const haystack = normalizeText(`${restaurant.name} ${restaurant.dish} ${restaurant.description} ${restaurant.address || ""}`);
    return matchesPrice && matchesService && (!query || haystack.includes(query));
  });
}

function renderRestaurants() {
  const filtered = getFilteredRestaurants();
  grid.innerHTML = filtered.map(cardMarkup).join("");
  const hasFilters = selectedPrice !== "all" || selectedService !== "all" || searchInput.value.trim() !== "";

  resultsCount.textContent = filtered.length === 1
    ? "1 experiência encontrada"
    : `${filtered.length} experiências encontradas`;
  clearFilters.hidden = !hasFilters;
  grid.hidden = filtered.length === 0;
  emptyState.hidden = filtered.length !== 0;
}

function resetFilters() {
  selectedPrice = "all";
  selectedService = "all";
  searchInput.value = "";
  serviceSelect.value = "all";
  priceButtons.forEach((button) => {
    const active = button.dataset.price === "all";
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  renderRestaurants();
}

function instagramUrl(handle) {
  return handle ? `https://www.instagram.com/${handle.replace("@", "")}/` : null;
}

function mapUrl(address) {
  return address ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${address}, Curitiba, PR`)}` : null;
}

function dialogMarkup(restaurant) {
  const primaryImage = restaurant.images[0]
    ? `<img id="dialog-main-photo" src="${escapeHtml(restaurant.images[0])}" alt="${escapeHtml(restaurant.dish)} — ${escapeHtml(restaurant.name)}">`
    : placeholderMarkup();
  const thumbnails = restaurant.images.length > 1
    ? `<div class="gallery-thumbs" aria-label="Galeria de fotos">
        ${restaurant.images.map((image, index) => `
          <button class="gallery-thumb${index === 0 ? " is-active" : ""}" type="button" data-image="${escapeHtml(image)}" aria-label="Ver foto ${index + 1} de ${restaurant.images.length}">
            <img src="${escapeHtml(image)}" alt="" loading="lazy">
          </button>`).join("")}
      </div>`
    : "";
  const address = restaurant.address
    ? escapeHtml(restaurant.address)
    : `<span class="missing">Endereço não informado — a confirmar</span>`;
  const instagram = restaurant.instagram
    ? `<a href="${instagramUrl(restaurant.instagram)}" target="_blank" rel="noopener">${escapeHtml(restaurant.instagram)}</a>`
    : `<span class="missing">Perfil não informado — a confirmar</span>`;
  const service = restaurant.service
    ? escapeHtml(restaurant.service)
    : `<span class="missing">Horário não informado — a confirmar</span>`;
  const directions = restaurant.address
    ? `<a href="${mapUrl(restaurant.address)}" target="_blank" rel="noopener">Como chegar <span aria-hidden="true">↗</span></a>`
    : "";
  const social = restaurant.instagram
    ? `<a href="${instagramUrl(restaurant.instagram)}" target="_blank" rel="noopener">Ver Instagram <span aria-hidden="true">↗</span></a>`
    : "";

  return `
    <div class="dialog-grid">
      <div class="dialog-gallery">
        <div class="dialog-main-image">${primaryImage}</div>
        ${thumbnails}
      </div>
      <div class="dialog-info">
        <p class="dialog-restaurant">${escapeHtml(restaurant.name)}</p>
        <h2 id="dialog-title">${escapeHtml(restaurant.dish)}</h2>
        <span class="dialog-price">R$ ${restaurant.price}</span>
        <p class="dialog-description">${escapeHtml(restaurant.description)}</p>
        <dl class="dialog-meta">
          <div><dt>Endereço</dt><dd>${address}</dd></div>
          <div><dt>Instagram</dt><dd>${instagram}</dd></div>
          <div><dt>Serviço</dt><dd>${service}</dd></div>
          <div><dt>Período</dt><dd>1º a 31 de julho de 2026</dd></div>
        </dl>
        <div class="dialog-actions">${directions}${social}</div>
        <p class="dialog-note">Disponibilidade e horários podem variar. Consulte o restaurante antes da visita.</p>
      </div>
    </div>`;
}

function openRestaurant(slug) {
  const restaurant = restaurants.find((item) => item.slug === slug);
  if (!restaurant) return;
  dialogContent.innerHTML = dialogMarkup(restaurant);
  dialog.showModal();
  document.body.classList.add("dialog-open");
}

function closeDialog() {
  if (dialog.open) dialog.close();
}

priceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectedPrice = button.dataset.price;
    priceButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    renderRestaurants();
  });
});

searchInput.addEventListener("input", renderRestaurants);
serviceSelect.addEventListener("change", () => {
  selectedService = serviceSelect.value;
  renderRestaurants();
});
clearFilters.addEventListener("click", resetFilters);
resetButton.addEventListener("click", resetFilters);

grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-open]");
  if (button) openRestaurant(button.dataset.open);
});

grid.addEventListener("error", (event) => {
  if (event.target.tagName !== "IMG") return;
  const media = event.target.closest(".card-media");
  event.target.remove();
  if (media && !media.querySelector(".card-placeholder")) {
    media.insertAdjacentHTML("afterbegin", placeholderMarkup());
  }
}, true);

dialogContent.addEventListener("click", (event) => {
  const thumbnail = event.target.closest("[data-image]");
  if (!thumbnail) return;
  const mainPhoto = dialogContent.querySelector("#dialog-main-photo");
  if (!mainPhoto) return;
  mainPhoto.src = thumbnail.dataset.image;
  dialogContent.querySelectorAll(".gallery-thumb").forEach((item) => item.classList.remove("is-active"));
  thumbnail.classList.add("is-active");
});

closeDialogButton.addEventListener("click", closeDialog);
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) closeDialog();
});
dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 28);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!open));
  mainNav.classList.toggle("is-open", !open);
  header.classList.toggle("menu-open", !open);
});

mainNav.addEventListener("click", (event) => {
  if (!event.target.closest("a")) return;
  menuToggle.setAttribute("aria-expanded", "false");
  mainNav.classList.remove("is-open");
  header.classList.remove("menu-open");
});

renderRestaurants();
