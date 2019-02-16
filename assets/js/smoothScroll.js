document.addEventListener("turbolinks:load", function() {
  $('a[href*="#"]').smoothScroll({
    speed: 1000,
  });
});
