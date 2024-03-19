var sections = document.querySelectorAll("section");

window.onscroll = () => {
  sections.forEach((sec) => {
    // his retrieves the current vertical scroll position of the window.
    var top = window.scrollY;
    //  It calculates the offset from the top of the document for the current section, adjusted by 150 pixels. This offset is used as the starting point for determining when the section becomes visible.
    var offset = sec.offsetTop - 150;
    // This gets the height of the current section.
    var height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add("show-anime");
    } else {
      sec.classList.remove("show-anime");
    }
  });
};

// sec = html section tag
