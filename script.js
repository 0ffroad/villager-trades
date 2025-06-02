document.getElementById("villagerSelect").addEventListener("change", function () {
  const value = this.value;
  const infoDiv = document.getElementById("villagerInfo");
  infoDiv.innerHTML = "";

  if (!value || !villagerData[value]) return;

  const villager = villagerData[value];
  for (const level in villager.levels) {
    const tier = document.createElement("div");
    tier.className = "trade-tier";
    tier.innerHTML = `<h3>${level}</h3><ul class="trade-list">` +
      villager.levels[level].map(trade => `<li>${trade}</li>`).join("") + "</ul>";
    infoDiv.appendChild(tier);
  }

  villager.tips.forEach(tip => {
    const tipBox = document.createElement("div");
    tipBox.className = "tip";
    tipBox.textContent = tip;
    infoDiv.appendChild(tipBox);
  });
});

function toggleDarkMode() {
  const current = document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
}

function changeLanguage(lang) {
  alert('Language change is not implemented yet, selected: ' + lang);
}
