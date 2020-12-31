import contentModule from "../contentModule";

const mission = () => {
  const prototype = contentModule();
  const { contentDiv } = prototype;

  const createContent = () => {
    const content = document.createElement("div");

    const para = document.createElement("p");
    para.textContent =
      "Our mission is to serve the very best sushi Colorado has to offer. We are obbessed with authentic flavors, the ingenuity to take those flavors to new heights, and at atmosphere that trancends the basic dining experience. At the House of Ji we use fish from around the world, focusing primarily on the local ecosystem so you can truly experience the flavors of Colorado. Welcome to our Home.";

    content.appendChild(para);
    return content;
  };
  const addContent = (() => {
    contentDiv.appendChild(createContent());
  })();

  return { ...prototype };
};

export default mission;
