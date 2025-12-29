// Football team object
const footballTeam = {
  team: "Argentina National Team",
  year: 1986,
  headCoach: "Carlos Bilardo",
  players: [
    {
      name: "Diego Maradona",
      position: "midfielder",
      isCaptain: true,
    },
    {
      name: "Jorge Burruchaga",
      position: "forward",
      isCaptain: false,
    },
    {
      name: "Oscar Ruggeri",
      position: "defender",
      isCaptain: false,
    },
    {
      name: "Nery Pumpido",
      position: "goalkeeper",
      isCaptain: false,
    },
  ],
};

// DOM elements
const headCoachEl = document.getElementById("head-coach");
const teamEl = document.getElementById("team");
const yearEl = document.getElementById("year");
const playerCardsEl = document.getElementById("player-cards");
const positionFilter = document.getElementById("players"); // ✅ FIXED ID

// Display team info
headCoachEl.textContent = footballTeam.headCoach;
teamEl.textContent = footballTeam.team;
yearEl.textContent = footballTeam.year;

// Render players
function renderPlayers(players) {
  playerCardsEl.innerHTML = "";

  players.forEach((player) => {
    const card = document.createElement("div");
    card.classList.add("player-card");

    const nameEl = document.createElement("h2");
    nameEl.textContent = player.isCaptain
      ? `(Captain) ${player.name}`
      : player.name;

    const positionEl = document.createElement("p");
    positionEl.textContent = `Position: ${player.position}`;

    card.appendChild(nameEl);
    card.appendChild(positionEl);
    playerCardsEl.appendChild(card);
  });
}

// Initial render
renderPlayers(footballTeam.players);

// Filter players by position
positionFilter.addEventListener("change", (e) => {
  const selectedPosition = e.target.value;

  if (selectedPosition === "all") {
    renderPlayers(footballTeam.players);
  } else {
    const filteredPlayers = footballTeam.players.filter(
      (player) => player.position === selectedPosition
    );
    renderPlayers(filteredPlayers);
  }
});
