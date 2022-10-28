const userBtn = document.getElementById('userBtn');
const userMenu = document.getElementById('userMenu');

/*FUNCTIONS*/
function toggleUserMenu() {
	
	userMenu.classList.toggle('inactive');
}



userBtn.addEventListener('click', toggleUserMenu);