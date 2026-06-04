const mainSections = ["#home", "#about-us", "#contact-us"];

function searchDestinations() {
  const searchInput = document.querySelector("#searchbar-input");
  if (!searchInput) return;

  const input = searchInput.value.toLowerCase().trim();

  let searchKey = input;
  if (input === "beach") searchKey = "beaches";
  if (input === "temple") searchKey = "temples";
  if (input === "country") searchKey = "countries";

  fetch("./index.json")
    .then((response) => {
      if (!response.ok) throw new Error("Data file missing");
      return response.json();
    })
    .then((data) => {
      const recommendations = data[searchKey];

      if (recommendations) {
        mainSections.forEach((selector) => {
          const el = document.querySelector(selector);
          if (el) el.style.display = "none";
        });

        const resultsScreen = document.getElementById("search-results-screen");
        if (resultsScreen) {
          resultsScreen.style.display = "block";
        }

        displayResults(recommendations);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        alert("Please enter a valid keyword: beach, temple, or country.");
      }
    })
    .catch((err) => console.error(err));
}

function displayResults(items) {
  const container = document.getElementById("results-grid");
  if (!container) return;
  container.innerHTML = "";
  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "result-card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
    `;

    container.appendChild(card);
  });
}

function clearSearch() {
  const searchInput = document.querySelector("#searchbar-input");
  if (searchInput) searchInput.value = "";

  const resultsScreen = document.getElementById("search-results-screen");
  if (resultsScreen) resultsScreen.style.display = "none";

  mainSections.forEach((selector) => {
    const el = document.querySelector(selector);
    if (el) el.style.display = "";
  });
}
