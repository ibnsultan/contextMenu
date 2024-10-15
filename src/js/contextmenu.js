const ContextMenuLib = (() => {
  let activeMenu = null;

  const init = () => {
    // Find all elements that have a context menu target
    document.querySelectorAll('.cm-toggle').forEach(toggleElement => {
      const targetMenuSelector = toggleElement.getAttribute('data-cm-target');
      const targetMenu = document.querySelector(targetMenuSelector);

      if (targetMenu) {
        // Add right-click listener
        toggleElement.addEventListener('contextmenu', (event) => {
          event.preventDefault();
          bindDataToMenu(toggleElement, targetMenu);
          showMenu(event, targetMenu);
        });

        // Add touch support for double-finger tap
        toggleElement.addEventListener('touchstart', (event) => {
          if (event.touches.length === 2) {
            event.preventDefault();
            bindDataToMenu(toggleElement, targetMenu);
            showMenu(event, targetMenu);
          }
        });
      }
    });

    // Hide the menu when clicking anywhere else
    document.addEventListener('click', hideMenu);

    // Attach click listeners to menu items
    document.querySelectorAll('.context-menu-dialog ul li').forEach(menuItem => {
      menuItem.addEventListener('click', () => {
        if (activeMenu) executeCallback(menuItem, activeMenu);
      });
    });
  };

  // Bind data from data-cm-bind to the context menu
  const bindDataToMenu = (toggleElement, menuElement) => {
    const bindData = toggleElement.getAttribute('data-cm-bind');

    if (bindData) {
      // Parse the JSON-like string (since it's technically a string in an attribute)
      const parsedData = JSON.parse(bindData);
      
      // Store the parsed data directly on the menu element's dataset for consistency
      menuElement.boundData = parsedData;
    }
  };

  // Execute callback function on menu item click
  const executeCallback = (menuItem, menuElement) => {
    const callbackName = menuItem.getAttribute('data-cm-callback');
    if (callbackName && typeof window[callbackName] === 'function') {
      const boundData = menuElement.boundData || {};  // Retrieve the bound data
      window[callbackName](boundData);
    }
  };

  const showMenu = (event, menuElement) => {
    if (activeMenu) hideMenu();

    const { clientX: mouseX, clientY: mouseY } = event;

    // Show menu temporarily to calculate its dimensions
    menuElement.style.display = 'block';
    const menuWidth = menuElement.offsetWidth;
    const menuHeight = menuElement.offsetHeight;

    // Adjust X and Y to ensure the menu doesn't overflow the viewport
    const x = (mouseX + menuWidth > window.innerWidth) ? (window.innerWidth - menuWidth - 10) : mouseX;
    const y = (mouseY + menuHeight > window.innerHeight) ? (window.innerHeight - menuHeight - 10) : mouseY;

    menuElement.style.left = `${x}px`;
    menuElement.style.top = `${y}px`;

    activeMenu = menuElement;
  };

  const hideMenu = () => {
    if (activeMenu) {
      activeMenu.style.display = 'none';
      activeMenu = null;
    }
  };

  return {
    init
  };
})();

ContextMenuLib.init();
