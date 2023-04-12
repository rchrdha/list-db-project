$(document).ready(function() {
  $(window).scroll(function() {
    $('.fade-in').each(function() {
      var imagePos = $(this).offset().top;
      var windowHeight = $(window).height();
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow + windowHeight - 100) {
        $(this).addClass('fade-in');
      }
    });
  });
});
