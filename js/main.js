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
  // *************************** Formulario Comprar en Ferri ***************************

  const formularioComprarFerri = document.getElementById(
    "formularioComprarFerri"
  );

  // formularioComprarFerri.addEventListener("submit", (e) => {
  //   console.log("submit en el form");
  //   e.preventDefault();
  // });

  $("#enviarFormContacto").on("click", function () {
    $("#modalConfirmacion").modal("show");
  });
});
