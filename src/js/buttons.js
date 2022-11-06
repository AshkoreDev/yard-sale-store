const userBtn = document.getElementById('userBtn');
const userMenu = document.getElementById('userMenu');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const shoppingCartBtn = document.getElementById('shoppingCartBtn');
const shoppingCart = document.getElementById('shoppingCart');
const productDetailBtn = document.getElementById('productDetailBtn');
const productDetail = document.getElementById('productDetail');
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

productDetailBtn.addEventListener('click', () => {

	shoppingCart.classList.add('inactive');
	mobileMenu.classList.add('inactive');
	userMenu.classList.add('inactive');
	productDetail.classList.remove('inactive');
});

productDetailCloseBtn.addEventListener('click', () => {

	productDetail.classList.add('inactive');
});