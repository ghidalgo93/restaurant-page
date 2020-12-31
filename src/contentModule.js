const contentModule = () => {
  const contentDiv = document.createElement("div");

  const loadInto = (parentNode) => {
    contentDiv.style.display = "none";
    parentNode.appendChild(contentDiv);
  };

  const show = (parentNode) => {
    const children = parentNode.childNodes;
    children.forEach((child) => {
      child.style.display = "none";
    });
    contentDiv.style.display = "block";
  };
  return { contentDiv, loadInto, show };
};

export default contentModule;
