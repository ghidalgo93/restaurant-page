import contentModule from "./contentModule";
import mission from "./aboutItems/mission";
import promise from "./aboutItems/promise";
import story from "./aboutItems/story";

const about = (() => {
  const prototype = contentModule();
  const { contentDiv } = prototype;

  const addContent = (() => {
    const tabs = document.createElement("ul");
    tabs.id = "about-tabs";
    tabs.classList.add("tabs");
    tabs.classList.add("tabHeader");
    const missionTab = document.createElement("li");
    missionTab.textContent = "Mission";
    const promiseTab = document.createElement("li");
    promiseTab.textContent = "Promise";
    const storyTab = document.createElement("li");
    storyTab.textContent = "Story";
    tabs.appendChild(missionTab);
    tabs.appendChild(promiseTab);
    tabs.appendChild(storyTab);

    const splash = document.createElement("div");
    splash.classList.add("splash");

    const missionContent = mission();
    missionContent.loadInto(splash);
    const promiseContent = promise();
    promiseContent.loadInto(splash);
    const storyContent = story();
    storyContent.loadInto(splash);

    missionContent.show(splash);

    missionTab.onclick = () => missionContent.show(splash);
    promiseTab.onclick = () => promiseContent.show(splash);
    storyTab.onclick = () => storyContent.show(splash);

    contentDiv.appendChild(tabs);
    contentDiv.appendChild(splash);
  })();

  return { ...prototype };
})();

export default about;
