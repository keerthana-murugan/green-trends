$(document).ready(function () {
  const $slider = $(".slickCarousel");
  const $innerSlider = $(".innerCarousel");

  $(".innerCarousel").slick({
    infinite: true,
    speed: 1000,
    arrows: true,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $slider
    .on("init", () => {
      mouseWheel($slider);
    })
    .slick({
      dots: false,
      vertical: true,
      infinite: false,
      slidesToShow: 1,
      speed: 900,
      verticalSwiping: true,
      touchMove: true,
      swipe: true,
      swipeToSlide: true,
      arrows: false,
    });

  function mouseWheel($slider) {
    $(window).on("wheel", { $slider: $slider }, mouseWheelHandler);
  }

  function mouseWheelHandler(event) {
    event.preventDefault();
    const $slider = event.data.$slider;
    const delta = event.originalEvent.deltaY;
    if (delta < 0) {
      $slider.slick("slickPrev");
    } else {
      $slider.slick("slickNext");
    }
  }
});

function openNav() {
  if (window.innerWidth < 600) {
    document.getElementById("mySidenav").style.width = "100vw";
  } else {
    document.getElementById("mySidenav").style.width = "395px";
  }
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
