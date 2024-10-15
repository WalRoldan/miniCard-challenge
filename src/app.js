$(document).ready(function () {
  // Escuchar el clic en el botón con clase `card__button`
  $(".card__button").on("click", function () {
    const isSelected = $(this).hasClass("selected");

    // Cambiar color basado en si está seleccionado
    if (isSelected) {
      $(this).css("background-color", "#7AB800"); // Cambia a verde
    } else {
      $(this).css("background-color", "#CC292B"); // Cambia a rojo
    }

    // Alternar la clase `selected` cada vez que se haga clic
    $(this).toggleClass("selected");
  });
});
