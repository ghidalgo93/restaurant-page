import contentModule from "./contentModule";

const start = (() => {
  const prototype = contentModule();
  const { contentDiv } = prototype;

  const addContent = (() => {
    const welcome = document.createElement("h2");
    welcome.textContent = "Welcome to Ji's House!";

    const splash = document.createElement("div");
    splash.classList.add("splash");

    const address = document.createElement("p");
    address.textContent = "kljdsfasdkldsjl";
    splash.appendChild(address);

    contentDiv.appendChild(welcome);
    contentDiv.appendChild(splash);
  })();

  return { ...prototype };
})();

export default start;
