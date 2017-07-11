$(document).ready( function(){
    //mensaje en consola de listo
    console.log("El documento HTML está listo.");
    //Ocultando el icono de menu en el recipe
    $("#icono_menu_oculto").hide();

    // Si hace click en la flecha back, vuelve al index
    $(".icon-arrow-left-alt").click(function(event) {
        window.open('index.html','_self',false);
    });

});