var a = document.getelementbyid("*");

var b = {"bad":"good","worst":"best"};

function niceGuyScript() {

    for (var i = 0; i < a.length; i++) {

        for (var l = 0; l < b.length; l++) {

            if (a[i].innerText.includes(Object.keys(b[l]))) {

            a[i].innerText = a[i].innerText.replace(Object.keys(b[l]), Object.value(b[l]));

            }
        }
    }
}