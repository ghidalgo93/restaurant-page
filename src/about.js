const about = (() => {
  const contentModule = document.createElement("div");

  const addContent = () => {
    const menuList = document.createElement("ul");
    const sashimi = document.createElement("li");
    sashimi.textContent = "Sashimi";
    const rolls = document.createElement("li");
    rolls.textContent = "rolls";
    menuList.appendChild(sashimi);
    menuList.appendChild(rolls);
    contentModule.appendChild(menuList);
  };

  const load = (parentNode) => {
    addContent();
    contentModule.style.display = "none";
    parentNode.appendChild(contentModule);
  };
  const show = () => {
    contentModule.style.display = "block";
  };
  return { load, show };
})();

export default about;
