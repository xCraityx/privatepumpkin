setTimeout(level(), 300000)
setTimeout(nohacks(), 100)

if (localStorage("level") < 1) {
	localStorage.getItem("level") = 1;
}

function nohacks() {
	document.getElementById("pumpkinlevel").innerHTML = localStorage.getItem("level");
}

function level() {
  var mylevel = localStorage.getItem("level");
  localStorage.setItem("level", (mylevel)+1);
  document.getElementById("pumpkinlevel").innerHTML = localStorage.getItem("level");
}