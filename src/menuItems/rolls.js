import contentModule from "../contentModule";

const rolls = () => {
  const imgUrl = "https://akisushiusa.com/files/2019/01/IMG-2006_(003).JPG";
  const prototype = contentModule();
  const { contentDiv } = prototype;

  const createContent = () => {
    const content = document.createElement("div");
    content.style.display = "flex";

    const list = document.createElement("ul");
    const salmon = document.createElement("li");
    salmon.textContent = "Salmon Skin Roll";
    const tuna = document.createElement("li");
    tuna.textContent = "Spicy Tuna Roll";
    const unagi = document.createElement("li");
    unagi.textContent = "Sweet Unagi Roll";
    const spider = document.createElement("li");
    spider.textContent = "Spider Roll";
    list.appendChild(salmon);
    list.appendChild(tuna);
    list.appendChild(unagi);
    list.appendChild(spider);

    const img = document.createElement("img");
    img.src = imgUrl;
    img.alt = "rolls";
    img.style.height = "30em";
    img.style.width = "30em";

    content.appendChild(img);
    content.appendChild(list);
    return content;
  };
  const addContent = (() => {
    contentDiv.appendChild(createContent());
  })();

  return { ...prototype };
};

export default rolls;
