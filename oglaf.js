function key_down_wrapper(e) {
    console.log("here");
    var next = document.getElementById("ns");
    var prev = document.getElementById("pvs");

    if (e.which == 76) {
        next.click();
    }

    if (e.which == 72) {
        prev.click();
    }

}
document.onkeydown=key_down_wrapper;
