(function() {
    var snowflakes = [],
        moveSnowflakes,
        addSnowflake,
        w = window.innerWidth,
        h = window.innerHeight,
        canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        flakeCount = 200,
        mX = -100,
        mY = -100;
  
    canvas.setAttribute('width', w);
    canvas.setAttribute('height', h);
    canvas.setAttribute('style', 'position:absolute; top:0; left:0; z-index:99999; pointer-events:none;');
    document.getElementsByTagName('body')[0].appendChild(canvas);
  
    function snowflake() {
      this.x = Math.round(Math.random() * w);
      this.y = Math.round(Math.random() * h);
      this.r = Math.random() * 5 + 2;
      this.d = Math.random() * flakeCount;
      this.o = Math.random() * 0.5 + 0.5;
      this.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = 'rgba(255, 255, 255, ' + this.o + ')';
        ctx.fill();
      };
    }
  
    function moveSnowflakes() {
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < flakeCount; i++) {
        var f = snowflakes[i];
        f.y += Math.pow(f.r, 0.5) * 0.1;
        f.x += Math.sin(f.d) * 2;
        if (f.y > h) {
          snowflakes[i] = new snowflake();
        }
        f.draw();
      }
      requestAnimationFrame(moveSnowflakes);
    }
  
    for (var i = 0; i < flakeCount; i++) {
      snowflakes.push(new snowflake());
    }
  
    moveSnowflakes();
  })();
  