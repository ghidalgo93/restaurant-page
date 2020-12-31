import contentModule from "./contentModule";

const pageInit = (() => {
  const app = document.getElementById("app");
  const imgUrl =
    "https://savorjapan.com/gg/content_image/t0117_001_20180822085728.jpg";

  const init = () => {
    // header
    const header = document.createElement("header");
    const navBar = document.createElement("nav");
    const name = document.createElement("h1");
    name.textContent = "House of Ji";
    name.id = "start-tab";
    const tabs = document.createElement("ul");
    tabs.classList.add("tabs");
    const aboutTab = document.createElement("li");
    aboutTab.id = "about-tab";
    aboutTab.textContent = "About";
    const menuTab = document.createElement("li");
    menuTab.id = "menu-tab";
    menuTab.textContent = "Menu";
    const contactTab = document.createElement("li");
    contactTab.id = "contact-tab";
    contactTab.textContent = "Contact";
    tabs.appendChild(aboutTab);
    tabs.appendChild(menuTab);
    tabs.appendChild(contactTab);
    navBar.appendChild(name);
    navBar.appendChild(tabs);
    header.appendChild(navBar);
    // content window
    const content = document.createElement("div");
    content.id = "content";
    // app
    app.appendChild(header);
    app.appendChild(content);
  };

  return { init };
})();

export default pageInit;
