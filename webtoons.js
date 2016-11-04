function key_down_wrapper(e) {
    console.log(e);
    if (e.which == 76) {
        document.getElementsByClassName("pg_next")[0].click();
    }

    if (e.which == 72) {
        document.getElementsByClassName("pg_prev")[0].click();
    }

}
document.onkeydown=key_down_wrapper;
