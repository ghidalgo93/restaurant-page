const helpers = (() => {
  const hideChildren = (parentNode) => {
    const children = parentNode.childNodes;
    children.forEach((child) => {
      child.style.display = "none";
    });
  };
  return { hideChildren };

  const tabSelect = () => {
    // return all tab colors to
  };
})();

export default helpers;
