function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function handleScroll() {
  var element = document.getElementById("fadeInElement");

  if (isElementInViewport(element)) {
    element.style.opacity = 1;
  }
}

// I donn't know how this fuckign works it took forever please don't delete it
window.addEventListener("scroll", handleScroll);

// Initial check on page load
handleScroll();