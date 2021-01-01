import contentModule from "./contentModule";

const contact = (() => {
  const prototype = contentModule();
  const { contentDiv } = prototype;

  const addContent = (() => {
    const contactUs = document.createElement("div");
    contactUs.textContent = "Contact Us";
    contactUs.classList.add("tabHeader");

    const splash = document.createElement("div");
    splash.classList.add("splash");

    const contactList = document.createElement("ul");

    const address = document.createElement("li");
    address.textContent = "1234 Pearl St Boulder, CO 80303";
    const hours = document.createElement("li");
    hours.textContent = "W-Th: 12pm-4pm, 6pm-10p. F-Su: 5pm-11pm";
    const phone = document.createElement("li");
    phone.textContent = "(303) 123.4567";
    contactList.appendChild(address);
    contactList.appendChild(hours);
    contactList.appendChild(phone);

    splash.appendChild(contactList);
    contentDiv.appendChild(contactUs);
    contentDiv.appendChild(splash);
  })();

  return { ...prototype };
})();

export default contact;
