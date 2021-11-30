function topBar() {
  var x = document.getElementById("myTopbar");
  if (x.className === "topbar") {
    x.className += " responsive";
  } else {
    x.className = "topbar";
  }
}