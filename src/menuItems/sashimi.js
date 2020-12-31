import contentModule from "../contentModule";

const sashimi = () => {
  const imgUrl =
    "https://www.manusmenu.com/wp-content/uploads/2016/05/1-Salmon-Sashimi-with-Ponzu-3-1-of-1.jpg";
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
    img.alt = "sashimi";
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

export default sashimi;
