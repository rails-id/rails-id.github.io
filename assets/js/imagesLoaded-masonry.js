$('.three-column').imagesLoaded( function() {
  $('.three-column').masonry({
    columnWidth: '.column',
    itemSelector: '.column',
    animate: true,
    percentPosition: true
  })
});
