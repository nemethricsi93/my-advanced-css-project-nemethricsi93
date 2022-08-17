function openMenu() {
  var x = document.getElementById("topnav");
  if (x.className === "navigation") {
    x.className += " navigation--mobil";
  } else {
    x.className = "navigation";
  }
}