const userBtn = document.getElementById('userBtn');
const userMenu = document.getElementById('userMenu');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const shoppingCartBtn = document.getElementById('shoppingCartBtn');
const shoppingCart = document.getElementById('shoppingCart');
const productDetailCloseBtn = document.getElementById('productDetailCloseBtn');


userBtn.addEventListener('click', () => {

	userMenu.classList.toggle('inactive');
	shoppingCart.classList.add('inactive');
	productDetail.classList.add('inactive');
});

mobileMenuBtn.addEventListener('click', () => {

	mobileMenu.classList.toggle('inactive');
	shoppingCart.classList.add('inactive');
	productDetail.classList.add('inactive');
});

shoppingCartBtn.addEventListener('click', () => {

	shoppingCart.classList.toggle('inactive');
	mobileMenu.classList.add('inactive');
	userMenu.classList.add('inactive');
	productDetail.classList.add('inactive');
});

productDetailCloseBtn.addEventListener('click', () => {

	productDetail.classList.add('inactive');
});