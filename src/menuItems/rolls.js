import contentModule from "../contentModule";

const rolls = () => {
  const imgUrl =
    "https://i.pinimg.com/originals/9d/1c/cf/9d1ccfcdeb976ba07e1e6565a5bd6654.png";
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
