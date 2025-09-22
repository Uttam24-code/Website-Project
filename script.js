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

  // toggle svg
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".icon.like, .icon.save").forEach(icon => {
    icon.addEventListener("click", () => {
      icon.classList.toggle("active");
    });
  });
});

// Search
const searchInput = document.getElementById("search-input");

  // Listen for Enter key
  searchInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      const query = searchInput.value.trim();
      if (query) {
        // Redirect to search.html with query
        window.location.href = `search.html?q=${encodeURIComponent(query)}`;
      }
    }
  });