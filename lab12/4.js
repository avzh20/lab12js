var acc = document.getElementsByClassName("accordion-item");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    for (var j = 0; j < acc.length; j++) {
      acc[j].classList.remove("active");
      var panel = acc[j].nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      }
    }
    this.classList.add("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}