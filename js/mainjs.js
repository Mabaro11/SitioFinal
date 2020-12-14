$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  } else {
    $('#header').removeClass('header-scrolled');
  }
});

$(document).ready(
  function () {
    $("#menuInicio").show(mostrarMain);
    $("#menuInicio").bind("click",mostrarMain);
    $("#menuContacto").bind("click", mostrarContacto);
    $("#menuBajo").bind("click", mostrarBajo);
    $("#menuGuitarra").bind("click", mostrarGuitarra);
    $("#menuUkelele").bind("click", mostrarUkelele);
    $("#menuArtista").bind("click", mostrarArtista);
  }
); function mostrarMain() {
  $("#containerContact").hide(1500);
  $("#bajo").hide(1500);
  $("#guitarra").hide(1500);
  $("#ukelele").hide(1500);
  $("#artista").hide(1500);
  $("#containerMain").show(1500);
}

function mostrarContacto() {
  $("#containerMain").hide(1500);
  $("#bajo").hide(1500);
  $("#guitarra").hide(1500);
  $("#ukelele").hide(1500);
  $("#artista").hide(1500);
  $("#containerContact").show(1500);
}

function mostrarBajo() {
  $("#containerContact").hide(1500);
  $("#ukelele").hide(1500);
  $("#guitarra").hide(1500);
  $("#containerMain").hide(1500);
  $("#artista").hide(1500);
  $("#bajo").show(1500);
}

function mostrarGuitarra() {
  $("#ukelele").hide(1500);
  $("#bajo").hide(1500);
  $("#containeContact").hide(1500);
  $("#containerMain").hide(1500);
  $("#artista").hide(1500);
  $("#guitarra").show(1500);
}
function mostrarUkelele() {
  $("#containerContact").hide(1500);
  $("#bajo").hide(1500);
  $("#containerMain").hide(1500);
  $("#guitarra").hide(1500);
  $("#artista").hide(1500);
  $("#ukelele").show(1500);
}
function mostrarArtista() {
  $("#containerContact").hide(1500);
  $("#bajo").hide(1500);
  $("#containerMain").hide(1500);
  $("#guitarra").hide(1500);
  $("#ukelele").hide(1500);
  $("#artista").show(1500);
  
}
!(function($) {
  "use strict";
  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

})(jQuery);


