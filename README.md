# ContextMenu Library

A lightweight, reusable JavaScript library for creating custom context menus. The library supports both desktop (right-click) and touch devices (long-press) and includes dynamic positioning to prevent the menu from overflowing off the screen.

## Features
- **Desktop Support**: Right-click to trigger the custom context menu.
- **Touch Support**: Trigger custom context menus with a double-finger tap on touch devices.
- **Dynamic Positioning**: The menu automatically repositions if it overflows the viewport.
- **Customizable**: Easily style and modify the context menu to fit your needs.
- **Data Binding**: Bind data from the triggering element to the menu.
- **Custom Callbacks**: Execute functions when menu items are clicked, passing in bound data.

## Installation

You can include the library in your project using jsDelivr CDN.

### JavaScript
```html
<script src="https://cdn.jsdelivr.net/gh/ibnsultan/contextmenu@0.1.1/src/js/contextmenu.min.js"></script>
```

### CSS
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ibnsultan/contextmenu@0.1.1/src/css/contextmenu.min.css">
```

## Usage

### HTML Structure

Add the `.cm-toggle` class to the elements you want to trigger the context menu, and use the `data-cm-target` attribute to specify the context menu target.

```html
<div class="cm-toggle" data-cm-target="#myContextMenu">Right-click or long-press me!</div>

<div id="myContextMenu" class="context-menu-dialog">
  <ul>
    <li><a href="#">Option 1</a></li>
    <li><a href="#">Option 2</a></li>
    <li><a href="#">Option 3</a></li>
  </ul>
</div>
```

### Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Context Menu Example</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ibnsultan/contextmenu@0.1.1/src/css/contextmenu.min.css">
</head>
<body>

  <div class="cm-toggle" data-cm-target="#myContextMenu">Right-click or long-press me!</div>

  <div id="myContextMenu" class="context-menu-dialog">
    <ul>
      <li><a href="#">Option 1</a></li>
      <li><a href="#">Option 2</a></li>
      <li><a href="#">Option 3</a></li>
    </ul>
  </div>

  <script src="https://cdn.jsdelivr.net/gh/ibnsultan/contextmenu@0.1.1/src/js/contextmenu.min.js"></script>

</body>
</html>
```

## Customization

### Style Customization

You can customize the appearance of the context menu by overriding the default CSS classes. For example:

```css
.context-menu-dialog {
  background-color: #f9f9f9;
  border: 1px solid #333;
}

.context-menu-dialog ul li {
  padding: 10px 15px;
}

.context-menu-dialog ul li:hover {
  background-color: #ddd;
}
```

### Data Binding

**Data Binding** allows you to attach specific data to UI elements that trigger context menus, making it accessible for actions performed on those menus. The `data-cm-bind` attribute holds a JSON-like string representing the data you want to bind. When the context menu is triggered, the library parses this data and makes it available for any associated actions. This enables context-aware behavior in your menu items.

```html
<div class="cm-toggle" data-cm-bind='{"id":"1", "name":"John"}'>Right-click here</div>
```

When the target menu is called the data is the bound to the particular context menu dynamically

```html
<div id="myCmMenu" class="context-menu-dialog" data-bind-id="1" data-bind-name="John">
  ...
</div>
```

### Callback Function

**Callback Functions** are functions defined in your JavaScript that execute when a user interacts with a menu item in the context menu. Each menu item can have a data-cm-callback attribute, which specifies the name of the function to be called. When the menu item is clicked, the corresponding function is executed, and it can access any bound data for dynamic and context-specific actions.

```html
<div id="myCmMenu" class="context-menu-dialog">
  <li data-cm-callback="editAction">Edit</li>
  ...other menus
</div>

<script>
  function editAction(data) {
    console.log('Editing item with ID:', data.id);
  }
</script>
```

### Menu Positioning

The library automatically positions the menu to prevent overflow from the viewport. However, you can manually adjust the menu's position if needed by modifying the `showMenu` function in `contextmenu.min.js`.

## Attributes

`.cm-toggle`

*   **Description**: Class to be applied to elements that will trigger the context menu.
*   **Attributes**:
    *   `data-cm-target`: Specifies the ID of the context menu to display.
    *   `data-cm-bind`: (Optional) A JSON-like string containing data to bind to the context menu items.

`.context-menu-dialog`

*   **Description**: Class for the context menu container that contains the menu items.
*   **Structure**: Should contain an unordered list (`<ul>`) with list items (`<li>`) for each menu option.

`<li>`

*   **Attributes**:
    *   `data-cm-callback`: Name of the callback function to execute when the menu item is clicked.

## Class Definitions

*   **ContextMenuLib**: The main library object that initializes the context menu functionality.
    *   **Methods**:
        *   `init()`: Initializes the context menu functionality, setting up event listeners and bindings.
*   **showMenu(event, menuElement)**: Displays the context menu at the appropriate position based on the mouse or touch event.
*   **hideMenu()**: Hides the currently active context menu.
*   **bindDataToMenu(toggleElement, menuElement)**: Binds data from the triggering element to the context menu for later use in callback functions.
*   **executeCallback(menuItem, menuElement)**: Executes the specified callback function associated with a menu item when clicked.

## License

This project is licensed under the MIT License - see the [LICENCE](https://github.com/ibnsultan/contextMenu/blob/main/LICENSE) file for details.

## Contributions

Feel free to open issues or submit pull requests to help improve the library!

## Credits

Developed by [Abdulbasit Rubeya](https://github.com/ibnsultan).
