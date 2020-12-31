import contentModule from "./contentModule";

const start = (() => {
  const imgUrl =
    "https://savorjapan.com/gg/content_image/t0117_001_20180822085728.jpg";
  const prototype = contentModule();
  const { contentDiv } = prototype;

  const createContent = () => {
    const initContent = document.createElement("div");
    initContent.id = "init-content";
    const image = document.createElement("img");
    image.src = imgUrl;
    image.alt = "japanese tea house";
    initContent.appendChild(image);
    return initContent;
  };

  const addContent = (() => {
    contentDiv.appendChild(createContent());
  })();

  return { ...prototype };
})();

export default start;
