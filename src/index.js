import "./styles.css";
import pageInit from "./pageInit";
import about from "./about";
import menu from "./menu";
import contact from "./contact";
import helpers from "./helpers";

pageInit.load();

const content = document.getElementById("content");
const aboutTab = document.getElementById("about-tab");
const menuTab = document.getElementById("menu-tab");
const contactTab = document.getElementById("contact-tab");

about.load(content);
menu.load();
contact.load();

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
    hideChildren(content);
    menu.show();
  },
  false
);
contactTab.addEventListener(
  "click",
  () => {
    hideChildren(content);
    contact.show();
  },
  false
);
