import {pageInit, contents} from './pageInit';
import aboutTab from './aboutTab';
import menuTab from './menuTab';
import contactTab from './contactTab';

const contentDiv = document.querySelector('#content');
  
pageInit(contents);
const about = aboutTab(contentDiv);
const menu = menuTab(contentDiv);
const contact = contactTab(contentDiv);

//add classes, probably a better place for this
const tabBtns = document.querySelectorAll('button');
tabBtns.forEach(btn => btn.classList.add('tabBtn'));


function switchTab(event) {
	//get all elements with class='tabContent' and hide them
	const tabContent = document.querySelectorAll('.tabContent');
	tabContent.forEach(tab => tab.style.display = 'none');

	//get all elements with class='tabBtn' and remove the class 'active'
	const tabBtns = document.querySelectorAll('.tabBtn');
	tabBtns.forEach(btn => btn.className.replace(' active', ''));
	
	//show the current tab, and add the 'active' class to the button that opened it
	let tab = document.querySelector(`#${event.target.id}Tab`);
	tab.style.display = 'block';
	event.currentTarget.className += ' active';
}


tabBtns.forEach(btn => btn.addEventListener('click', switchTab, false));
