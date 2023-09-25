function preloader(){
    setTimeout(() => {
        document.getElementById("desktop").classList.toggle("hidden");
        document.getElementById("preloader").classList.toggle("hidden");
    }, 4000);
}