function Rep() {
    $(document).ready(function () {
        var a = $("body").$("*");
        alert(a.length);
        var b = new Map();
        b.set("bad", "good");
        b.set("worst", "best");
        b.forEach(BLoop);
        b.forEach(altLoop)

        function whichLoop() {
          /* psuedo code

          functions BLoop and altLoop called in whichLoop function

          if(buttonIsNice) {
            b.forEach(BLoop)
            BLoop();
          }
          else {
            b.forEach(altLoop)
            altLoop();
          }
          */

        }

        function BLoop(value, key, map) {   // for an opisate flip we could just call the method but flip the value and key componet

            for (var i = 0; i < a.length; i++) {

                if(a[i].innerText.toLowerCase().includes(key)) {
                    a[i].innerText = value;
                }
            }
        }

        function altLoop(key, value, map) {
            for (var i = 0; i < a.length; i++) {
              if (a[i].innerText.toLowerCase().includes(value)) {
                  a[i].innerText = key;
              }
            }
        }
    });
}
