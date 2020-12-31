import contentModule from "../contentModule";

const promise = () => {
  const prototype = contentModule();
  const { contentDiv } = prototype;

  const createContent = () => {
    const content = document.createElement("div");

    const para = document.createElement("p");
    para.textContent =
      "We promise to only bring sustainable ingrediants to your table. We understand that serving you incredible food must start with a responsibility to our earth. Without this understanding we cannot serve the high quality food we strive for every day. We promise to always be completely transparent with our sources and list our farmers and fishers; because without them we could not bring you food we are proud of. We promise to start with local foods, and make sure that everyone in our resource chain is treated and payed correctly. Thank you.";

    content.appendChild(para);
    return content;
  };
  const addContent = (() => {
    contentDiv.appendChild(createContent());
  })();

  return { ...prototype };
};

export default promise;
