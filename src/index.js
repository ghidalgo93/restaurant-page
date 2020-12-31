import "./styles.css";
import pageInit from "./pageInit";
import start from "./start";
import about from "./about";
import menu from "./menu";
import contact from "./contact";
import helpers from "./helpers";

pageInit.init();

const content = document.getElementById("content");
const startTab = document.getElementById("start-tab");
const aboutTab = document.getElementById("about-tab");
const menuTab = document.getElementById("menu-tab");
const contactTab = document.getElementById("contact-tab");

start.loadInto(content);
about.loadInto(content);
menu.loadInto(content);
contact.loadInto(content);

start.show();

startTab.addEventListener(
  "click",
  () => {
    helpers.hideChildren(content);
    start.show();
  },
  false
);
aboutTab.addEventListener(
  "click",
  () => {
    helpers.hideChildren(content);
    about.show();
  },
  false
);
menuTab.addEventListener(
  "click",
  () => {
    helpers.hideChildren(content);
    menu.show();
  },
  false
);
contactTab.addEventListener(
  "click",
  () => {
    helpers.hideChildren(content);
    contact.show();
  },
  false
);
