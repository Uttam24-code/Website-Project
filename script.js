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
// Toggle SVG (like/save)
// --------------------
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".icon.like, .icon.save").forEach(icon => {
    icon.addEventListener("click", () => {
      icon.classList.toggle("active");

      // Find image & uploader inside the same card
      const card = icon.closest(".card");
      const img = card.querySelector("img");
      const uploader = card.querySelector(".uploader")?.innerText || "Unknown";

      // Get current saved list from sessionStorage
      let savedImages = JSON.parse(sessionStorage.getItem("savedImages")) || [];

      if (icon.classList.contains("active")) {
        // Add this image if not already in list
        if (!savedImages.some(item => item.url === img.src)) {
          savedImages.push({ url: img.src, uploader });
        }
      } else {
        // Remove from saved list
        savedImages = savedImages.filter(item => item.url !== img.src);
      }

      // Save back to sessionStorage
      sessionStorage.setItem("savedImages", JSON.stringify(savedImages));
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
