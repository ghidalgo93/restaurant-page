import contentModule from "./contentModule";

const menu = (() => {
  const prototype = contentModule();
  const { contentDiv } = prototype;

  const createContent = () => {
    const menuList = document.createElement("ul");
    menuList.classList.add("tabs");
    const sashimi = document.createElement("li");
    sashimi.textContent = "Sashimi";
    const rolls = document.createElement("li");
    rolls.textContent = "rolls";
    menuList.appendChild(sashimi);
    menuList.appendChild(rolls);
    return menuList;
  };

  const addContent = (() => {
    contentDiv.appendChild(createContent());
  })();

  return { ...prototype };
})();

export default menu;
