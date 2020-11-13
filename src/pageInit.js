let contents= [];

//image
let img = document.createElement('img');
img.src = 'https://www.uncovercolorado.com/wp-content/uploads/2020/03/boulder_tea_house_boulder_main-e1583212520872-1536x768.jpg'; 
img.alt = 'tea house';
contents.push(img);

//welcome line
let headline = document.createElement('h1');
headline.innerHTML = 'Welcome to the Dushanbe Teahouse';
contents.push(headline);

//tab head 
let tabHead = document.createElement('div'); 
//tab btns
let aboutBtn = document.createElement('button');
aboutBtn.innerHTML = 'About'; 
aboutBtn.id = 'about';
tabHead.appendChild(aboutBtn);
let menuBtn = document.createElement('button');
menuBtn.innerHTML = 'Menu'; 
menuBtn.id = 'menu';
tabHead.appendChild(menuBtn);
let contactBtn = document.createElement('button');
contactBtn.innerHTML = 'Contact'; 
contactBtn.id = 'contact';
tabHead.appendChild(contactBtn);

contents.push(tabHead);


//function to take in 
function pageInit(contentList) {
		const content = document.querySelector('#content');
		contentList.forEach(element => content.appendChild(element));
		return content;
}

export { 
	contents, 
	pageInit
}
