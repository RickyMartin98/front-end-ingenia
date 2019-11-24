$(document).ready(toggle);

var contador = 1;

function toggle () {
    $('.botonEncabezado').click(function () {
        if ( contador == 1) {
            $('#List').animate({
                top: '0'
            });
            contador = 0;
        } else {
            contador = 1;
            $('#List').animate({
                top: '-100%'
            });
        }       
    });
}