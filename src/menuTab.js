function menuTab() {
	const content = document.querySelector('#content'); 
	const menuDiv = document.createElement('div');
	menuDiv.innerHTML = 'menu stuff'; 
	content.appendChild(menuDiv);
	return content;
}

export default menuTab

