$( document ).ready(function() {
  // header branding Date
  var d = new Date();
  var month = d.getMonth()+1;
  var day = d.getDate();
  var outputdate = ((''+day).length<2 ? '0' : '') + day + '/' + ((''+month).length<2 ? '0' : '') + month + '/' + d.getFullYear();
    $('#todaysDate').html(outputdate); 
  // header branding time
  "use strict";
  let targetId = $("#todaysTime");
  let targetWidth = 0.8;
  function updateClock() {
    let time = new Date();
    let hours = (time.getHours() < 10 ? "0" : "" ) + time.getHours() + "<span class='pointColon'>:</span>";
    let minutes = (time.getMinutes() < 10 ? "0" : "" ) + time.getMinutes() + "<span class='pointColon'>:</span>";
    let seconds = (time.getSeconds() < 10 ? "0" : "" ) + time.getSeconds();
    targetId.html(hours + minutes + seconds);
    setTimeout(updateClock, 1000);
  }
  updateClock();
  //Header article carousel
  $(".header-article").owlCarousel({
    loop: true,
    autoplay: true,
    items: 1,
    nav: true,
    autoplayHoverPause: true,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp'
  });
  // Main Banner Carousel
  $(".main-carousel-wrapper").owlCarousel({
    loop: true,
    autoplay: true,
    nav: false,
    autoplaySpeed:4000,
    autoplayHoverPause: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }

  });
});