const menu = document.querySelector(".menu");
const menuList = document.getElementById("mobile_menu");
const subMenu = document.querySelector(".sub_menu");
const subMenuList = document.getElementById("sub_nav_mobile_menu");

let menuDisplay = false;

function toggleMenu() {
	if (menuDisplay == false) {
		menuList.style.right = "0";
		menuList.style.display = "block";
		menuDisplay = true;
	} else {
		menuList.style.right = "-50%";
		menuList.style.display = "none";
		menuDisplay = false;
	}
}

let subMenuIcon = false;
function toggleSubMenu() {
	if (subMenuIcon == false) {
		subMenuList.style.left = "0";
		subMenuList.style.display = "block";
		subMenuIcon = true;
	} else {
		subMenuList.style.left = "-50%";
		subMenuList.style.display = "none";
		subMenuIcon = false;
	}
}

menu.addEventListener("click", toggleMenu);
subMenu.addEventListener("click", toggleSubMenu);

// const ingredients = ["Butter", "Flour", "Parsley", "Pumpkin", "Fish", "Milk",''];
// let list = document.querySelector(".kitchen_finds");

// let buttons = ingredients.forEach((ingredient) => {
// 	list.innerHTML += `<button type="button">${ingredient}</button>`;
// });
