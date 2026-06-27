// Cole aqui o link oficial de avaliação fornecido pela Abrasel.
// Exemplo: const OFFICIAL_VOTING_URL = "https://...";
const OFFICIAL_VOTING_URL = "https://forms.office.com/r/adJUWqDJkx?origin=lprLink";
const VOTING_START_AT = "2026-07-01T00:00:00-03:00";
const PENDING_VOTING_LABEL = "Votação em breve";
const VOTING_START_TIME = Date.parse(VOTING_START_AT);

function isVotingConfigured() {
  return /^https:\/\//i.test(OFFICIAL_VOTING_URL);
}

function isVotingOpen() {
  return isVotingConfigured() && Date.now() >= VOTING_START_TIME;
}

function setVotingLinkActive(link, label) {
  link.href = OFFICIAL_VOTING_URL;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.removeAttribute("aria-disabled");
  link.classList.remove("is-awaiting-link");
  if (label) label.textContent = link.dataset.activeLabel || "Vote na sua receita favorita";
}

function setVotingLinkPending(link, label) {
  link.href = "#votacao";
  link.removeAttribute("target");
  link.removeAttribute("rel");
  link.setAttribute("aria-disabled", "true");
  link.classList.add("is-awaiting-link");
  if (label) label.textContent = link.dataset.pendingLabel || PENDING_VOTING_LABEL;
}

function refreshVotingLinks() {
  const votingOpen = isVotingOpen();

  document.querySelectorAll("[data-voting-link]").forEach((link) => {
    const label = link.querySelector(".vote-link-label");

    if (votingOpen) {
      setVotingLinkActive(link, label);
      return;
    }

    setVotingLinkPending(link, label);
  });
}

document.querySelectorAll("[data-voting-link]").forEach((link) => {
  const label = link.querySelector(".vote-link-label");

  setVotingLinkPending(link, label);
  link.addEventListener("click", (event) => {
    if (link.classList.contains("is-awaiting-link")) event.preventDefault();
  });
});

refreshVotingLinks();

const msUntilVotingStarts = VOTING_START_TIME - Date.now();
if (msUntilVotingStarts > 0 && msUntilVotingStarts < 2147483647) {
  window.setTimeout(refreshVotingLinks, msUntilVotingStarts + 1000);
}
