import { MobileFunctions } from "./MobileSidebarFunctions.js";
const sidebarElement = document.querySelector(".sidebar");

const MobileSidebar = () => {
  sidebarElement.innerHTML = "";
  MobileFunctions();
};

export default MobileSidebar;
