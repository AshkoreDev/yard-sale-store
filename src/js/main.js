const userBtn = document.getElementById('userBtn');
const userMenu = document.getElementById('userMenu');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const shoppingCartBtn = document.getElementById('shoppingCartBtn');
const shoppingCart = document.getElementById('shoppingCart');


/*FUNCTIONS*/



userBtn.addEventListener('click', () => {

	userMenu.classList.toggle('inactive');
});

mobileMenuBtn.addEventListener('click', () => {

	mobileMenu.classList.toggle('inactive');
});

shoppingCartBtn.addEventListener('click', () => {

	shoppingCart.classList.toggle('inactive');
});