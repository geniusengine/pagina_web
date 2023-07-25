var swiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 8000, // Cambia el tiempo de transición de cada imagen en milisegundos (1000 = 1 segundo)
     },
    loop: true, 
    pagination: {
        el: '.swiper-pagination',
    },
});

function abrirVentana() {
    var ventanaAncho = 800;
    var ventanaAlto = 600;
    var ventanaIzquierda = (screen.width - ventanaAncho) / 2;
    var ventanaArriba = (screen.height - ventanaAlto) / 2;
    var opciones = "width=" + ventanaAncho + ",height=" + ventanaAlto + ",left=" + ventanaIzquierda + ",top=" + ventanaArriba;

    window.open("contacto.html", "MiVentanaEmergente", opciones);
}
 