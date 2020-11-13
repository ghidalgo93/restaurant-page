function menuTab() {
	const content = document.querySelector('#content'); 
	const menuDiv = document.createElement('div');
	menuDiv.innerHTML = 'weird stuff'; 
	content.appendChild(menuDiv);
	return content;
}

export default menuTab

