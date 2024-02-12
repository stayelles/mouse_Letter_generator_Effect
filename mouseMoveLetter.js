      let div = document.querySelector("#cursor");
      let body = document.querySelector("body");
      document.onmousemove = function (e) {
        // move cursor
        cursor.style.top = e.pageY + "px";
        cursor.style.left = e.pageX + "px";
        //animate background

        body.style.backgroundPositionX = e.pageX / -4 + "px";

        body.style.backgroundPositionY = e.pageY / -4 + "px";

        // add elements to the body

        let element = document.createElement("div");

        element.className = "element";

        body.prepend(element);

        // move elements rendomly across x and y axis

        element.style.left = cursor.getBoundingClientRect().x + "px";

        element.style.top = cursor.getBoundingClientRect().y - 100 + "px";

        setTimeout(function () {
          let text = document.querySelectorAll(".element")[0],
            directionX = Math.random() < 0.5 ? -1 : 1,
            directionY = Math.random() < 0.5 ? -1 : 1;

          text.style.left =
            parseInt(text.style.left) -
            directionX * (Math.random() * 200) +
            "px";

          text.style.top =
            parseInt(text.style.top) -
            directionY * (Math.random() * 200) +
            "px";
          text.style.opacity = 0;
          text.style.transform = "scale(0.25)";
          text.innerHTML = randomText();

          //remove element
          setTimeout(() => {
            element.remove();
          }, 1000);
        }, 10);
      };
      // add random text on numbers
      function randomText() {
        var text = "abcdefghijklmnopqrstuvwxyz1234567890".split("");
        letter = text[Math.floor(Math.random() * text.length)];
        return letter;
      };
