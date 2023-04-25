
  document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      alert("Los datos fueron enviados con éxito");
      form.reset();

      
    });
    const quienes = document.querySelector('#quienes');
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const seccionPosicion = quienes.getBoundingClientRect().top;
  const scrollPosicion = window.pageYOffset;

  if (scrollPosicion > seccionPosicion) {
    navbar.classList.remove('bg-transparent');
    navbar.classList.add('bg-dark');
  } else {
    navbar.classList.remove('bg-dark');
    navbar.classList.add('bg-transparent');
  }
});

  });
  console.log()
  $(document).ready(function() {
    $('a.scroll-link').click(function(event) {
      event.preventDefault();console.log()
      $('html, body').animate({scrollTop: $($.attr(this, 'href')).offset().top}, 1200);
    });console.log()
  });
  
