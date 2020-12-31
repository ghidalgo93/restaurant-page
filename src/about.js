import contentModule from "./contentModule";

const about = (() => {
  const prototype = contentModule();
  const { contentDiv } = prototype;

  const createContent = () => {
    const aboutPara = document.createElement("p");
    aboutPara.textContent = "this is a small blurb about house of Ji!";
    return aboutPara;
  };

  const addContent = (() => {
    contentDiv.appendChild(createContent());
  })();

  return { ...prototype };
})();

export default about;
