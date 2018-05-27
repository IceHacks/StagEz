# StagEz.js
## It's so EeeeeeeeZeeeee!

A simple little file I made to make my game making "ez"er. Of course you can use it too, if you want. Canvases are referred to as "stages" in this, and there is less typing and thinking involved if you use it. It is just straight to the point and simple. I will be updating this.

## Documentation (short)

Really short but helpful documentation for StagEz.js

### Starting

To start using StagEz you need to have the <a href="https://github.com/IceHacks/StagEz/raw/master/stagez.js">file</a>. Then in your `html` file create a `<script>` tag. It should look like this:

```html
...
<script src="stagez.js"></script>
<script>

</script>
...
<canvas id="canvasID"></canvas>
```

Now you are ready to begin learning :)

### Creating a stage

Add this to your open `<script>` to make the stage.

```javascript
var stage = new Stage({"id": "canvasID"});
```

The stage has the following methods:

* `.setWidth(int)` - set the width of the stage to int.
* `.setHeight(int)` - set the height of the stage to int.
* `.width()` - returns the width of the stage.
* `.height()` - returns the height of the stage.
* `.draw.image(src, x, y)` - draws an image on the stage. You can set `src` to a URL or an Image Object. There are optional values.
* `.draw.imageRot(src, x, y, r)` - `draw.image(...)` but with `r` angle to rotate by (in radians).
* `.draw.rect(width, height, x, y, color, centered)` - draws a rectangle.
* `.draw.ellipse(x, y, width, height, color)` - draws an ellipse.
* `.clear()` - clear the stage.
* `.focusOn(x, y)` - move `x, y` to the center (great for games)
* `.mouse.x` - returns the current mouse X pos. Not a function.
* `.mouse.y` - returns the current mouse Y pos. Not a function.
* `.save()` - saves the canvas (`CanvasContext2d.save()`).
* `.restore()` - restores the canvas (`CanvasContext2d.restore()`).

Bigger documentation coming soon :)


## Demos

Here are some demos so you can get some ideas.

```javascript
// This demo draws and image and then focuses it to the center.
var stage = new Stage({id: "canvasID"});
stage.clear();
stage.draw.image("https://cdn.pixabay.com/photo/2017/02/04/16/34/sport-2037681_960_720.jpg", 10000, 10000);
stage.focusOn(10000, 10000);
```

## Plans

Here are some plans we have for the future of StagEz.js:

* Spritesheets
* More shapes (ex: Star)
* Lines and arcs
* Dropping `.save()` and `.restore()`
* Strokes
