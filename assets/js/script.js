document.addEventListener('DOMContentLoaded', function() {
    // Función para detener todos los videos excepto el clicado
    /*function stopOtherVideos(clickedVideo) {
        var videos = document.querySelectorAll('video');
        videos.forEach(function(video) {
            if (video !== clickedVideo) {
                video.pause(); // Pausa el video
            }
        });
    }*/

    // Función para detener todos los videos excepto el clicado
    function stopOtherVideos(clickedVideo) {
        var videos = document.querySelectorAll('video');
        videos.forEach(function(video) {
            if (video !== clickedVideo && !video.paused) {
                video.pause(); // Pausa el video si no es el clicado y está reproduciéndose
            }
        });
    }

    // Evento clic en el video
    document.querySelectorAll('video').forEach(function(video) {
        video.addEventListener('click', function() {
            if (this.paused) {
                stopOtherVideos(this); // Detener otros videos cuando se hace clic en uno para reproducirlo
                this.play(); // Reproducir el video si está pausado
            } else {
                this.pause(); // Pausar el video si está reproduciéndose
            }
        });

        video.addEventListener('play', function() {
            var currentVideo = this;
            stopOtherVideos(currentVideo); // Detener otros videos cuando se inicia la reproducción de este
        });
    });
});


// Función para validar y enviar el formulario
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formularioContacto').addEventListener('submit', function(event) {
        var nombre = document.getElementById('nombre').value;
        var correo = document.getElementById('correo').value;
        var mensaje = document.getElementById('mensaje').value;

        // Validar que todos los campos estén completados
        if (nombre.trim() === '' || correo.trim() === '' || mensaje.trim() === '') {
            alert('Por favor completa todos los campos del formulario.');
            event.preventDefault(); // Evitar que el formulario se envíe automáticamente
            return; // Detener la ejecución si los campos no están completados
        }

        // Validar el formato del correo electrónico
        var correoRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!correoRegExp.test(correo)) {
            alert('Por favor ingresa un correo electrónico válido.');
            event.preventDefault(); // Evitar que el formulario se envíe automáticamente
            return; // Detener la ejecución si el correo electrónico no tiene el formato correcto
        }
        // Si los campos están completados y el formato del correo es correcto, el formulario se enviará automáticamente a través de FormSubmit
        // Restablecer el formulario después de enviarlo
        setTimeout(function() {
            event.target.reset();
        }, 3000); // Retraso de 3000 milisegundos (3 segundo)

        // Mostrar mensaje de éxito utilizando toastify.js
        Toastify({
            text: "¡El mensaje fue enviado con éxito!",
            duration: 3000, // Duración del mensaje en milisegundos (3 segundos en este caso)
            close: true, // Mostrar botón de cierre (X)
            gravity: "center", // Posición del mensaje en la pantalla
            backgroundColor: "#495057", // Color de fondo del mensaje (gris)
        }).showToast();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos todos los elementos <a> dentro de los <li> de la barra de navegación
    const navLinks = document.querySelectorAll('.navbar-nav .nav-item .nav-link');

    // Iteramos sobre cada elemento <a>
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Quitamos la clase 'selected' de todos los elementos <li>
            navLinks.forEach(item => {
                item.parentElement.classList.remove('selected');
            });
            // Añadimos la clase 'selected' solo al elemento <li> actual
            this.parentElement.classList.add('selected');
        });
    });
});

// Función para validar y enviar el formulario
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formularioContacto').addEventListener('submit', function(event) {
        var nombre = document.getElementById('nombre4').value;
        var correo = document.getElementById('correo4').value;
        var mensaje = document.getElementById('mensaje4').value;

        // Validar que todos los campos estén completados
        if (nombre.trim() === '' || correo.trim() === '' || mensaje.trim() === '') {
            alert('Por favor completa todos los campos del formulario.');
            event.preventDefault(); // Evitar que el formulario se envíe automáticamente
            return; // Detener la ejecución si los campos no están completados
        }

        // Validar el formato del correo electrónico
        var correoRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!correoRegExp.test(correo)) {
            alert('Por favor ingresa un correo electrónico válido.');
            event.preventDefault(); // Evitar que el formulario se envíe automáticamente
            return; // Detener la ejecución si el correo electrónico no tiene el formato correcto
        }
        // Si los campos están completados y el formato del correo es correcto, el formulario se enviará automáticamente a través de FormSubmit
        // Restablecer el formulario después de enviarlo
        setTimeout(function() {
            event.target.reset();
        }, 3000); // Retraso de 3000 milisegundos (3 segundo)

        // Mostrar mensaje de éxito utilizando toastify.js
        Toastify({
            text: "¡El mensaje fue enviado con éxito!",
            duration: 3000, // Duración del mensaje en milisegundos (3 segundos en este caso)
            close: true, // Mostrar botón de cierre (X)
            gravity: "center", // Posición del mensaje en la pantalla
            backgroundColor: "#495057", // Color de fondo del mensaje (gris)
        }).showToast();
    });
});

