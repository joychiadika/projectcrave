const cardsData = [
    {
        image: "/images/Sticky Toffee Ice Cream.svg",
        dishName: "Sticky Toffee Ice Cream",
        dishIngredient: "Heavy Cream, Whole milk, Sugar, Dates, Toffe Saucen, Vanilla extract",
        instruction: "Read Instruction ",
        startRating: "/images/Star.svg",
        saveIcon: "/images/Save.svg",
        buttonText: "Save",
        link: "/html/jollof_recipe.html",
    },
    {
        image: "/images/Poached Pear Salad.svg",
        dishName: "Poached Pear Salad",
        dishIngredient: "Fresh pears, Red wine, Mixed greens, Goat cheese, Dijon Mustard",
        instruction: "Read Instruction ",
        startRating: "/images/Star.svg",
        saveIcon: "/images/Save.svg",
        buttonText: "Save",
    },
    {
        image: "/images/Stuffed Jacket Potato.svg",
        dishName: "Stuffed Jacket Potato",
        dishIngredient: "Baking potatoes, Butter, Cooked baconbits, Sour cream, Shredded cheese",
        instruction: "Read Instruction ",
        startRating: "/images/Star.svg",
        saveIcon: "/images/Save.svg",
        buttonText: "Save",
    },
    {
        image: "/images/Roasted Turkey with Sauce.svg",
        dishName: "Roasted Turkey with Sauce",
        dishIngredient: "Whole turkey, Olive oil, Spices, Turkeybroth, Flour, Salt and Pepper",
        instruction: "Read Instruction ",
        startRating: "/images/Star.svg",
        saveIcon: "/images/Save.svg",
        buttonText: "Save",
    },
    {
        image: "/images/Chicken and Cheese Salad.svg",
        dishName: "Chicken and Cheese Salad",
        dishIngredient: "Roasted or grilled chicken, Avocado, Mixed green salad, Cherry tomatoes",
        instruction: "Read Instruction ",
        startRating: "/images/Star.svg",
        saveIcon: "/images/Save.svg",
        buttonText: "Save",
    },
    {
        image: "/images/Prawn Pie.svg",
        dishName: "Prawn Pie",
        dishIngredient: "Prawn, Flour, Heavy Cream, Butter, Fresh Parsley, Pie crust, Garlic",
        instruction: "Read Instruction ",
        startRating: "/images/Star.svg",
        saveIcon: "/images/Save.svg",
        buttonText: "Save",
    },
    {
        image: "/images/Glazed Ham.svg",
        dishName: "Glazed Ham",
        dishIngredient: "Brown Sugar,Cooked ham, Honey, Cloves, Dijon Mustard, Cider vinegar",
        instruction: "Read Instruction ",
        startRating: "/images/Star.svg",
        saveIcon: "/images/Save.svg",
        buttonText: "Save",
    },
    {
        image: "/images/Smoked Kidney Beans Salad.svg",
        dishName: "Smoked Kidney Beans Salad",
        dishIngredient: "Canned kidney beans, Corn Kernel, olive oil, Fresh Cilantro, Bell pepper",
        instruction: "Read Instruction ",
        startRating: "/images/Star.svg",
        saveIcon: "/images/Save.svg",
        buttonText: "Save",
    },
    {
        image: "/images/Baked Vegetables.svg",
        dishName: "Baked Vegetables",
        dishIngredient: "Assorted vegetables, Olive oil, Garlic, Fresh herbs, Salt and pepper",
        instruction: "Read Instruction ",
        startRating: "/images/Star.svg",
        saveIcon: "/images/Save.svg",
        buttonText: "Save",
    },
    {
        image: "/images/Dates wrapped in Bacon.svg",
        dishName: "Dates wrapped in Bacon",
        dishIngredient: "Dates, Bacon strips, Almonds, Toothpicks",
        instruction: "Read Instruction ",
        startRating: "/images/Star.svg",
        saveIcon: "/images/Save.svg",
        buttonText: "Save",
    },
    {
        image: "/images/Fish Mayonnaise.svg",
        dishName: "Fish Mayonnaise",
        dishIngredient: "Cooked and flaked fish, Mayonnaise, Dijon mustard, Lemon juice, Salt",
        instruction: "Read Instruction ",
        startRating: "/images/Star.svg",
        saveIcon: "/images/Save.svg",
        buttonText: "Save",
    },
    {
        image: "/images/Grilled Lobster.svg",
        dishName: "Grilled Lobster",
        dishIngredient: "Lobster tail, Butter, Garlic, Lemon juice, Salt and pepper",
        instruction: "Read Instruction ",
        startRating: "/images/Star.svg",
        saveIcon: "/images/Save.svg",
        buttonText: "Save",
    },
    {
        image: "/images/Sausage and Potato Casserole.svg",
        dishName: "Sausage and Potato Casserole",
        dishIngredient: "Sausage,Potatoes, Grated cheese, Bell pepper, Olive oil, Vegetable broth",
        instruction: "Read Instruction ",
        startRating: "/images/Star.svg",
        saveIcon: "/images/Save.svg",
        buttonText: "Save",
    },
    {
        image: "/images/Hot Cross Buns.svg",
        dishName: "Hot Cross Buns",
        dishIngredient: "Flour, Dry yeast, Milk, Sugar, Eggs, Salt, Unsalted butter, Currants, Cinnamon",
        instruction: "Read Instruction ",
        startRating: "/images/Star.svg",
        saveIcon: "/images/Save.svg",
        buttonText: "Save",
    },
    {
        image: "/images/Batter Fish.svg",
        dishName: "Batter Fish",
        dishIngredient: "All purpose flour, Fish fillets. Salt, Cold water, Baking powder",
        instruction: "Read Instruction ",
        startRating: "/images/Star.svg",
        saveIcon: "/images/Save.svg",
        buttonText: "Save",
    },
    {
        image: "/images/Yorkshire Lamb Patties.svg",
        dishName: "Yorkshire Lamb Patties",
        dishIngredient: "Ground lamb, Bread crumb, Fresh mint Egg, Worcestershire sauce, Garlic",
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
						<img src="${cardsData.image}" alt="" class="mb-3">
						<a href="${cardsData.link}" class=" fs-5 text-decoration-none dishname text-dark">${cardsData.dishName}</a>
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
