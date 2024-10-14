# ContextMenu Library

A lightweight, reusable JavaScript library for creating custom context menus. The library supports both desktop (right-click) and touch devices (long-press) and includes dynamic positioning to prevent the menu from overflowing off the screen.

## Features
- **Desktop Support**: Right-click to trigger the custom context menu.
- **Touch Support**: Long-press on touch devices to trigger the custom context menu.
- **Dynamic Positioning**: The menu automatically repositions if it overflows the viewport.
- **Customizable**: Easily style and modify the context menu to fit your needs.

## Installation

You can include the library in your project using jsDelivr CDN.

### JavaScript
```html
<script src="https://cdn.jsdelivr.net/gh/ibnsultan/contextmenu@0.0.1/src/js/contextmenu.min.js"></script>
```

### CSS
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ibnsultan/contextmenu@0.0.1/src/css/contextmenu.min.css">
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
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ibnsultan/contextmenu@0.0.1/src/css/contextmenu.min.css">
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

  <script src="https://cdn.jsdelivr.net/gh/ibnsultan/contextmenu@0.0.1/src/js/contextmenu.min.js"></script>

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

### Menu Positioning

The library automatically positions the menu to prevent overflow from the viewport. However, you can manually adjust the menu's position if needed by modifying the `showMenu` function in `contextmenu.min.js`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributions

Feel free to open issues or submit pull requests to help improve the library!

## Credits

Developed by [Abdulbasit Rubeya](https://github.com/ibnsultan).
