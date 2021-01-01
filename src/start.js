import contentModule from "./contentModule";

const start = (() => {
  const prototype = contentModule();
  const { contentDiv } = prototype;

  const addContent = (() => {
    const welcome = document.createElement("h2");
    welcome.textContent = "Welcome to Ji's House";
    welcome.classList.add("tabHeader");

    const splash = document.createElement("div");
    splash.classList.add("splash");

    const splashList = document.createElement("ul");

    const address = document.createElement("li");
    address.textContent = "1234 Pearl St Boulder, CO 80303";
    const hours = document.createElement("li");
    hours.textContent = "W-Th: 12pm-4pm, 6pm-10p. F-Su: 5pm-11pm";
    const orderBtn = document.createElement("button");
    orderBtn.id = "order-btn";
    orderBtn.textContent = "Order Now";
    orderBtn.textContent = "Order Now";
    splashList.appendChild(address);
    splashList.appendChild(hours);

    splash.appendChild(orderBtn);
    splash.appendChild(splashList);

    contentDiv.appendChild(welcome);
    contentDiv.appendChild(splash);
  })();

  return { ...prototype };
})();

export default start;
