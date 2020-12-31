import "./styles.css";
import pageInit from "./pageInit";
import start from "./start";
import about from "./about";
import menu from "./menu";
import contact from "./contact";

pageInit.init();

// page elems
const content = document.getElementById("content");
const startTab = document.getElementById("start-tab");
const aboutTab = document.getElementById("about-tab");
const menuTab = document.getElementById("menu-tab");
const contactTab = document.getElementById("contact-tab");

// load all content
start.loadInto(content);
about.loadInto(content);
menu.loadInto(content);
contact.loadInto(content);

// show start content
start.show(content);

// events
startTab.onclick = () => start.show(content);
aboutTab.onclick = () => about.show(content);
menuTab.onclick = () => menu.show(content);
contactTab.onclick = () => contact.show(content);