// Función para validar y enviar el formulario
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formularioContacto2').addEventListener('submit', function(event) {        
        var correo = document.getElementById('correo2').value;
        var mensaje = document.getElementById('mensaje2').value;

        // Validar que todos los campos estén completados
        if (correo.trim() === '' || mensaje.trim() === '') {
            alert('Por favor completa todos los campos del formulario.');
            event.preventDefault(); // Evitar que el formulario se envíe automáticamente
            return; // Detener la ejecución si los campos no están completados
        }

        // Validar el formato del correo electrónico
        var correoRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!correoRegExp.test(correo)) {
            alert('Por favor ingresa un correo electrónico válido.');
            event.preventDefault(); // Evitar que el formulario se envíe automáticamente
            return; // Detener la ejecución si el correo electrónico no tiene el formato correcto
        }
        // Si los campos están completados y el formato del correo es correcto, el formulario se enviará automáticamente a través de FormSubmit
        // Restablecer el formulario después de enviarlo
        setTimeout(function() {
            event.target.reset();
        }, 3000); // Retraso de 3000 milisegundos (3 segundo)

        // Mostrar mensaje de éxito utilizando toastify.js
        Toastify({
            text: "¡El mensaje fue enviado con éxito!",
            duration: 3000, // Duración del mensaje en milisegundos (3 segundos en este caso)
            close: true, // Mostrar botón de cierre (X)
            gravity: "center", // Posición del mensaje en la pantalla
            backgroundColor: "#495057", // Color de fondo del mensaje (gris)
        }).showToast();
    });
});

// Función para validar y enviar el formulario
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('formularioContacto2').addEventListener('submit', function(event) {        
        var correo = document.getElementById('correo3').value;
        var mensaje = document.getElementById('mensaje3').value;

        // Validar que todos los campos estén completados
        if (correo.trim() === '' || mensaje.trim() === '') {
            alert('Por favor completa todos los campos del formulario.');
            event.preventDefault(); // Evitar que el formulario se envíe automáticamente
            return; // Detener la ejecución si los campos no están completados
        }

        // Validar el formato del correo electrónico
        var correoRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!correoRegExp.test(correo)) {
            alert('Por favor ingresa un correo electrónico válido.');
            event.preventDefault(); // Evitar que el formulario se envíe automáticamente
            return; // Detener la ejecución si el correo electrónico no tiene el formato correcto
        }
        // Si los campos están completados y el formato del correo es correcto, el formulario se enviará automáticamente a través de FormSubmit
        // Restablecer el formulario después de enviarlo
        setTimeout(function() {
            event.target.reset();
        }, 3000); // Retraso de 3000 milisegundos (3 segundo)

        // Mostrar mensaje de éxito utilizando toastify.js
        Toastify({
            text: "¡El mensaje fue enviado con éxito!",
            duration: 3000, // Duración del mensaje en milisegundos (3 segundos en este caso)
            close: true, // Mostrar botón de cierre (X)
            gravity: "center", // Posición del mensaje en la pantalla
            backgroundColor: "#495057", // Color de fondo del mensaje (gris)
        }).showToast();
    });
});

//funsion para agrandar la tarjeta cada vez que psao el mouse por encima
function enlargeCard(card) {
    if (window.innerWidth > 575) { // Verifica que el ancho de la pantalla sea mayor que 575px para su funcionamiento, en pantallas mas pequeñas no funcionará
      card.style.transform = 'scale(1.02)'; // Agranda la tarjeta al 103 de su tamaño original
    }
}
//funsion para achicar a su tamanio original cundo retiro el puntero encima de el
function resetCardSize(card) {
    card.style.transform = 'scale(1)'; // Restablece el tamaño de la tarjeta a su valor original
}

//funsion para agrandar la tarjeta cada vez que psao el mouse por encima
function enlargeCard2(card) {
    if (window.innerWidth > 575) { // Verifica que el ancho de la pantalla sea mayor que 575px para su funcionamiento, en pantallas mas pequeñas no funcionará
      card.style.transform = 'scale(1.1)'; // Agranda la tarjeta al 103 de su tamaño original
    }
}

//funsion para achicar a su tamanio original cundo retiro el puntero encima de el
function resetCardSize2(card) {
    card.style.transform = 'scale(1)'; // Restablece el tamaño de la tarjeta a su valor original
}




const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))




$(document).ready(function(){
    $('.card').matchHeight();
});

document.addEventListener('DOMContentLoaded', function() {
    const backgroundAudio = document.getElementById('backgroundAudio');
    const videos = document.querySelectorAll('video');
    
    // Función para pausar el audio de fondo
    function pauseBackgroundAudio() {
        backgroundAudio.pause();
    }
    
    // Función para reproducir el audio de fondo
    function playBackgroundAudio() {
        backgroundAudio.play();
    }
    
    // Función para ajustar el volumen del audio de fondo
    function setBackgroundAudioVolume(volume) {
        backgroundAudio.volume = volume;
    }
    
    // Ajustar el volumen inicial del audio de fondo
    setBackgroundAudioVolume(0.2); // Por ejemplo, ajusta el volumen al 50%
    
    // Agregar evento de clic a todos los videos para pausar el audio de fondo cuando se reproduzcan
    videos.forEach(function(video) {
        video.addEventListener('play', pauseBackgroundAudio);
        video.addEventListener('pause', function() {
            // Verificar si todos los videos están en pausa para reproducir el audio de fondo nuevamente
            const allVideosPaused = [...videos].every(video => video.paused);
            if (allVideosPaused) {
                playBackgroundAudio();
            }
        });
    });
});
