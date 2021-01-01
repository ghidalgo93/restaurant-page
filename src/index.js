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
const allTabs = document.querySelectorAll(".tab");

// load all content
start.loadInto(content);
about.loadInto(content);
menu.loadInto(content);
contact.loadInto(content);
const orderBtn = document.getElementById("order-btn");

// show start content
start.show(content);

// events
startTab.onclick = () => {
  allTabs.forEach((tab) => tab.classList.remove("tabSelect"));
  start.show(content);
};
aboutTab.onclick = (e) => {
  allTabs.forEach((tab) => tab.classList.remove("tabSelect"));
  e.target.classList.add("tabSelect");
  about.show(content);
};
menuTab.onclick = (e) => {
  allTabs.forEach((tab) => tab.classList.remove("tabSelect"));
  e.target.classList.add("tabSelect");
  menu.show(content);
};
contactTab.onclick = (e) => {
  allTabs.forEach((tab) => tab.classList.remove("tabSelect"));
  e.target.classList.add("tabSelect");
  contact.show(content);
};
orderBtn.onclick = () => {
  allTabs.forEach((tab) => tab.classList.remove("tabSelect"));
  menuTab.classList.add("tabSelect");
  menu.show(content);
};
