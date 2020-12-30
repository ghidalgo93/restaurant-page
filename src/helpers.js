const helpers = (() => {
  const hideChildren = (parentNode) => {
    const children = parentNode.childNodes;
    children.forEach((child) => {
      child.style.display = "none";
    });
  };
  return { hideChildren };
})();

export default helpers;
