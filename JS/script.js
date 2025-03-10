// Inicializar bxSlider cuando el documento esté listo
$(document).ready(function(){
    $('.bxslider').bxSlider({
        auto: true,          // Deslizamiento automático
        mode: 'horizontal',  // Transición en forma de carrusel
        captions: true,      // Mostrar subtítulos si los hay
        slideWidth: 2000,    // Ancho del slider
        adaptiveHeight: true // Ajustar altura automáticamente
    });
});

// Función para actualizar la fecha y hora en formato 12 horas con AM/PM y minutos
function actualizarFechaHora() {
    let ahora = new Date();
    
    // Obtener la hora, minutos y AM/PM
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let ampm = horas >= 12 ? 'PM' : 'AM';

    // Convertir formato 12 horas
    horas = horas % 12;
    horas = horas ? horas : 12; // Si es 0, cambiar a 12
    minutos = minutos < 10 ? '0' + minutos : minutos; // Agregar 0 si es menor a 10

    // Obtener la fecha en formato largo
    let opcionesFecha = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
    };
    let fechaFormateada = ahora.toLocaleDateString('es-ES', opcionesFecha);

    // Concatenar fecha y hora
    let fechaHora = `${fechaFormateada} - ${horas}:${minutos} ${ampm}`;
    
    // Insertar en el HTML
    document.getElementById('fecha-hora').innerHTML = fechaHora;
}

// Llamar a la función inmediatamente al cargar la página
actualizarFechaHora();

// Ajustar la actualización para sincronizar con el cambio de minuto exacto
setTimeout(function() {
    actualizarFechaHora(); // Actualiza en el momento exacto en que cambie el minuto
    setInterval(actualizarFechaHora, 60000); // Luego, actualiza cada minuto
}, (60 - new Date().getSeconds()) * 1000);

// Funcion Footer para arriba 
document.addEventListener("DOMContentLoaded", function () {
    var botonArriba = document.getElementById("ir-arriba");

    // Mostrar botón solo cuando se haga scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            botonArriba.style.display = "block";
        } else {
            botonArriba.style.display = "none";
        }
    });

    // Hacer scroll hacia arriba al hacer clic en el botón
    botonArriba.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Hace que el desplazamiento sea suave
        });
    });
});
