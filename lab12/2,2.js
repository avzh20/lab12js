window.onload = function() {
    var popup = document.getElementById("popup");
    var displayTime = 2000;
    setTimeout(function() {
        if (!sessionStorage.getItem('popupClosed')) {
            popup.style.display = "block";
        }
    }, displayTime);
}

document.getElementById("popupCloseButton").onclick = function() {
    document.getElementById("popup").style.display = "none";
    sessionStorage.setItem('popupClosed', 'true');
}