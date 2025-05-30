document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent successfully!");
});
const statsContainer = document.getElementById("statistics");
const statItems = statsContainer.children;
const statItemWidth = statItems[0].offsetWidth; // Width of a single stat-item
const containerWidth = statsContainer.offsetWidth;
const itemsToFit = Math.floor(containerWidth / statItemWidth); // Number of items that fit
const totalItemsNeeded =
  itemsToFit > statItems.length ? itemsToFit : statItems.length;

// Clone and append stat-items to fill the width
const originalItems = Array.from(statItems);
let currentIndex = 0;
while (statsContainer.children.length < totalItemsNeeded) {
  const clone =
    originalItems[currentIndex % originalItems.length].cloneNode(true);
  statsContainer.appendChild(clone);
  currentIndex++;
}
