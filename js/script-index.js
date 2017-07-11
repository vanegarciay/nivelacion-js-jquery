$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
    renderActivities(activitiesArray);

    //Ocultando el icono de flecha en el index
    $("#flecha_index_oculta").hide();

    // Si hace click en la flecha back, vuelve al index
    $(".todas_las_recetas").click(function(event) {
        window.open('recipe.html','_self',false);
    });

    // Agrega y quita clase
    

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
    var recetas_filtradas = jQuery.grep(recipesArray, function( arreglo ) {
        return arreglo.highlighted == true;
    });
    console.log("highlighted es verdadero", recetas_filtradas);
    renderRecipe(recetas_filtradas);
}

/*
* Función que se encarga de pintar UNA recetas que tenga
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
    recipe.forEach(function(el) { // Por alguna razon no me funciono con el each de JQuery
        $(".list-recipes").append('<a class="item-recipe" href="#">' +
        '<span class="attribution">' +
        '<span class="title-recipe"> ' + el.title + ' </span>' +
        '<span class="metadata-recipe">' +
        '<span class="author-recipe"> '+ el.source.name +' </span>' +
        '<span class="bookmarks-recipe">' +
        '<span class="icon-bookmark"></span>' +
        '</span>' +
        '</span>' +
        '</span>' +
        '<img src="img/recipes/320x350/'+el.name+'.jpg"/>' +
        '</a>');
    });
}

/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray.length);
    console.log(activitiesArray.length);
    activitiesArray.forEach(function(el){
        console.log(el);
        renderActivity(el);
    });
    if(activitiesArray.length > 0) {
        $(".wrapper-message").hide();
    }

}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	$(".list-activities").append('<a href="#" class="item-activity">' +
    '<span class="attribution">' +
    '<span class="avatar">' +
    '<img src="'+ recipe.userAvatar+'.jpg" class="image-avatar">' +
    '</span>' +
    '<span class="meta">' +
    '<span class="author">'+ recipe.userName+'</span> made' +
    '<span class="recipe">'+ recipe.recipeName+'</span>' +':' + recipe.text +
    '<span class="location">'+'&mdash;'+ recipe.place+'</span>' +
    '</span>'+
    '</span>' +
    '<div class="bg-image" style="background-image: url('+recipe.image+');"></div>'+
    '</a>')
}

function printNews(){
    $("#padre_parrafo").text('NUEVAS RECETAS');
}
printNews();


