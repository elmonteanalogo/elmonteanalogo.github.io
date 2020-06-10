$(window).scroll(() => { 
  // Distance from top of document to top of footer.
  topOfFooter = $('#footer').position().top;
  // Distance user has scrolled from top, adjusted to take in height of sidebar (570 pixels inc. padding).
  scrollDistanceFromTopOfDoc = $(document).scrollTop() + 570;
  // Difference between the two.
  scrollDistanceFromTopOfFooter = scrollDistanceFromTopOfDoc - topOfFooter;

  // If user has scrolled further than footer,
  // pull sidebar up using a negative margin.
  if (scrollDistanceFromTopOfDoc > topOfFooter) {
    $('#cart').css('margin-top',  0 - scrollDistanceFromTopOfFooter);
  } else  {
    $('#cart').css('margin-top', 0);
  }
});