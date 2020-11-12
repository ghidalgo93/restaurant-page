function aboutTab() {
	const content = document.querySelector('#content'); 
	const aboutDiv = document.createElement('div');
	aboutDiv.innerHTML = 'about stuff'; 
	content.appendChild(aboutDiv);
	return content;
}

export default aboutTab
