
const productList = [];
const productListContainer = document.getElementById('productListContainer');
const productCardFragment = document.createDocumentFragment();

productList.push([
  {
	name: 'Bicicleta',
	price: 500,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
	},
	{
	name: 'Pantalla',
	price: 200,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
	},
	{
	name: 'Computador',
	price: 600,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
	},
	{
	name: 'Cama',
	price: 400,
	image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
	}
]);


function createProductCard(productList) {

	productList.forEach(product => {

	const productCard = document.createElement('div');
	productCard.classList.add('product__card');

	const productCardImg = document.createElement('img');
	productCardImg.setAttribute('src', product.image);
	productCardImg.setAttribute('alt', product.name + ' foto');

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

	productFigure.appendChild(productFigureImg);
	productInfoDiv.appendChild(productInfoPrice, productInfoName);
	productInfo.appendChild(productInfoDiv);
	productCard.appendChild(productCardImg, productInfo, productFigure);

	productCardFragment.appendChild(productCard);

});

productListContainer.append(productCardFragment);

}

createProductCard(productList);
console.log(productList);

// <div class="product-card">
//         <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">

//         <div class="product-info">
//           <div>
//             <p>$120,00</p>
//             <p>Bike</p>
//           </div>

//           <figure>
//             <img src="./icons/bt_add_to_cart.svg" alt="">
//           </figure>
//         </div>
//       </div>