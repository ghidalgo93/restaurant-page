function aboutTab(parentElem) {
	const aboutDiv = document.createElement('div');
	aboutDiv.innerHTML = 'Here at the Dushanbe tea house, we pride ourselves on the high quality of our tea and the incredible tea house - build in a far away land. If you are into the woo-woo Boulder shit, come check us out. We are 100% sure you would love it, and if you want we can even take some crystals we purchased across the street and soak em in your tea to give you extra powers or some shit. We will even be happy to tell you them have good juju or were left out on a full moon or some shit. For everyone else, we have high quality tea that is just plain tasty!'; 
	aboutDiv.id = 'aboutTab'; 
	aboutDiv.classList.add('tabContent');
	parentElem.appendChild(aboutDiv);
	return aboutDiv;
}

export default aboutTab
