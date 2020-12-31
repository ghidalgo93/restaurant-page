import contentModule from "../contentModule";

const story = () => {
  const prototype = contentModule();
  const { contentDiv } = prototype;

  const createContent = () => {
    const content = document.createElement("div");

    const para = document.createElement("p");
    para.textContent =
      "We started as a small group of friends who met in undergrad at the University of Colorado, Boulder. We came to Boulder from all accross the globe with a wide rage of interests, but we all loved doing 1 thing in particular - eating incredible sushi. After university, we all went our seperate ways for a handful of years and ended up coming together for a motorcycle trip accross Japan. We all rediscovered our love for Sushi and decided that we would go back to the US and open a sushi restaurant using all of our seperate skills to create an incredible experience from incredible sources. We hope that we can share the culmination of our hopes and dreams with YOU!";

    content.appendChild(para);
    return content;
  };
  const addContent = (() => {
    contentDiv.appendChild(createContent());
  })();

  return { ...prototype };
};

export default story;
