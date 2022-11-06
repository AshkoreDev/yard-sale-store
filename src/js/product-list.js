
const productList = [];
const productCardFragment = document.createDocumentFragment();
const productListContainer = document.getElementById('productListContainer');

const productDetail = document.getElementById('productDetail');

productList.push({
	name: 'Bicicleta',
	price: 500,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({ 
  name: 'Pantalla',
	price: 200,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({ 
  name: 'Cama',
	price: 400,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({ 
  name: 'Computador',
	price: 600,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
	name: 'Celular',
	price: 200,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


function openProductDetail() {
	shoppingCart.classList.add('inactive');
	mobileMenu.classList.add('inactive');
	userMenu.classList.add('inactive');
	productDetail.classList.remove('inactive');
}

function renderProducts(arr) {
	productList.forEach(product => {

		const productCard = document.createElement('div');
		productCard.classList.add('product__card');

		const productCardImg = document.createElement('img');
		productCardImg.setAttribute('src', product.image);
		productCardImg.setAttribute('alt', product.name + ' foto');
		productCardImg.addEventListener('click', openProductDetail);

		const productInfo = document.createElement('div');
		productInfo.classList.add('product__info');

		const productInfoDiv = document.createElement('div');

		const productInfoPrice = document.createElement('p');
		productInfoPrice.innerText = '$' + product.price;

		const productInfoName = document.createElement('p');
		productInfoName.innerText = product.name;

		const productFigure = document.createElement('figure');

		const productFigureImg = document.createElement('img');
		productFigureImg.setAttribute('src', './../images/bt_add_to_cart.svg');
		productFigureImg.setAttribute('alt', 'Carrito de compras logo');

		productFigure.append(productFigureImg);
		productInfoDiv.append(productInfoPrice, productInfoName);
		productInfo.append(productInfoDiv, productFigure);
		productCard.append(productCardImg, productInfo);

		productCardFragment.append(productCard);

	});

	productListContainer.appendChild(productCardFragment);
}

renderProducts(productList);