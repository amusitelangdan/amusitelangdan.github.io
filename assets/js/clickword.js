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
                "top": y - 50,
                "left": x,
                "position": "absolute",
                "font-weight": "bold",
                "font-size": "50px",
                "color": "#ff6651"
            });
            $("body").append($i);
            $i.animate({
                    "top": y - 180,
                    "opacity": 0
                },
                1500,
                function () {
                    $i.remove();
                });
        });
    });
}
