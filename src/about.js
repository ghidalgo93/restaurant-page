import contentModule from "./contentModule";
import mission from "./aboutItems/mission";
import promise from "./aboutItems/promise";
import story from "./aboutItems/story";

const about = (() => {
  const prototype = contentModule();
  const { contentDiv } = prototype;

  const createContent = () => {
    const content = document.createElement("div");
    content.id = "about-content";

    const tabs = document.createElement("ul");
    tabs.id = "about-tabs";
    tabs.classList.add("tabs");
    const missionTab = document.createElement("li");
    missionTab.textContent = "Our Mission";
    const promiseTab = document.createElement("li");
    promiseTab.textContent = "Our Promise";
    const storyTab = document.createElement("li");
    storyTab.textContent = "Our Story";
    tabs.appendChild(missionTab);
    tabs.appendChild(promiseTab);
    tabs.appendChild(storyTab);

    const tabContent = document.createElement("div");
    tabContent.id = "about-content";

    const missionContent = mission();
    missionContent.loadInto(tabContent);
    const promiseContent = promise();
    promiseContent.loadInto(tabContent);
    const storyContent = story();
    storyContent.loadInto(tabContent);

    missionContent.show(tabContent);

    missionTab.onmouseenter = () => missionContent.show(tabContent);
    promiseTab.onmouseenter = () => promiseContent.show(tabContent);
    storyTab.onmouseenter = () => storyContent.show(tabContent);

    content.appendChild(tabs);
    content.appendChild(tabContent);
    return content;
  };

  const addContent = (() => {
    contentDiv.appendChild(createContent());
  })();

  return { ...prototype };
})();

export default about;
