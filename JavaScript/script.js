// SideMenu
const hamburger = document.getElementById("hamburger");
const sidebar = document.querySelector(".slidemenu");
const overlay = document.createElement("div");
overlay.classList.add("overlay");
document.body.appendChild(overlay);

hamburger.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

// --------------------
// Toggle SVG (like/save) on Home page
// --------------------
document.addEventListener("DOMContentLoaded", () => {
  // Load saved items from sessionStorage
  let savedImages = JSON.parse(sessionStorage.getItem("savedImages")) || [];

  document.querySelectorAll(".card").forEach(card => {
    const img = card.querySelector("img");
    const uploader = card.querySelector(".uploader")?.innerText || "Unknown";
    const saveIcon = card.querySelector(".icon.save");
    const likeIcon = card.querySelector(".icon.like");

    // --- Restore "saved" state on page load ---
    if (savedImages.some(item => item.url === img.src)) {
      saveIcon.classList.add("active");
    }

    // --- Save toggle ---
    saveIcon.addEventListener("click", () => {
      let items = JSON.parse(sessionStorage.getItem("savedImages")) || [];
      const exists = items.find(item => item.url === img.src);

      if (exists) {
        // Remove if already saved
        items = items.filter(item => item.url !== img.src);
        saveIcon.classList.remove("active");
      } else {
        // Add if not saved
        items.push({ url: img.src, uploader });
        saveIcon.classList.add("active");
      }

      sessionStorage.setItem("savedImages", JSON.stringify(items));
      savedImages = items;
    });

    // --- Like toggle (visual only, not persisted) ---
    likeIcon.addEventListener("click", () => {
      likeIcon.classList.toggle("active");
    });
  });
});

// --------------------
// Search
// --------------------
const searchInput = document.getElementById("search-input");

if (searchInput) {
  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const query = searchInput.value.trim();
      if (query) {
        // Redirect to search.html with query
        window.location.href = `search.html?q=${encodeURIComponent(query)}`;
      }
    }
  });
}
