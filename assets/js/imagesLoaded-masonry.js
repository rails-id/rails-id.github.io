document.addEventListener("turbolinks:load", function() {
  $('.imagesLoaded-masonry').imagesLoaded( function() {
    $('.imagesLoaded-masonry').masonry({
      columnWidth: '.col-md-4',
      itemSelector: '.col-md-4',
      animate: true,
      percentPosition: true
    })
  });
});
