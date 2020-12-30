const about = (() => {
  const aboutContent = document.createElement("div");

  const load = () => {
    const content = document.getElementById("content");
    aboutContent.style.display = "none";
    aboutContent.innerHTML = "about content";
    content.appendChild(aboutContent);
  };
  const show = () => {
    aboutContent.style.display = "block";
  };

  return { load, show };
})();

export default about;
