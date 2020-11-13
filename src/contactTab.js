function contactTab(parentElem) {
		const contactDiv = document.createElement('div');
		contactDiv.innerHTML = 'Address: 1234 Crystal St, Leadville, CO, 80888<br> Phone: 123456790<br> email: crystalteasoak@coffee.tea'; 
		contactDiv.id = 'contactTab';
		contactDiv.classList.add('tabContent');
		contactDiv.style.display = 'none';
		parentElem.appendChild(contactDiv);
		return contactDiv;
}

export default contactTab

