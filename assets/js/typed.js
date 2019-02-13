document.addEventListener("turbolinks:load", function() {
  $(".first-path").html("<span class=\"path\">~</span>\n" +
    "<span class=\"prompt\">$</span>");

  $(".first-cmd").typed({
    strings: ["gem install rails"],
    startDelay: 500,
    showCursor: false,
    typeSpeed: 30,
    callback: function() {
      $(".second-path").html("<span class=\"path\">~</span>\n" +
        "<span class=\"prompt\">$</span>");
      second_cmd()
    }
  });

  function second_cmd()
  {
    $(".second-cmd").typed({
      strings: ["rails new apps"],
      startDelay: 500,
      showCursor: false,
      typeSpeed: 30,
      callback: function() {
        $(".third-path").html("<span class=\"path\">~</span>\n" +
          "<span class=\"prompt\">$</span>");
        third_cmd()
      }
    })
  }

  function third_cmd()
  {
    $(".third-cmd").typed({
      strings: ["cd apps"],
      startDelay: 500,
      showCursor: false,
      typeSpeed: 30,
      callback: function() {
        $(".fourth-path").html("<span class=\"path\">~/apps</span>\n" +
          "<span class=\"prompt\">$</span>");
        fourth_cmd()
      }
    })
  }

  function fourth_cmd()
  {
    $(".fourth-cmd").typed({
      strings: ["rails s"],
      startDelay: 500,
      showCursor: false,
      typeSpeed: 30,
      callback: function() {
        $(".output").html("# =&gt; arahkan browser ke <a href=\"http://localhost:3000\" target=\"_blank\">localhost:3000</a>")
      }
    })
  }
});
