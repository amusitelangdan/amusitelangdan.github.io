onload = function () {
    clickWord();
};

function clickWord() {
    let a_idx = 0;
    jQuery(document).ready(function ($) {
        $("body").click(function (e) {
            let a = ["Yoda", "宝宝", "天下", "第一美", "！！！"];
            let $i = $("<span/>").text(a[a_idx]);
            a_idx = (a_idx + 1) % a.length;
            let x = e.pageX,
                y = e.pageY;
            $i.css({
                "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
                "top": y - 20,
                "left": x,
                "position": "absolute",
                "font-weight": "bold",
                "font-size": "15px",
                "color": "#ff5e76"
            });
            $("body").append($i);
            $i.animate({
                    "top": y - 400,
                    "opacity": 0
                },
                2000,
                function () {
                    $i.remove();
                });
        });
    });
}
