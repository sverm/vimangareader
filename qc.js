function key_down_wrapper(e) {
    var comicnav = document.getElementById("comicnav");
    var next = comicnav.children[2].children[0];
    var prev = comicnav.children[1].children[0];

    if (e.which == 76) {
        next.click();
    }

    if (e.which == 72) {
        prev.click();
    }

}
document.onkeydown=key_down_wrapper;
