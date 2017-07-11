$(document).ready( function(){
    //mensaje en consola de listo
    console.log("El documento HTML está listo.");
    //Ocultando el icono de menu en el recipe
    $("#icono_menu_oculto").hide();

    // Si hace click en la flecha back, vuelve al index
    $(".icon-arrow-left-alt").click(function(event) {
        window.open('index.html','_self',false);
    });

 // Agrega y quita la clase make en clicks de elementos
    $(".js-show-make").click(function(event) {
        $(".page").addClass("make");
    });

    $(".js-show-recipe").click(function(){
        $(".recipe").removeClass("make");
    })

});