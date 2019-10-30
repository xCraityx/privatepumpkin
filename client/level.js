setTimeout(level(), 300000)
setTimeout(nohacks(), 999)

function nohacks() {
	document.getElementById("pumpkinlevel").innerHTML = localStorage.getItem("level");
}

function level(){
	localStorage.getItem("level")++;
	localStorage.setItem("level", (localStorage.getItem("level"))+1);
	document.getElementById("pumpkinlevel").innerHTML = localStorage.getItem("level");
}