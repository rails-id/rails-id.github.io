$('.row').imagesLoaded( function() {
  $('.row').masonry({
    columnWidth: '.col-md-4',
    itemSelector: '.col-md-4',
    animate: true,
    percentPosition: true
  })
});
