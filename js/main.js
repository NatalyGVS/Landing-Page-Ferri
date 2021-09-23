$(document).ready(function () {
  //***************************  navbar shrink ***************************

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 90) {
      $(".navbar").addClass("navbar-shrink");
    } else {
      $(".navbar").remove("navbar-shrink");
    }
  });
  // *************************** NavBar Collapse ***************************
  $(".nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  
  // *************************** Page Scrolling - ScrollIt ***************************
  $.scrollIt({
    topOffset: -50,
  });
  
  /*
  const videoSrc = $("#player-1").attr("src");
  //***************************  navbar shrink ***************************

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 90) {
      $(".navbar").addClass("navbar-shrink");
    } else {
      $(".navbar").remove("navbar-shrink");
    }
  });
  //*************************** video-popup***************************
  $(".video-play-btn, .video-popup").on("click", function () {
    if ($(".video-popup").hasClass("open")) {
      $(".video-popup").removeClass("open");
      $("#player-1").attr("src", "");
    } else {
      $(".video-popup").addClass("open");
      if ($("#player-1").attr("src") == "") {
        $("#player").attr("src", videoSrc);
      }
    }
  });
  // *************************** feateures carousel ***************************
  $(".features-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // *************************** screenshots carousel ***************************
  $(".screenshots-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  // *************************** testimonialS carousel ***************************
  $(".testimonials-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });


  // *************************** NavBar Collapse ***************************
  $(".nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
  */
});
