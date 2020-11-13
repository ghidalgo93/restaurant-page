function contactTab(parentElem) {
		const contactDiv = document.createElement('div');
		contactDiv.innerHTML = 'Addy: 123 Crystal St, Boulder, CO, 80302 <br> Phone: noneya <br> email: crystalteasoak@naropa.edu'; 
		contactDiv.id = 'contactTab';
		contactDiv.classList.add('tabContent');
		contactDiv.style.display = 'none';
		parentElem.appendChild(contactDiv);
		return contactDiv;
}

export default contactTab

