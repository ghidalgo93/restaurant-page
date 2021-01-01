import contentModule from "./contentModule";
import sashimi from "./menuItems/sashimi";
import nigiri from "./menuItems/nigiri";
import rolls from "./menuItems/rolls";

const menu = (() => {
  const prototype = contentModule();
  const { contentDiv } = prototype;

  const createContent = () => {
    const menuContent = document.createElement("div");
    menuContent.id = "menu-content";

    const menuList = document.createElement("ul");
    menuList.id = "menu-list";
    menuList.classList.add("tabs");
    const sashimiTab = document.createElement("li");
    sashimiTab.textContent = "Sashimi";
    const rollsTab = document.createElement("li");
    rollsTab.textContent = "Rolls";
    const nigiriTab = document.createElement("li");
    nigiriTab.textContent = "Nigiri";
    menuList.appendChild(sashimiTab);
    menuList.appendChild(nigiriTab);
    menuList.appendChild(rollsTab);

    const menuWindow = document.createElement("div");
    menuWindow.id = "menu-window";

    const sashimiContent = sashimi();
    sashimiContent.loadInto(menuWindow);
    const nigiriContent = nigiri();
    nigiriContent.loadInto(menuWindow);
    const rollsContent = rolls();
    rollsContent.loadInto(menuWindow);

    sashimiContent.show(menuWindow);

    sashimiTab.onmouseenter = () => sashimiContent.show(menuWindow);
    nigiriTab.onmouseenter = () => nigiriContent.show(menuWindow);
    rollsTab.onmouseenter = () => rollsContent.show(menuWindow);

    menuContent.appendChild(menuList);
    menuContent.appendChild(menuWindow);
    return menuContent;
  };

  const addContent = (() => {
    contentDiv.appendChild(createContent());
  })();

  return { ...prototype };
})();

export default menu;
