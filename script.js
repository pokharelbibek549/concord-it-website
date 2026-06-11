// WAIT UNTIL PAGE LOADS
window.onload = function () {

  // GET BUTTON
  let topButton = document.getElementById("topBtn");

  // SHOW BUTTON ON SCROLL
  window.onscroll = function () {

    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {

      topButton.style.display = "block";

    } else {

      topButton.style.display = "none";

    }

  };

};

// SCROLL TO TOP FUNCTION
function scrollToTop() {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}