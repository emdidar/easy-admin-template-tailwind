$(document).ready(function () {
  /*********************************************
     *  Smooth scrolling to all links
  /*********************************************/
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });

  /*********************************************
  *  Scroll to top
  /*********************************************/
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scroll-to-top").addClass("fixed");
      $("#scroll-to-top").removeClass("hidden");
    } else {
      $("#scroll-to-top").removeClass("fixed");
      $("#scroll-to-top").addClass("hidden");
    }
  });
});
