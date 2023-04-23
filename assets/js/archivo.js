
  document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      alert("Los datos fueron enviados con éxito");
      form.reset();

      
    });
    
  });
  console.log()
  $(document).ready(function() {
    $('a.scroll-link').click(function(event) {
      event.preventDefault();console.log()
      $('html, body').animate({scrollTop: $($.attr(this, 'href')).offset().top}, 1200);
    });console.log()
  });
  