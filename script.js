$(document).ready(function () {
  let dropDownActive = false;

  applyActiveClass();

  $("nav a").on("click", function () {
    applyActiveClass();
  });

  $("a").on("mouseover", function () {
    if ($(this).hasClass("we-here")) {
      $(this).css("color", "var(--main-color)");
    }
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

    $(".home, .about, .years, .y1, .y2, .y3").removeClass("we-here");

    if (where.includes("index")) {
      $(".home a").addClass("we-here");
    } else if (where.includes("about")) {
      $(".about a").addClass("we-here");
    } else if (where.includes("21-22")) {
      if ($(".small-nav1 nav").css("display") == "none") {
        $(".y1 a").addClass("we-here");
      } else {
        $(".years").addClass("we-here");
        $(".y1 a").css("color", "var(--main-back-color)");
      }
    } else if (where.includes("22-23")) {
      if ($(".small-nav1 nav").css("display") == "none") {
        $(".y2 a").addClass("we-here");
      } else {
        $(".years").addClass("we-here");
        $(".y2 a").css("color", "var(--main-back-color)");
      }
    } else if (where.includes("23-24")) {
      if ($(".small-nav1 nav").css("display") == "none") {
        $(".y3 a").addClass("we-here");
      } else {
        $(".years").addClass("we-here");
        $(".y3 a").css("color", "var(--main-back-color)");
      }
    }
  }
});
