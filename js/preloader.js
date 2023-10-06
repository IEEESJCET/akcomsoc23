function preloader() {
  setTimeout((e) => {
    document.getElementById("preloader").classList.toggle("hidden");
    window.onscroll = function () {};
  }, 4000);
  TopScroll = window.pageYOffset || document.documentElement.scrollTop;
  (LeftScroll = window.pageXOffset || document.documentElement.scrollLeft),
    // if scroll happens, set it to the previous value
    (window.onscroll = function () {
      window.scrollTo(0, 0);
    });
}
