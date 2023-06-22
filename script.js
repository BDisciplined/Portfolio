$(document).ready(function () {
  let dropDownActive = false;

  applyActiveClass();

  $("nav a").on("click", function () {
    applyActiveClass();
  });

  $(".small-nav1 .years").on("click", function () {
    if (!dropDownActive) {
      $(this).css("color", "var(--main-back-color)");
      $($(this).find(".li-small1")).css("display", "flex");
      dropDownActive = true;
    } else {
      $(this).css("color", "");
      $($(this).find(".li-small1")).css("display", "");
      dropDownActive = false;
    }
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
