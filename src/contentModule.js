const contentModule = () => {
  const contentDiv = document.createElement("div");

  const loadInto = (parentNode) => {
    contentDiv.style.display = "none";
    parentNode.appendChild(contentDiv);
  };
  const show = () => {
    contentDiv.style.display = "block";
  };
  return { contentDiv, loadInto, show };
};

export default contentModule;
