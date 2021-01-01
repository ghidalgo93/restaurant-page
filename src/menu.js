import contentModule from "./contentModule";
import ramen from "./menuItems/ramen";
import nigiri from "./menuItems/nigiri";
import rolls from "./menuItems/rolls";

const menu = (() => {
  const prototype = contentModule();
  const { contentDiv } = prototype;

  const addContent = (() => {
    const menuList = document.createElement("ul");
    menuList.id = "menu-tabs";
    menuList.classList.add("tabs");
    menuList.classList.add("tabHeader");
    const ramenTab = document.createElement("li");
    ramenTab.textContent = "Ramen";
    const rollsTab = document.createElement("li");
    rollsTab.textContent = "Rolls";
    const nigiriTab = document.createElement("li");
    nigiriTab.textContent = "Nigiri";
    menuList.appendChild(ramenTab);
    menuList.appendChild(nigiriTab);
    menuList.appendChild(rollsTab);

    const splash = document.createElement("div");
    splash.classList.add("splash");

    const ramenContent = ramen();
    ramenContent.loadInto(splash);
    const nigiriContent = nigiri();
    nigiriContent.loadInto(splash);
    const rollsContent = rolls();
    rollsContent.loadInto(splash);

    ramenContent.show(splash);

    ramenTab.onclick = () => ramenContent.show(splash);
    nigiriTab.onclick = () => nigiriContent.show(splash);
    rollsTab.onclick = () => rollsContent.show(splash);

    contentDiv.appendChild(menuList);
    contentDiv.appendChild(splash);
  })();

  return { ...prototype };
})();

export default menu;
