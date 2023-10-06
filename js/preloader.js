function preloader() {
  setTimeout((e) => {
    document.getElementById("preloader").classList.toggle("hidden");
    TopScroll = window.pageYOffset || document.documentElement.scrollTop;
    (LeftScroll = window.pageXOffset || document.documentElement.scrollLeft),
      // if scroll happens, set it to the previous value
      (window.onscroll = function () {
        window.scrollTo(LeftScroll, TopScroll);
      });
  }, 4000);
}
