import contentModule from "../contentModule";

const nigiri = () => {
  const imgUrl =
    "https://i.pinimg.com/originals/54/ec/8a/54ec8a6f8c691e76a10b29e70d00683b.gif";
  const prototype = contentModule();
  const { contentDiv } = prototype;

  const createContent = () => {
    const content = document.createElement("div");
    content.style.display = "flex";

    const list = document.createElement("ul");
    const salmon = document.createElement("li");
    salmon.textContent = "Salmon";
    const tuna = document.createElement("li");
    tuna.textContent = "Tuna";
    const whitefin = document.createElement("li");
    whitefin.textContent = "White Fin";
    list.appendChild(salmon);
    list.appendChild(tuna);
    list.appendChild(whitefin);

    const img = document.createElement("img");
    img.src = imgUrl;
    img.alt = "nigiri";

    content.appendChild(img);
    content.appendChild(list);
    return content;
  };
  const addContent = (() => {
    contentDiv.appendChild(createContent());
  })();

  return { ...prototype };
};

export default nigiri;
