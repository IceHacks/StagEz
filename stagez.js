var Stage = function ({id}) {
  var canvas = document.getElementById(id);
  var ctx = canvas.getContext("2d");

  var funcs = {
    setWidth: function (int) {
      canvas.width = int;
    },
    setHeight: function (int) {
      canvas.height = int;
    },
    width: function () {
      return canvas.width;
    },
    height: function () {
      return canvas.height;
    },
    draw: {
      image: function (src, x, y, opt) {
        x = x || 0;
        y = y || 0;
        opt = opt || {};
        opt.center = opt.center || true;
        if (typeof src === "string") {
          var image = new Image();
          image.onload = function () {
            opt.width = opt.width || image.width;
            opt.height = opt.height || image.height;
            if (opt.center) {
              ctx.drawImage(image, x-(image.width/2), y-(image.height/2), opt.width, opt.height);
            } else {
              ctx.drawImage(image, x, y);
            }
          }
          image.src = src;
          return image;
        } else if (typeof src === object) {
          opt.width = opt.width || src.width;
          opt.height = opt.height || src.height;
          if (opt.center) {
            ctx.drawImage(src, x-(src.width/2), y-(src.height/2), opt.width, opt.height);
          } else {
            ctx.drawImage(src, x, y, width, height);
          }
          return src;
        } else {
          return false;
        }
      },
    },
    clear: function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    },
    focusOn: function (x, y) {
      ctx.translate((canvas.width/2)-x, (canvas.height/2)-y);
    },
    mouse: {
      x: 0,
      y: 0
    },
  };

  canvas.onmousemove = function (e) {
    funcs.mouse.x = e.clientX;
    funcs.mouse.y = e.clientX;
  };

  return funcs;
}
