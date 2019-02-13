document.addEventListener("turbolinks:load", function() {
  var repositories = ['rails-id.github.io', 'guides', 'weblog'];

  $.each(repositories, function (key, repos) {

    $.getJSON( "https://api.github.com/repos/rails-id/" + repos + "/contributors", function( data ) {

      $.each( data, function( index, value ) {
        $( "#" + repos.replace(/\./g, '-') ).append("" +
          "<div class=\"col-md-3 kontributor\">\n" +
          "  <a href=\"" + value.html_url + "\" target=\"_blank\"><img src=\"" + value.avatar_url + "\" class=\"avatar grayscale\" alt=\"" + value.login + "\"></a>\n" +
          "  <div class=\"login\">" + value.login + "</div>\n" +
          "  <a href=\"https://github.com/rails-id/" + repos + "/commits?author=" + value.login + "\" class=\"commit\" target=\"_blank\">" + value.contributions + " commits</a>\n" +
          "</div>")

      })

    })

  })
});
