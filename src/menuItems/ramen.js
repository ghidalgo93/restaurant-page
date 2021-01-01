import contentModule from "../contentModule";

const ramen = () => {
  const imgUrl = "https://cdn.wallpapersafari.com/59/76/PQ18L5.jpg";
  const prototype = contentModule();
  const { contentDiv } = prototype;
  const createContent = () => {
    const content = document.createElement("div");
    content.style.display = "flex";

    const list = document.createElement("ul");

    const miso = document.createElement("li");
    miso.textContent = "Miso broth";
    const tonkotsu = document.createElement("li");
    tonkotsu.textContent = "Tonkotsu, pork bone broth";
    const onomichi = document.createElement("li");
    onomichi.textContent = "Onomichi, fish and shoyu broth";
    list.appendChild(miso);
    list.appendChild(tonkotsu);
    list.appendChild(onomichi);

    const img = document.createElement("img");
    img.src = imgUrl;
    img.alt = "ramen dawg";

    content.appendChild(img);
    content.appendChild(list);
    return content;
  };
  const addContent = (() => {
    contentDiv.appendChild(createContent());
  })();

  return { ...prototype };
};

export default ramen;
