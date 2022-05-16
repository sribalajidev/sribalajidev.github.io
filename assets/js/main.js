$( document ).ready(function() {
  // header strip Date
  var d = new Date();
  var month = d.getMonth()+1;
  var day = d.getDate();
  var outputdate = ((''+day).length<2 ? '0' : '') + day + '/' + ((''+month).length<2 ? '0' : '') + month + '/' + d.getFullYear();
    $('#todaysDate').html(outputdate); 
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
});