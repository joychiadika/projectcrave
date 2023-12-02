const cardsData = [
	{
		image: "/images/jollof.svg",
		dishName: "Jollof Rice with Stew",
		dishIngredient: "Rice, Tomatoes, Pepper, Seasoning, Onions",
		instruction: "Read Instruction ",
		startRating: "/images/Star.svg",
		saveIcon: "/images/Save.svg",
		buttonText: "Save",
		link: "/html/jollof_recipe.html",
	},
	{
		image: "/images/fish_calulu.svg",
		dishName: "Fish Calulu",
		dishIngredient: "Fish, Vegetables, Palm oil, Hot pepperSeasoning, Onion",
		instruction: "Read Instruction ",
		startRating: "/images/Star.svg",
		saveIcon: "/images/Save.svg",
		buttonText: "Save",
	},
	{
		image: "/images/EriteaFit-Fit.svg",
		dishName: "Eritea Fit-Fit",
		dishIngredient:
			"Berbere Spices, Olive oil, Green chili, pepper, Tomatoes, Onion",
		instruction: "Read Instruction ",
		startRating: "/images/Star.svg",
		saveIcon: "/images/Save.svg",
		buttonText: "Save",
	},
	{
		image: "/images/Couscous.svg",
		dishName: "Couscous",
		dishIngredient:
			"Couscous, Water or broth, Salt, Olive oil or butter, Seasoning",
		instruction: "Read Instruction ",
		startRating: "/images/Star.svg",
		saveIcon: "/images/Save.svg",
		buttonText: "Save",
	},
	{
		image: "/images/IsiEwu.svg",
		dishName: "Isi Ewu",
		dishIngredient:
			"Goat’s Head, Palm oil, Ground Crayfish, Ground pepper, Utazi leave, Seasoning",
		instruction: "Read Instruction ",
		startRating: "/images/Star.svg",
		saveIcon: "/images/Save.svg",
		buttonText: "Save",
	},
	{
		image: "/images/KamouniaandCuminStew.svg",
		dishName: "Kamounia and Cumin Stew",
		dishIngredient:
			"Beef, Coriander, Lamb, Black Pepper, Paprika, Cumin, Cinnamon, Garlic",
		instruction: "Read Instruction ",
		startRating: "/images/Star.svg",
		saveIcon: "/images/Save.svg",
		buttonText: "Save",
	},
	{
		image: "/images/BeefMatoke.svg",
		dishName: "Beef Matoke",
		dishIngredient:
			"Beef, Cooking oil, Cumin, Tomatoes Red bell pepper, Coriander, Spices",
		instruction: "Read Instruction ",
		startRating: "/images/Star.svg",
		saveIcon: "/images/Save.svg",
		buttonText: "Save",
	},
	{
		image: "/images/AchuandYellowSoup.svg",
		dishName: "Achu and Yellow Soup",
		dishIngredient:
			"Cocoyam, Palm oil, Yellow pepper, Salt, Crayfish, Seasoning, Meat, Spinach",
		instruction: "Read Instruction ",
		startRating: "/images/Star.svg",
		saveIcon: "/images/Save.svg",
		buttonText: "Save",
	},
	{
		image: "/images/Ugali.svg",
		dishName: "Ugali",
		dishIngredient:
			"Maize flour, Water, Lemon, Tomatoes, Fish, Vegetables, Seasoning",
		instruction: "Read Instruction ",
		startRating: "/images/Star.svg",
		saveIcon: "/images/Save.svg",
		buttonText: "Save",
	},
	{
		image: "/images/FulMedamesShamandFul.svg",
		dishName: "Ful Medames Shamand Ful",
		dishIngredient:
			"Fava beans, Lemon juice, Coriander, Pepper, Salt, Cumin, Spices",
		instruction: "Read Instruction ",
		startRating: "/images/Star.svg",
		saveIcon: "/images/Save.svg",
		buttonText: "Save",
	},
	{
		image: "/images/Placali.svg",
		dishName: "Placali",
		dishIngredient:
			"Cassava, Banana leave or aluminium foil, Oil, Hot water, Pepper, Meat",
		instruction: "Read Instruction ",
		startRating: "/images/Star.svg",
		saveIcon: "/images/Save.svg",
		buttonText: "Save",
	},
	{
		image: "/images/MatbuchaSalad.svg",
		dishName: "Jollof Rice with StewMatbucha Salad",
		dishIngredient:
			"Tomatoes, Cayenne pepper, olive oil, Black and red bell pepper, Cilantro",
		instruction: "Read Instruction ",
		startRating: "/images/Star.svg",
		saveIcon: "/images/Save.svg",
		buttonText: "Save",
	},
	{
		image: "/images/AmalaGbegiriEwedu&Stew.svg",
		dishName: "Amala, Gbegiri ,Ewedu & Stew",
		dishIngredient:
			"Yam flour, Beans, Palm oil, Pepper, Salt, Ewedu leaves, Meat, Tomatoes, Spices",
		instruction: "Read Instruction ",
		startRating: "/images/Star.svg",
		saveIcon: "/images/Save.svg",
		buttonText: "Save",
	},
	{
		image: "/images/Potbrood.svg",
		dishName: "Potbrood",
		dishIngredient:
			"Bread flour, Dry yeast, Vegetable oil, Salt, Sugar, Lukewarm Water",
		instruction: "Read Instruction ",
		startRating: "/images/Star.svg",
		saveIcon: "/images/Save.svg",
		buttonText: "Save",
	},
	{
		image: "/images/Samosa.svg",
		dishName: "Samosa",
		dishIngredient:
			"All purpose flour, vegetable oil, Water, Salt, Cumin seed, Coriander, Potatoes",
		instruction: "Read Instruction ",
		startRating: "/images/Star.svg",
		saveIcon: "/images/Save.svg",
		buttonText: "Save",
	},
	{
		image: "/images/YassawithCollardStew&Rice.svg",
		dishName: "Yassa with Collard Stew & Rice",
		dishIngredient:
			"Rice, Chicken pieces, Lemon juice, White vinegar, Dijon mustard, Spices",
		instruction: "Read Instruction ",
		startRating: "/images/Star.svg",
		saveIcon: "/images/Save.svg",
		buttonText: "Save",
	},
];

