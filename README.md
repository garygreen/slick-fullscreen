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

If your images are not inside `<a>` you can customise a different target by changing `fullscreenTarget` along with any other options slick provides.

```html
<section data-slick-fullscreen='{"fullscreenTarget": "img", "dots": true, "centerMode": true, "centerPadding": "60px"}'>
  <img src="image1.jpg">
  <img src="image2.jpg">
</section>
```
