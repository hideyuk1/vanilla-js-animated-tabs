import './style.css';

const NAV_SELECTOR = ".Navigator";
const TAB_SELECTOR = ".Tab";
const CONTENT_SELECTOR = ".Content";
const TAB_CONTENT_SELECTOR = ".TabContent";
const SLIDABLE_SELECTOR = ".Slidable";

const Navigator = document.querySelector(NAV_SELECTOR);
const Content = document.querySelector(CONTENT_SELECTOR);
const Slidable = document.querySelector(SLIDABLE_SELECTOR);

// set Tabs onclick
const setup = () => {
  console.log("setup");
  [...Navigator.querySelectorAll(TAB_SELECTOR)].forEach(child => {
    // console.log(child);
    child.onclick = element => {
      removeActiveClassesTab();
      removeActiveClassesTabContent();
      addActiveClassToParentTab(element);
      addActiveClassToCorrespondentTabContent(element);
    };
  });
};

// Removes all 'active' tab classes
const removeActiveClassesTab = () => {
  [...document.querySelectorAll(TAB_SELECTOR)].forEach(tab => {
    tab.classList.remove("active");
  });
};

// Removes all 'active' tab classes
const removeActiveClassesTabContent = () => {
  [...Content.querySelectorAll(TAB_CONTENT_SELECTOR)].forEach(tab => {
    tab.classList.remove("active");
  });
};

// Add 'active' class to parent tab
const addActiveClassToParentTab = element => {
  element.target.closest(TAB_SELECTOR).classList.add("active");
};

// Add 'active' class to correspondent tab content
const addActiveClassToCorrespondentTabContent = element => {
  const currentTab = element.target.closest(TAB_SELECTOR);
  const navigator = currentTab.parentNode;
  const index = Array.prototype.indexOf.call(navigator.children, currentTab);
  Slidable.children[index].classList.add("active");
  setContentTranslateX(index);
};

const setContentTranslateX = index => {
  const translateX = index * 100;
  Slidable.style.transform = `translateX(-${translateX}%)`;
};

setup();
