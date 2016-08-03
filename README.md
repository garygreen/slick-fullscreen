Fullscreen Slick Slider
---

Use slick.js in fullscreen mode.

## Usage

1. Include `slick-fullscreen.js` and `slick-fullscreen.css` in your project.

2. Add `data-slick-fullscreen` to the container element which has anchor elements `<a>` of the images you want to open in fullscreen.

```html
<section data-slick-fullscreen>
  <a href="image1.jpg"> <!-- This image will be used -->
    <img src="image1-thumb.jpg">
  </a>
  <a href="image2.jpg"> <!-- This image will be used -->
    <img src="image2-thumb.jpg">
  </a>
</section>
```

If your images are not inside `<a>` you can customise a different target by changing `target` along with any other options slick provides.

```html
<section data-slick-fullscreen='{"target": "img", "slick":{ "dots": true, "centerMode": true, "centerPadding": "60px"}}'>
  <img src="image1.jpg">
  <img src="image2.jpg">
</section>
```

## Options

### target
The selector to use to find images.

### closeIcon
Whether to add a close icon.

### closeOnEsc
Whether to close on pressing escape button.

### closeOnBackdrop
Whether to close when clicking on the backdrop.

### slick
Specify options which should be passed to slick.

## Open fullscreen manually

```javascript
slickFullscreen.open($('.my-images'), { slick: { dots: false } }); // Specify any option slick provides.
```

## Close the fullscreen

```javascript
slickFullscreen.close();
```
