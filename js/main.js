import DesktopSidebar from './App/Sidebar/DesktopSidebar.js';
import MobileSidebar from './App/Sidebar/MobileSidebar.js';
import SearchBar from './App/SearchBar/SearchBar.js';

window.addEventListener('load', () => {
  if (window.innerWidth <= 890) {
    MobileSidebar();
  } else if (window.innerWidth >= 890) {
    DesktopSidebar();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth <= 890) {
    MobileSidebar();
  } else if (window.innerWidth >= 890) {
    DesktopSidebar();
  }
});

SearchBar();
