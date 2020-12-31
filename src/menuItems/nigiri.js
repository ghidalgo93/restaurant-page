import contentModule from "../contentModule";

const nigiri = () => {
  const imgUrl =
    "https://i2.wp.com/topsushimaker.com/wp-content/uploads/2019/04/2742_top.jpeg?fit=960%2C581&ssl=1";
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
    const roe = document.createElement("li");
    roe.textContent = "Roe";
    list.appendChild(salmon);
    list.appendChild(tuna);
    list.appendChild(whitefin);
    list.appendChild(roe);

    const img = document.createElement("img");
    img.src = imgUrl;
    img.alt = "nigiri";
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

export default nigiri;
