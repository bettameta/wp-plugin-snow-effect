(function($) {
  $(document).ready(function() {
      var snowflakes = 100;
      var snowspeed = 2;
      var snowminsize = 10;
      var snowmaxsize = 20;
      var snowcolor = "#ffffff";
      var snowopacity = 0.7;
      var snowtype = "circle";

      var b = document.getElementsByTagName("body")[0];
      var w = window.innerWidth;
      var h = window.innerHeight;

      for (var i = 0; i < snowflakes; i++) {
          var span = document.createElement("span");
          span.classList.add("snow-flake");
          span.classList.add("sf-" + i);
          span.style.position = "absolute";
          span.style.top = "-100px";
          span.style.left = Math.floor(Math.random() * w) + "px";
          span.style.opacity = snowopacity;
          span.style.color = snowcolor;
          span.style.fontSize = Math.floor(Math.random() * (snowmaxsize - snowminsize + 1)) + snowminsize + "px";
          span.style.zIndex = 1000;
          span.style.animation = "falling " + snowspeed + "s linear infinite";
          span.innerHTML = snowtype === "circle" ? "&#x2022;" : "&#10052;";
          b.appendChild(span);
      }
  });
})(jQuery);
