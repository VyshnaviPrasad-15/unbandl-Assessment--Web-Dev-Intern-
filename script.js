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

const year = new Date().getFullYear();
const isMobile = window.innerWidth <= 768;
const footerSec = document.getElementById("footer-sec");

const text = isMobile
  ? "© Copyright 2021 All Rights Reserved. Innovative Oral Care Solutions Pvt. Ltd. Managed By Unbundl"
  : `All Rights Reserved - ${year}, Clove Dental (a brand name of M/s. SStar Dental Centre Private Limited). Managed By Unbund`;

// Create or update the text content
const copyrightSpan = document.getElementById("copyright-text");
if (copyrightSpan) {
  copyrightSpan.innerText = text;
}
