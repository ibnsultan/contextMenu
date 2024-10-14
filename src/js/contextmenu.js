const ContextMenuLib = (() => {
  let activeMenu = null;
  let touchTimeout = null;

  const init = () => {
    // Find all elements that have a context menu target
    document.querySelectorAll('.cm-toggle').forEach(toggleElement => {
      const targetMenuSelector = toggleElement.getAttribute('data-cm-target');
      const targetMenu = document.querySelector(targetMenuSelector);

      if (targetMenu) {
        // Add right-click listener for desktop
        toggleElement.addEventListener('contextmenu', (event) => {
          event.preventDefault();
          showMenu(event, targetMenu);
        });

        // Add touch support for mobile
        toggleElement.addEventListener('touchstart', (event) => {
          handleTouchStart(event, targetMenu);
        });

        toggleElement.addEventListener('touchend', handleTouchEnd);
        toggleElement.addEventListener('touchmove', handleTouchMove);
      }
    });

    // Hide the menu when clicking or tapping elsewhere
    document.addEventListener('click', hideMenu);
    document.addEventListener('touchstart', hideMenu);
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

  // Handle long press to simulate context menu on touch devices
  const handleTouchStart = (event, menuElement) => {
    const touch = event.touches[0];
    touchTimeout = setTimeout(() => {
      showMenu(touch, menuElement);
    }, 500); // Trigger menu after 500ms (long press)
  };

  const handleTouchEnd = () => {
    if (touchTimeout) {
      clearTimeout(touchTimeout);
      touchTimeout = null;
    }
  };

  const handleTouchMove = () => {
    if (touchTimeout) {
      clearTimeout(touchTimeout); // Cancel if the user moves their finger
      touchTimeout = null;
    }
  };

  return {
    init
  };
})();

ContextMenuLib.init();
