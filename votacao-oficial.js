// Cole aqui o link oficial de avaliação fornecido pela Abrasel.
// Exemplo: const OFFICIAL_VOTING_URL = "https://...";
const OFFICIAL_VOTING_URL = "https://forms.office.com/r/adJUWqDJkx?origin=lprLink";

document.querySelectorAll("[data-voting-link]").forEach((link) => {
  const label = link.querySelector(".vote-link-label");
  const configured = /^https:\/\//i.test(OFFICIAL_VOTING_URL);

  if (configured) {
    link.href = OFFICIAL_VOTING_URL;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.removeAttribute("aria-disabled");
    link.classList.remove("is-awaiting-link");
    if (label) label.textContent = link.dataset.activeLabel || "Vote na sua receita favorita";
    return;
  }

  link.classList.add("is-awaiting-link");
  link.setAttribute("aria-disabled", "true");
  link.addEventListener("click", (event) => event.preventDefault());
});
