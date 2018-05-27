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
      imageRot: function (src, x, y, r, opt) {
        x = x || 0;
        y = y || 0;
        opt = opt || {};
        opt.center = opt.center || true;
        if (typeof src === "string") {
          var image = new Image();
          image.onload = function () {
            opt.width = opt.width || image.width;
            opt.height = opt.height || image.height;
            ctx.save();
            ctx.rotate(r);
            if (opt.center) {
              ctx.drawImage(image, x-(image.width/2), y-(image.height/2), opt.width, opt.height);
            } else {
              ctx.drawImage(image, x, y);
            }
            ctx.restore();
          }
          image.src = src;
          return image;
        } else if (typeof src === object) {
          opt.width = opt.width || src.width;
          opt.height = opt.height || src.height;
          ctx.save();
          ctx.rotate(r);
          if (opt.center) {
            ctx.drawImage(src, x-(src.width/2), y-(src.height/2), opt.width, opt.height);
          } else {
            ctx.drawImage(src, x, y, width, height);
          }
          ctx.restore();
          return src;
        } else {
          return false;
        }
      },
      rect: function (width, height, x, y, color, center) {
        center = center || true;
        color = color || "#000000";
        x = x || 0;
        y = y || 0;
        ctx.beginPath();
        if (center) {
          ctx.translate(-width/2, -height/2);
        }
        ctx.rect(x, y, width, height);
        ctx.fillStyle = color;
        ctx.fill();
      },
      ellipse: function (x, y, width, height, color) {
        ctx.beginPath();
        ctx.ellipse(x, y, width/2, height/2, 0, 0, Math.PI*2);
        ctx.fillStyle = color;
        ctx.fill();
      }
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
    save: function () {
      ctx.save();
    },
    restore: function () {
      ctx.restore();
    },
  };

  canvas.onmousemove = function (e) {
    funcs.mouse.x = e.clientX;
    funcs.mouse.y = e.clientX;
  };

  return funcs;
}
