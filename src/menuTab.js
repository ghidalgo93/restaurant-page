function menuTab(parentElem) {
	const menuDiv = document.createElement('div');
	menuDiv.innerHTML = 'Tea: $6.00<br> Cookies: $2.00<br> Coffee: $3.00<br> Crystal soak: priceless.'; 
	menuDiv.id = 'menuTab';
	menuDiv.style.display = 'none';
	menuDiv.classList.add('tabContent');
	parentElem.appendChild(menuDiv);
	return menuDiv;
}

export default menuTab

