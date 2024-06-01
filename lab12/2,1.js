window.onscroll = function() {
    var popup = document.getElementById("popup");
    var scrollHeight = 200;
    if (window.pageYOffset > scrollHeight && !sessionStorage.getItem('popupClosed')) {
        popup.style.display = "block";
    } else {
        popup.style.display = "none";
    }
}

document.getElementById("popupCloseButton").onclick = function() {
    document.getElementById("popup").style.display = "none";
    sessionStorage.setItem('popupClosed', 'true');
}