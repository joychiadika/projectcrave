const cardsData = [
  {
    image: "/images/Gordon_Ramsay.svg",
    chefName: "Gordon Ramsay",
    restaurant: "GR Restaurants San Frascisco.",
	  link: "/html/chef's_profile.html",
  },
  {
    image: "/images/Thomas_Keller.svg",
    chefName: "Thomas Keller",
    restaurant: "The French Fries and Eat (USA)",
  },
  {
    image: "/images/Clare_Smyth.svg",
    chefName: "Clare Smyth",
    restaurant: "Core by Clare Smyth London (UK)",
  },
  {
    image: "/images/Alice_Waters.svg",
    chefName: "Alice Waters",
    restaurant: "Chez Panisse  Copenhagen Brazil",
  },
  {
    image: "/images/Aria_Tempest.svg",
    chefName: "Aria Tempest",
    restaurant: "Celestial Gardens Armsterdam.",
  },
  {
    image: "/images/Elijah_Blaze.svg",
    chefName: "Elijah Blaze",
    restaurant: "Vibrant Vista Taunton UK",
  },
  {
    image: "/images/Lila_Spicefield.svg",
    chefName: "Lila Spicefield",
    restaurant: "Spice Fusion Lounge Savorville",
  },
  {
    image: "/images/Oliver_Zest.svg",
    chefName: "Oliver Zest",
    restaurant: "Zestful Zestoria Los Angeles",
  },
  {
    image: "/images/Isabella_Sterling.svg",
    chefName: "Isabella Sterling",
    restaurant: "Osteria Haven Modena Italy.",
  },
  {
    image: "/images/Oliver_Zestington.svg",
    chefName: "Oliver Zestington",
    restaurant: "Culinary Arts Academy Texas(USA)",
  },
  {
    image: "/images/Sasha_Monroe.svg",
    chefName: "Sasha Monroe",
    restaurant: "Harbor Height Resort USA",
  },
  {
    image: "/images/Dante_Savory.svg",
    chefName: "Dante Savory",
    restaurant: "Serene Springs Oasis Ontario",
  },
  {
    image: "/images/Gustavo_Spicefield.svg",
    chefName: "Gustavo Spicefield",
    restaurant: "Institute of Culinary Excellence  Bavaria, Germany.",
  },
  {
    image: "/images/Thomas_Keller.svg",
    chefName: "Thomas Keller",
    restaurant: "Fusion Flavors Restaurant Scotland",
  },
  {
    image: "/images/Isabella_Savory.svg",
    chefName: "Isabella Savory",
    restaurant: "BellaSpice Restaurant and Lounge Queesland Australia",
  },
  {
    image: "/images/Mia_Flambe.svg",
    chefName: "Mia Flambe",
    restaurant: "Culinary Mastery School Punjab India ",
  },
];
const cardContainer = document.getElementById("top_chefs");

function displayCards() {
  cardContainer.innerHTML = cardsData.map((cardsData) => {
    return `
        <div class="chef my-4 ">
				<img src="${cardsData.image}" alt="Gordon_Ramsay" />
				<a href="${cardsData.link}" class="my-2 text-decoration-none text-black">${cardsData.chefName}</a>
				<p>${cardsData.restaurant}</p>
				<a	href="#" class="save-btn text-white text-decoration-none py-1 px-3 fw-bold text-dark rounded-pill"	>View Profile</a>
			</div>
    `;
  });
}
console.log(displayCards(cardsData));
