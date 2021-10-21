$(document).ready(function () {
  //***************************  navbar shrink ***************************

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 90) {
      $(".navbar").addClass("navbar-shrink");
    } else {
      $(".navbar").remove("navbar-shrink");
    }
  });
  // *************************** Page Scrolling - ScrollIt ***************************
  $.scrollIt({
    topOffset: -80,
    easing: "linear",
    scrollTime: 100, // tiempo de animacion
  });

  // *************************** NavBar Collapse ***************************
  $(".nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  const formulario = document.getElementById("formularioContacto");

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
  });
});
