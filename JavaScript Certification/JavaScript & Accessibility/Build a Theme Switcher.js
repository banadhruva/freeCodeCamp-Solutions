const themes = [
  { name: "light", message: "Light theme activated." },
  { name: "dark", message: "Dark theme activated." }
];
const button = document.getElementById("theme-switcher-button");
const dropdown = document.getElementById("theme-dropdown");
const message = document.getElementById("theme-message");
const menuItems = document.querySelectorAll('[role="menuitem"]');

button.addEventListener("click", () => {
  const isExpanded = button.getAttribute("aria-expanded") === "true";

  if (isExpanded) {
    dropdown.hidden = true;
    button.setAttribute("aria-expanded", "false");
  } else {
    dropdown.hidden = false;
    button.setAttribute("aria-expanded", "true");
  }
});

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    const themeName = item.id.replace("theme-", "");

    document.body.className = "";

    document.body.classList.add(`theme-${themeName}`);

    const selectedTheme = themes.find(
      theme => theme.name === themeName  );

    message.textContent = selectedTheme.message;

    dropdown.hidden = true;
    button.setAttribute("aria-expanded", "false");
  });
});