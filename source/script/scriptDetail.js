// JavaScript, um das Hauptbild mit dem ausgewählten Thumbnail zu aktualisieren
document.addEventListener("DOMContentLoaded", function () {
    const mainImage = document.getElementById("mainImage");
    const thumbnails = document.querySelectorAll(".thumbnail img");
  
    // Füge einen Klick-Ereignislistener zu jedem Thumbnail hinzu
    thumbnails.forEach(function (thumbnail) {
      thumbnail.addEventListener("click", function () {
        // Aktualisiere das Hauptbild mit dem ausgewählten Thumbnail
        mainImage.src = thumbnail.src;
      });
    });
  
    // Stelle sicher, dass es Thumbnails gibt
    if (thumbnails.length > 0) {
      mainImage.src = thumbnails[0].src; // Setze das Hauptbild auf das erste Thumbnail
    }
  });


  