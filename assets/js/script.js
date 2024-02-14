// smooth scroll

$(document).ready(function(){
    $("a").on('click', function(event) {
    if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
    scrollTop: $(hash).offset().top
    }, 300, function(){
    
    window.location.hash = hash;
    });
    }
    });
   });

//inicializar tooltips

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

// alert formulario

$('#alert-form').on('click', function () {
    alert('Mensaje enviado correctamente, nos contactaremos a la brevedad')
});
   