document.addEventListener("DOMContentLoaded", () => {
  const savedContainer = document.getElementById("saved-container");

  // Pull saved images from sessionStorage
  let savedItems = JSON.parse(sessionStorage.getItem("savedImages")) || [];

  if (savedItems.length === 0) {
    savedContainer.innerHTML = `<p class="empty-msg">No saved images yet.</p>`;
    return;
  }

  savedItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="card-media">
        <img src="${item.url}" alt="Saved Image" />
      </div>
      <div class="card-info">
        <span class="uploader">${item.uploader}</span>
      </div>
    `;

    savedContainer.appendChild(card);
  });
});
