$(document).ready(function () {
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        $(".navbar").toggleClass("toggled");
        $(".container-fluid").toggleClass("toggled");
    });

    $('#dark-mode-toggle').change(function (e) {
        e.preventDefault();
        $("body").toggleClass("dark-mode");
        $("#sidebar-wrapper").toggleClass("dark-mode");
        $(".list-group-item").toggleClass("dark-mode");
        $(".dropdown-menu").toggleClass("dark-mode");
        $("nav").toggleClass("dark-mode");
    });
});