const cardContainer = document.getElementById("cardContainer");
const searchInput = document.getElementById("searchInput");

function displayCards(cards) {
	cardContainer.innerHTML = cardsData.map((cardsData) => {
		return `
            <div class="card mb-4 pb-5 border-0">
						<img src="${cardsData.image}" alt="">
						<a href="${cardsData.link}" class="my-2 fs-5 text-decoration-none text-dark">${cardsData.dishName}</a>
						<p>${cardsData.dishIngredient}</p>
						<p>${cardsData.instruction}</p>
						<div class="d-flex align-items-center gap-1 pb-2">
							<img src="${cardsData.startRating}" alt="star_icon">
							<img src="${cardsData.startRating}" alt="star_icon">
							<img src="${cardsData.startRating}" alt="star_icon">
							<img src="${cardsData.startRating}" alt="star_icon">
							<img src="${cardsData.startRating}" alt="star_icon">
							<span>(2)</span>
						</div>
						<a href="#" class="text-decoration-none text-dark save_btn"><img src="${cardsData.saveIcon}" alt="save_icon">  ${cardsData.buttonText}</a>
					</div>
    `;
	});
}

function filterCards(searchTerm) {
	const filteredCards = cardsData.filter((card) =>
		card.text.toLowerCase().includes(searchTerm.toLowerCase())
	);
	displayCards(filteredCards);
}

searchInput.addEventListener("input", function (event) {
	filterCards(event.target.value);
});

// Initial display of all cards
console.log(displayCards(cardsData));
