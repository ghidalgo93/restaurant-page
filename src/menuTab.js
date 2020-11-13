function menuTab(parentElem) {
	const menuDiv = document.createElement('div');
	menuDiv.innerHTML = 'Tea: $6.00, Cookies: $2.00, Crystal soak: priceless.'; 
	menuDiv.id = 'menuTab';
	menuDiv.style.display = 'none';
	menuDiv.classList.add('tabContent');
	parentElem.appendChild(menuDiv);
	return menuDiv;
}

export default menuTab

