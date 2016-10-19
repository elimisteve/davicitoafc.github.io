// Jquery for loading animation //

$(window).on('load', function (e) {
  setTimeout(loader, 3000);
  function loader() {
    $(".loader").fadeOut("slow");
  }
})

// change color of nav collapsed //

$('.navbar-toggle').click(function() {
       $('#myNavbar').toggleClass('navBack');
       $('.navbar-header').toggleClass('navBack');
});

// transition effect on navbar //

$(window).scroll(function() {

  var nav = $('.navbar');
  var nav_position = nav.offset();

  var about = $('.about_title');
  var about_position = about.offset();


  if (nav_position.top > 10) {
    $('.navbar').addClass('nav_scroll');
  } else if (nav_position.top < 10) {
    $('.navbar').removeClass('nav_scroll');
  }

  if (about_position.top > 700) {
    about.addClass('animated fadeIn');
  } else if (about_position.top < 700) {
    about.removeClass('fadeIn').addClass('fadeOut')
  }

});
