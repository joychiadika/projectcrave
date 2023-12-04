const cardsData = [
	{
		image: "/images/Gordon_Ramsay.svg",
		chefName: "Gordon Ramsay",
		restaurant: "GR Restaurants San Frascisco.",
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
];

const cardContainer = document.getElementById("top_chefs");

function displayCards() {
	cardContainer.innerHTML = cardsData.map((cardsData) => {
		return `
            <div class="chef my-4 ">
				<img src="${cardsData.image}" alt="Gordon_Ramsay" />
				<h5 class="my-2">${cardsData.chefName}</h5>
				<p>${cardsData.restaurant}</p>
				<a	href="#" class="save-btn text-decoration-none py-1 px-3 fw-bold text-dark rounded-pill"	>View Profile</a>
			</div>
    `;
	});
}


// Initial display of all cards
console.log(displayCards(cardsData));
