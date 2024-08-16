# UI build

Create a **public** repository with the `halftime-exam-uibuild` name.  
**Work in the created repository!**

Make a UI build from the attached 2 pictures:

- `uibuild_desktop.png` for the desktop view
- `uibuild_mobile.png` for the mobile view

The solution should be presented on Github Pages, with a link like this: https://username.github.io/halftime-exam-uibuild

The `index.html` files `<body>` should contain **only** one element: `<div id="root"></div>`.  
All the other elements should be added from a javascript file with DOM manipulation.

Opening the Github Pages link in Google Chrome or Firefox browser, the page is presented, and is similar to the design as much as possible. Especially margins, and paddings in and between the elements and text nodes.

There is a `<h1>` element which contains the text `Visszajelzés` with `Poppins` font from Google fonts with `bold` font weight, `24px` font size on both desktop and mobile viewport size. The text is aligned to the left when the viewport is smaller than `640px`. Text color: `#467745`.

There is a text type `<input>` element, which has the text `Tárgy` as a placeholder with `Poppins` font from Google fonts, with `medium` font weight, `16px` font size on both desktop and mobile size viewports. The maximum width of the element is `600px` and the height is `64px`. On viewports smaller than `640px`, the width of the element is `100% - 40px` of the viewport. In these cases, the distance between the viewports left and the elements left side is `20px`. Text color: `#467745`.

There is a `<textarea>` element which has the text `Megjegyzés` as a placeholder with `Poppins` font from Google fonts, with `regular` font weight, `16px` font size on both desktop and mobile size viewports. The maximum width of the element is `600px`, and the height is `120px`. On viewports smaller than `640px`, the width of the element is `100% - 40px` of the viewport. In these cases, the distance between the viewports left and the elements left side is `20px`. Text color: `#467745`.

There is two checkbox type `<input>` elements. Next to these elements are texts: `Elolvastam és elfogadom az Adatkezelési Tájékoztatót.` and `Szeretnék hírlevelet kapni.` with `Poppins` font from Google fonts with `regular` font weight, `16px` font size on both desktop and mobile size viewports. The text is breaking automatically if the viewport is smaller than the texts length. On viewports smaller than `640px`, the distance between the viewports left and the elements left size is `20px`. Text color: `#467745`.

There is a `<button>` element which contains the text `Mentés` with `Poppins` font from Google fonts with `bold` font weight, `21px` font size on both desktop and mobile size viewports. The text is exactly in the middle of the button element on both axes and the button element is horizontally centered. The maximum width of the element is `280px` and the height is `80px`. Buttons background color: `#467745`, text color: `#C0EBF9`. The letter spacing of the text is `0.2em`.

The `<body>` elements background color is: `#C0EBF9`.

There is no `id` attributes on the described elements above (except the initially created `<div id="root">` element).
