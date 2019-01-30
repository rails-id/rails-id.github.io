var ready = function() {
  document.getElementById('language-list').onclick = function() {
    this.classList.toggle('active')
  }
}

jQuery(document).on("turbolinks:load", ready);
