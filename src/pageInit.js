const pageInit = (() => {
  const app = document.getElementById("app");
  const imgUrl =
    "https://savorjapan.com/gg/content_image/t0117_001_20180822085728.jpg";

  const load = () => {
    // header
    const header = document.createElement("header");
    const navBar = document.createElement("nav");
    const name = document.createElement("h1");
    name.textContent = "House of Ji";
    const tabs = document.createElement("ul");
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
    // init content
    const initContent = document.createElement("div");
    initContent.id = "init-content";
    const image = document.createElement("img");
    image.src = imgUrl;
    image.alt = "japanese tea house";
    const blurb = document.createElement("p");
    blurb.textContent = "Ichi-go Ichi-e";
    initContent.appendChild(image);
    initContent.appendChild(blurb);
    content.appendChild(initContent);
    // app
    app.appendChild(header);
    app.appendChild(content);
  };
  return { load };
})();

export default pageInit;
