// modals //
$(function(){

// Hitchr Modal //

var hitchr = $('.hitchr');
var modal1 = $('.modal1');
var closeHitchr = $('.closes');

function fadeInModal1() {
  modal1.fadeIn();
}

function fadeOutModal1() {
  modal1.fadeOut()
}

hitchr.on('click', fadeInModal1);
closeHitchr.on('click', fadeOutModal1);

// Crowdfunder Modal //

var crowdfunder = $('.crowdfunder');
var modal2 = $('.modal2');
var closeCrowdFunder = $('.closes');

function fadeInModal2() {
  modal2.fadeIn();
}

function fadeOutModal2() {
  modal2.fadeOut()
}

crowdfunder.on('click', fadeInModal2);
closeCrowdFunder.on('click', fadeOutModal2);


// Porfolio Site Modal //

var portfolio = $('.portfolio');
var modal3 = $('.modal3');
var closePortfolio = $('.closes');

function fadeInModal3() {
  modal3.fadeIn();
}

function fadeOutModal3() {
  modal3.fadeOut()
}

portfolio.on('click', fadeInModal3);
closePortfolio.on('click', fadeOutModal3);

// pickupApp Site Modal //

var pickupApp = $('.pickupApp');
var modal4 = $('.modal4');
var closepickupApp = $('.closes');

function fadeInModal4() {
  modal4.fadeIn();
}

function fadeOutModal4() {
  modal4.fadeOut()
}

pickupApp.on('click', fadeInModal4);
closepickupApp.on('click', fadeOutModal4);

// Esra Tortumlu Site Modal //

var esratortumlu = $('.esratortumlu');
var modal5 = $('.modal5');
var closeEsraTortumlu = $('.closes');

function fadeInModal5() {
  modal5.fadeIn();
}

function fadeOutModal5() {
  modal5.fadeOut()
}

esratortumlu.on('click', fadeInModal5);
closeEsraTortumlu.on('click', fadeOutModal5);

});

// hover effect for project divs //

$(".img-responsive").mouseover(function() {
    $(this).css('opacity','.5')
});

$(".img-responsive").mouseout(function() {
    $(this).css('opacity','1')
});


// Jquery for loading animation //

$(window).on('load', function (e) {
  setTimeout(loader, 500);
  function loader() {
    $(".title_name").addClass("animated fadeIn fade");
    $(".title_job").addClass("animated fadeIn fade");
  }

});

// change color of nav collapsed //

$('.navbar-toggle').click(function() {
       $('#myNavbar').toggleClass('navBack');
       $('.navbar-header').toggleClass('navBack');
});

// transition effect on navbar //

$(window).scroll(function() {

  var nav = $('.navbar');
  var navPosition = nav.offset();

  var about = $('.about_title');
  var aboutPosition = about.offset();

  var story = $('.my_story')
  var storyPosition = story.offset();

  if (navPosition.top > 10) {
    $('.navbar').addClass('nav_scroll');
  } else if (navPosition.top < 10) {
    $('.navbar').removeClass('nav_scroll');
  }

// fade in for projects section //

  var $projectsTitle = $('.projects_title')

  $projectsTitle.waypoint(function() {
         $(this.element).addClass('animated fadeInUp fade');
     }, {
         offset: '70%'
     });

  var $projectDivs = $('.project_div')

  $projectDivs.waypoint(function() {
    $(this.element).addClass('animated fadeInUp fade')
  }, {
      offset: '70%'
  });

// fadeIn effect for about section //

  about.waypoint(function() {
    about.addClass('animated fadeInLeft fade');
    story.addClass('animated fadeInLeft fade');
  }, {
      offset: '70%'
  });

});
