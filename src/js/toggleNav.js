import $ from 'jquery';
$(document).ready(toggle);

var contador = 1;
export function toggle () {
    $('.botonEncabezado').click(function () {
       if ( $("#List").css("display") == "flex" ) {
            $("#List").css("display","none");
       } else {
            $("#List").css("display","flex");
       }
       /*if ( $("#List").css("display") == "none") {
            $("#List").slideDown("Slow");
        } else { 
            $("#List").slideUp/*("Slow");
        }*/
    });
}