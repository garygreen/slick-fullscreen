Fullscreen Slick Slider
---

Use slick.js in fullscreen mode.

## Usage

1. Include `fullscreen-slick.js` and `fullscreen-slick.css` in your project.

2. Add `data-fullscreen-slick` to the container you want to open images in fullscreen:

```html
<section data-fullscreen-slick>
  <a href="image1.jpg">
    <img src="image1-thumb.jpg">
  </a>
  <a href="image2.jpg">
    <img src="image2-thumb.jpg">
  </a>
</section>
```

By default all anchor tags are picked and used for the images, you can customise a different target by changing `fullscreenTarget` along with any other options slick provides.

```html
<section data-fullscreen-slick='{"fullscreenTarget": "img", "dots": true, "centerMode": true, "centerPadding": "60px"}'>
  <img src="image1.jpg">
  <img src="image2.jpg">
</section>
```
