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
```

Now you are ready to begin learning :)

### Creating a stage

Add this to your open `<script>` to make the stage.

```javascript
var stage = new Stage();
```

The stage has the following methods:

* `.setWidth(int)` - set the width of the stage to int.
* `.setHeight(int)` - set the height of the stage to int.
* `.width()` - returns the width of the stage.
* `.height()` - returns the height of the stage.
* `.draw.image(src, x, y)` - draws an image on the stage. You can set `src` to a URL or an Image Object. There are optional values.
* `.clear()` - clear the stage.
* `.focusOn(x, y)` - move `x, y` to the center (great for games)
* `.mouse.x` - returns the current mouse X pos. Not a function.
* `.mouse.y` - returns the current mouse Y pos. Not a function.

Bigger documentation coming soon :)
