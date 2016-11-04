function key_down_wrapper(e) {
    if (e.which == 76) {
        document.getElementsByClassName("next")[1].children[0].click();
    }

    if (e.which == 72) {
        document.getElementsByClassName("prev")[1].children[0].click();
    }

}
document.onkeydown=key_down_wrapper;
