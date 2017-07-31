function slide_front_text() {
  $('#slider_text').fadeOut(800, function() {
      $(this).text('Welcome to my site').fadeIn(500).delay(2200);
      $(this).fadeOut(1200, function() {
        $(this).text("Put your feet up, stay a while").fadeIn(500).delay(2200);
        $(this).fadeOut(1200, function() {
          $(this).text("Ready to see my work? Click below.").fadeIn(500).delay(5500);
        });
      });
  });
};
slide_front_text()
