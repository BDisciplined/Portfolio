$(document).ready(function () {
  let dropDownActive = false;
  let barsClicked = false;
  let yearsClicked = false;

  whosActive();

  $("nav a").on("click", function () {
    whosActive();
  });

  $(".small-nav1 a, .desktop-nav a").on("mouseover", function () {
    if ($(this).hasClass("we-here")) {
      $(this).css("color", "var(--main-color)");
    }
  });

  /* small1 school years dropdown */
  $(".small-nav1 .years").on("click", function () {
    if (!dropDownActive) {
      if (!$(this).hasClass("we-here")) {
        $(this).css("color", "var(--main-back-color)");
      } else {
        $(this).css("color", "var(--main-color)");
      }
      $($(this).find(".li-small1")).css("display", "flex");
      dropDownActive = true;
    } else {
      if (!$(this).hasClass("we-here")) {
        $(this).css("color", "var(--main-back-color-darker)");
      } else {
        $(this).css("color", "var(--main-color)");
      }
      $($(this).find(".li-small1")).css("display", "");
      dropDownActive = false;
    }
  });

  /* small2 years dropdown */
  $(".menu").on("click", function () {
    $(".menu-container").toggleClass("open");
    if (!barsClicked) {
      $(".menu img").attr("src", "assets/imgs/icons/close-menu-small2.png");
      barsClicked = true;
    } else {
      $(".menu img").attr("src", "assets/imgs/icons/menu-small2.png");
      barsClicked = false;
    }
  });

  $(".option").on("click", function () {
    if ($(this).find(".years").length > 0) {
      $(".years-menu").toggleClass("open");
      if (!yearsClicked) {
        $($(this).find("img")).css("rotate", "90deg");
        yearsClicked = true;
      } else {
        $($(this).find("img")).css("rotate", "");
        yearsClicked = false;
      }
    }
  });

  function whosActive() {
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
        $(".y1 a").css("text-decoration", "underline");
      }
    } else if (where.includes("22-23")) {
      if ($(".small-nav1 nav").css("display") == "none") {
        $(".y2 a").addClass("we-here");
      } else {
        $(".years").addClass("we-here");
        $(".y2 a").css("color", "var(--main-back-color)");
        $(".y2 a").css("text-decoration", "underline");
      }
    } else if (where.includes("23-24")) {
      if ($(".small-nav1 nav").css("display") == "none") {
        $(".y3 a").addClass("we-here");
      } else {
        $(".years").addClass("we-here");
        $(".y3 a").css("color", "var(--main-back-color)");
        $(".y3 a").css("text-decoration", "underline");
      }
    }
  }
});
