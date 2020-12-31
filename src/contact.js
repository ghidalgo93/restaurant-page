import contentModule from "./contentModule";

const contact = (() => {
  const prototype = contentModule();
  const { contentDiv } = prototype;

  const createContent = () => {
    const contactContent = document.createElement("div");
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

    contactContent.appendChild(contactList);
    return contactContent;
  };

  const addContent = (() => {
    contentDiv.appendChild(createContent());
  })();

  return { ...prototype };
})();

export default contact;
