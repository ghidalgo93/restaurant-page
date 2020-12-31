const contentModule = (() => {
  const module = document.createElement("div");

  const load = (addContentFunc, parentNode) => {
    addContentFunc();
    module.style.display = "none";
    parentNode.appendChild(module);
  };
  const show = () => {
    module.style.display = "block";
  };
  return { load, show };
})();

export default contentModule;
