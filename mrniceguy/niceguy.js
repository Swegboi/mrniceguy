function Rep() {
    $(document).ready(function () {
        var a = document.querySelectorAll('body *');
        var url = "https://api.myjson.com/bins/ilnut";
        $.getJSON(url, function (data) {
            for (var key in data) {
                for (var j = 0; j < a.length; j++) {
                    if (a[j].innerText.includes(data[key][1])) {
                        a[j].innerText = data[key][0];
                    }
                }
            }
        });
    });
}
