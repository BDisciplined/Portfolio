$(document).ready(function () {
  applyActiveClass();

  $("nav").on("click", function () {
    applyActiveClass();
  });

  function applyActiveClass() {
    let where = window.location.href.toString();
    console.log(where + " open");

    $(".home, .about, .y1, .y2, .y3").removeClass("we-here");

    if (where.includes("index")) {
      $(".home a").addClass("we-here");
    } else if (where.includes("about")) {
      $(".about a").addClass("we-here");
    } else if (where.includes("21-22")) {
      $(".y1 a").addClass("we-here");
    } else if (where.includes("22-23")) {
      $(".y2 a").addClass("we-here");
    } else if (where.includes("23-24")) {
      $(".y3 a").addClass("we-here");
    }
  }
});
