document.addEventListener("DOMContentLoaded", () => {
  const likedContainer = document.getElementById("favorites-container");
  let likedItems = JSON.parse(sessionStorage.getItem("likedImages")) || [];

  if (likedItems.length === 0) {
    likedContainer.innerHTML = `<p class="empty-msg">No liked images yet.</p>`;
    return;
  }

  likedContainer.innerHTML = ""; // clear

  likedItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="card-media">
        <img src="${item.url}" alt="liked Image" />
        <div class="card-info">
          <span class="uploader">${item.uploader}</span>
          <div class="icons">
            <!-- Like SVG -->
            <svg class="icon like" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                       2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 
                       4.5 2.09C13.09 3.81 14.76 3 16.5 3 
                       19.58 3 22 5.42 22 8.5c0 3.78-3.4 
                       6.86-8.55 11.54L12 21.35z" stroke="#d6bf8b" fill="none"/>
            </svg>
            <!-- like SVG (always active in liked page) -->
            <svg class="icon like active" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M4 17.9808V9.70753C4 6.07416 4 4.25748 5.17157 3.12874C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.12874C20 4.25748 20 6.07416 20 9.70753V17.9808C20 20.2867 20 21.4396 19.2272 21.8523C17.7305 22.6514 14.9232 19.9852 13.59 19.1824C12.8168 18.7168 12.4302 18.484 12 18.484C11.5698 18.484 11.1832 18.7168 10.41 19.1824C9.0768 19.9852 6.26947 22.6514 4.77285 21.8523C4 21.4396 4 20.2867 4 17.9808Z" stroke="#d6bf8b" fill="none"/>
            </svg>
          </div>
        </div>
      </div>
    `;

    likedContainer.appendChild(card);

    // Attach listeners
    const likedIcon = card.querySelector(".icon.like");
    likedIcon.addEventListener("click", () => {
      let items = JSON.parse(sessionStorage.getItem("likedImages")) || [];
      items = items.filter(i => i.url !== item.url);
      sessionStorage.setItem("likedImages", JSON.stringify(items));
      card.remove(); // remove from UI
    });

    const likeIcon = card.querySelector(".icon.like");
    likeIcon.addEventListener("click", () => {
      likeIcon.classList.toggle("active");
    });
  });
});
