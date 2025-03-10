document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactoFormulario").addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        let nombre = document.getElementById("nombre").value.trim();
        let email = document.getElementById("email").value.trim();
        let mensaje = document.getElementById("mensaje").value.trim();
        let valido = true;

        // Limpiar mensajes de error
        document.getElementById("errorNombre").textContent = "";
        document.getElementById("errorEmail").textContent = "";
        document.getElementById("errorMensaje").textContent = "";

        // Validación del Nombre
        if (nombre === "") {
            document.getElementById("errorNombre").textContent = "Por favor, ingresa tu nombre.";
            valido = false;
        }

        // Validación del Email
        let emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById("errorEmail").textContent = "Ingresa un correo válido.";
            valido = false;
        }

        // Validación del Mensaje
        if (mensaje === "") {
            document.getElementById("errorMensaje").textContent = "Por favor, escribe un mensaje.";
            valido = false;
        }

        // Si todo es válido, mostrar mensaje de éxito
        if (valido) {
            alert("¡Gracias por tu mensaje! Nos pondremos en contacto pronto.");
            document.getElementById("contactoFormulario").reset();
        }
    });
});
